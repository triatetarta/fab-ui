import { getMDXComponents } from '@/mdx-components';
import { Button } from '@/registry/default/ui/button';
import fm from 'front-matter';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/page';
import { ArrowUpRight } from 'lucide-react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import * as z from 'zod';

import { getPageImage, source } from '@/lib/source';
import { absoluteUrl } from '@/lib/utils';

import { DocsCopyPage } from '@/components/docs-copy-page';

export default async function Page(props: PageProps<'/docs/[[...slug]]'>) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  const raw = await page.data.getText('raw');
  const { attributes } = fm(raw);

  const { links } = z
    .object({
      links: z
        .object({
          doc: z.string().optional(),
          api: z.string().optional(),
        })
        .optional(),
    })
    .parse(attributes);

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      breadcrumb={{ enabled: false }}
    >
      <div className='flex items-center justify-between'>
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsCopyPage page={raw} url={absoluteUrl(page.url)} />
      </div>

      <DocsDescription>{page.data.description}</DocsDescription>

      {links ? (
        <div className='flex items-center gap-2'>
          {links?.doc && (
            <Button variant='secondary' size='sm'>
              <a
                href={links.doc}
                target='_blank'
                rel='noreferrer'
                className='flex items-center gap-1'
              >
                Docs <ArrowUpRight />
              </a>
            </Button>
          )}
          {links?.api && (
            <Button variant='secondary' size='sm'>
              <a
                href={links.api}
                target='_blank'
                rel='noreferrer'
                className='flex items-center gap-1'
              >
                API Reference <ArrowUpRight />
              </a>
            </Button>
          )}
        </div>
      ) : null}

      <DocsBody className='pb-10'>
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<'/docs/[[...slug]]'>
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}
