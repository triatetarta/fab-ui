import { promises as fs } from 'fs';
import { tmpdir } from 'os';
import path from 'path';

import { Index } from '@/registry/__index__';
import { registryItemSchema, type RegistryItem } from 'shadcn/schema';
import { Project, ScriptKind } from 'ts-morph';

export function getRegistryComponent(name: string) {
  return Index[name]?.component;
}

export async function getRegistryItem(name: string) {
  const item = Index[name];

  if (!item) {
    return null;
  }

  // Fail early before doing expensive file operations.
  const result = registryItemSchema.safeParse(item);
  if (!result.success) {
    return null;
  }

  let files: typeof result.data.files = [];
  for (const file of result.data.files ?? []) {
    const content = await getFileContent(file);
    const relativePath = path.relative(process.cwd(), file.path);

    files.push({
      ...file,
      path: relativePath,
      content,
    });
  }

  // Fix file paths.
  files = fixFilePaths(files);

  const parsed = registryItemSchema.safeParse({
    ...result.data,
    files,
  });

  if (!parsed.success) {
    console.error(parsed.error.message);
    return null;
  }

  return parsed.data;
}

type FileType = NonNullable<RegistryItem['files']>[number];

async function getFileContent(file: FileType) {
  const raw = await fs.readFile(file.path, 'utf-8');

  const project = new Project({
    compilerOptions: {},
  });

  const tempFile = await createTempSourceFile(file.path);
  const sourceFile = project.createSourceFile(tempFile, raw, {
    scriptKind: ScriptKind.TSX,
  });

  // Remove meta variables.
  // removeVariable(sourceFile, "iframeHeight")
  // removeVariable(sourceFile, "containerClassName")
  // removeVariable(sourceFile, "description")

  let code = sourceFile.getFullText();

  // Some registry items uses default export.
  // We want to use named export instead.
  // TODO: do we really need this? - @shadcn.
  if (file.type !== 'registry:page') {
    code = code.replaceAll('export default', 'export');
  }

  // Fix imports.
  code = fixImport(code);

  return code;
}

async function createTempSourceFile(filename: string) {
  const dir = await fs.mkdtemp(path.join(tmpdir(), 'shadcn-'));
  return path.join(dir, filename);
}

function fixFilePaths(files: FileType[]) {
  if (!files) {
    return [];
  }

  // Resolve all paths relative to the first file's directory.
  const firstFilePath = files[0].path;
  const firstFilePathDir = path.dirname(firstFilePath);

  return files.map((file) => {
    return {
      ...file,
      path: path.relative(firstFilePathDir, file.path),
      target: getFileTarget(file),
    };
  });
}

export function fixImport(content: string) {
  const regex = /@\/(.+?)\/((?:.*?\/)?(?:components|ui|hooks|lib))\/([\w-]+)/g;

  const replacement = (
    match: string,
    path: string,
    type: string,
    component: string
  ) => {
    if (type.endsWith('components')) {
      return `@/components/${component}`;
    } else if (type.endsWith('ui')) {
      return `@/components/ui/${component}`;
    } else if (type.endsWith('hooks')) {
      return `@/hooks/${component}`;
    } else if (type.endsWith('lib')) {
      return `@/lib/${component}`;
    }

    return match;
  };

  return content.replace(regex, replacement);
}

function getFileTarget(file: FileType) {
  let target = file.target;

  if (!target || target === '') {
    const fileName = file.path.split('/').pop();
    if (
      file.type === 'registry:block' ||
      file.type === 'registry:component' ||
      file.type === 'registry:example'
    ) {
      target = `components/${fileName}`;
    }

    if (file.type === 'registry:ui') {
      target = `components/ui/${fileName}`;
    }

    if (file.type === 'registry:hook') {
      target = `hooks/${fileName}`;
    }

    if (file.type === 'registry:lib') {
      target = `lib/${fileName}`;
    }
  }

  return target ?? '';
}
