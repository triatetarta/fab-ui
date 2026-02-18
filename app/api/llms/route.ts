import { source } from '@/lib/source';

export const revalidate = false;

export async function GET() {
  const pages = source.getPages();

  const sections: Record<string, string[]> = {
    Overview: [],
    'Fab Components': [],
    Components: [],
  };

  for (const page of pages) {
    const section = page.slugs[0];
    const title = page.data.title;
    const description = page.data.description ?? '';
    const url = `https://fab-ui.com${page.url}.md`;
    const line = `- [${title}](${url})${description ? `: ${description}` : ''}`;

    if (section === 'components') {
      sections['Components'].push(line);
    } else if (section === 'fab-components') {
      sections['Fab Components'].push(line);
    } else {
      sections['Overview'].push(line);
    }
  }

  const parts = [
    '# fab-ui',
    '',
    '> A modern registry of React and Next.js components, built on top of Base UI and beyond.',
  ];

  for (const [heading, lines] of Object.entries(sections)) {
    if (lines.length === 0) continue;
    parts.push('', `## ${heading}`, '', ...lines);
  }

  const content = parts.join('\n') + '\n';

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=31536000',
    },
  });
}
