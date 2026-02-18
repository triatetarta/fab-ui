import { readFileSync } from 'fs';
import path from 'path';

import { Index } from '@/registry/__index__';

import { fixImport } from './registry';

function getComponentSource(name: string): string | null {
  const item = Index[name];
  if (!item?.files?.[0]?.path) {
    return null;
  }

  const filePath = path.join(process.cwd(), item.files[0].path);

  try {
    let code = readFileSync(filePath, 'utf-8');
    code = code.replaceAll('export default', 'export');
    code = fixImport(code);
    return code;
  } catch {
    return null;
  }
}

export function processMdxForLLMs(content: string): string {
  // Replace <ComponentPreview name="X" ... /> with the example source code
  content = content.replace(
    /<ComponentPreview\s+[^>]*?name=['"]([^'"]+)['"][^>]*?\/>/g,
    (_match, name) => {
      const source = getComponentSource(name);
      if (!source) return '';
      return '```tsx\n' + source.trim() + '\n```';
    }
  );

  // Replace <ComponentSource name="X" ... /> with the UI component source code
  content = content.replace(
    /<ComponentSource\s+[^>]*?name=['"]([^'"]+)['"][^>]*?\/>/g,
    (_match, name) => {
      const source = getComponentSource(name);
      if (!source) return '';
      return '```tsx\n' + source.trim() + '\n```';
    }
  );

  // Strip presentational wrapper components
  content = content.replace(/<\/?CodeTabs>/g, '');
  content = content.replace(/<TabsList[^>]*>[\s\S]*?<\/TabsList>/g, '');
  content = content.replace(/<\/?TabsPanel[^>]*>/g, '');
  content = content.replace(/<\/?Steps>/g, '');
  content = content.replace(/<Step>(.*?)<\/Step>/g, '**$1**');
  content = content.replace(/<TabsTrigger[^>]*>[^<]*<\/TabsTrigger>/g, '');

  // Clean up extra blank lines (3+ consecutive newlines → 2)
  content = content.replace(/\n{3,}/g, '\n\n');

  return content.trim() + '\n';
}
