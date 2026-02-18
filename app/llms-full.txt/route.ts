import { processMdxForLLMs } from '@/lib/llm';
import { source } from '@/lib/source';

export const revalidate = false;

export async function GET() {
  const scan = source.getPages().map(async (page) => {
    const raw = await page.data.getText('raw');
    const markdown = processMdxForLLMs(raw);
    return `# ${page.data.title}\n\n${markdown}`;
  });
  const scanned = await Promise.all(scan);

  return new Response(scanned.join('\n\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=31536000',
    },
  });
}
