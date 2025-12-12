import { TabsList, TabsPanel, TabsTrigger } from '@/registry/default/ui/tabs';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { CodeBlockCommand } from '@/components/code-block-command';
import { CodeTabs } from '@/components/code-tabs';
import { ComponentPreview } from '@/components/component-preview';
import { ComponentSource } from '@/components/component-source';
import { CopyButton } from '@/components/copy-button';
import { getIconForLanguageExtension } from '@/components/icons';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    h1: ({ className, ...props }: React.ComponentProps<'h1'>) => (
      <h1
        className={cn(
          'font-heading mt-2 scroll-m-28 text-3xl font-bold tracking-tight',
          className
        )}
        {...props}
      />
    ),
    h2: ({ className, ...props }: React.ComponentProps<'h2'>) => {
      return (
        <h2
          id={props.children
            ?.toString()
            .replace(/ /g, '-')
            .replace(/'/g, '')
            .replace(/\?/g, '')
            .toLowerCase()}
          className={cn(
            'font-heading [&+]*:[code]:text-xl mt-10 scroll-m-28 text-xl font-medium tracking-tight first:mt-0 lg:mt-16 [&+.steps]:mt-0! [&+.steps>h3]:mt-4! [&+h3]:mt-6! [&+p]:mt-4!',
            className
          )}
          {...props}
        />
      );
    },
    h3: ({ className, ...props }: React.ComponentProps<'h3'>) => (
      <h3
        className={cn(
          'font-heading mt-12 scroll-m-28 text-lg font-normal tracking-tight [&+p]:mt-4! *:[code]:text-xl',
          className
        )}
        {...props}
      />
    ),
    h4: ({ className, ...props }: React.ComponentProps<'h4'>) => (
      <h4
        className={cn(
          'font-heading mt-8 scroll-m-28 text-base font-medium tracking-tight',
          className
        )}
        {...props}
      />
    ),
    h5: ({ className, ...props }: React.ComponentProps<'h5'>) => (
      <h5
        className={cn(
          'mt-8 scroll-m-28 text-base font-medium tracking-tight',
          className
        )}
        {...props}
      />
    ),
    h6: ({ className, ...props }: React.ComponentProps<'h6'>) => (
      <h6
        className={cn(
          'mt-8 scroll-m-28 text-base font-medium tracking-tight',
          className
        )}
        {...props}
      />
    ),
    a: ({ className, ...props }: React.ComponentProps<'a'>) => (
      <a
        className={cn('font-medium underline underline-offset-4', className)}
        {...props}
      />
    ),
    p: ({ className, ...props }: React.ComponentProps<'p'>) => (
      <p
        className={cn('leading-relaxed not-first:mt-6', className)}
        {...props}
      />
    ),
    strong: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
      <strong className={cn('font-medium', className)} {...props} />
    ),
    ul: ({ className, ...props }: React.ComponentProps<'ul'>) => (
      <ul className={cn('my-6 ml-6 list-disc', className)} {...props} />
    ),
    ol: ({ className, ...props }: React.ComponentProps<'ol'>) => (
      <ol className={cn('my-6 ml-6 list-decimal', className)} {...props} />
    ),
    li: ({ className, ...props }: React.ComponentProps<'li'>) => (
      <li className={cn('mt-2', className)} {...props} />
    ),
    blockquote: ({
      className,
      ...props
    }: React.ComponentProps<'blockquote'>) => (
      <blockquote
        className={cn('mt-6 border-l-2 pl-6 italic', className)}
        {...props}
      />
    ),
    img: ({ className, alt, ...props }: React.ComponentProps<'img'>) => (
      <img className={cn('rounded-md', className)} alt={alt} {...props} />
    ),
    hr: ({ ...props }: React.ComponentProps<'hr'>) => (
      <hr className='my-4 md:my-8' {...props} />
    ),
    table: ({ className, ...props }: React.ComponentProps<'table'>) => (
      <div className='my-6 no-scrollbar w-full overflow-y-auto rounded-lg border'>
        <table
          className={cn(
            'relative my-0! w-full overflow-hidden border-none bg-transparent! text-sm [&_tbody_tr:last-child]:border-b-0',
            className
          )}
          {...props}
        />
      </div>
    ),
    tr: ({ className, ...props }: React.ComponentProps<'tr'>) => (
      <tr className={cn('m-0 border-b', className)} {...props} />
    ),
    th: ({ className, ...props }: React.ComponentProps<'th'>) => (
      <th
        className={cn(
          'px-4 py-2 text-left font-bold [[align=center]]:text-center [[align=right]]:text-right',
          className
        )}
        {...props}
      />
    ),
    td: ({ className, ...props }: React.ComponentProps<'td'>) => (
      <td
        className={cn(
          'px-4 py-2 text-left whitespace-nowrap [[align=center]]:text-center [[align=right]]:text-right',
          className
        )}
        {...props}
      />
    ),
    pre: ({ className, children, ...props }: React.ComponentProps<'pre'>) => {
      return (
        <pre
          className={cn(
            'no-scrollbar min-w-0 overflow-x-auto px-4 py-3.5 outline-none has-data-highlighted-line:px-0 has-data-line-numbers:px-0 has-data-[slot=tabs]:p-0',
            className
          )}
          {...props}
        >
          {children}
        </pre>
      );
    },
    figure: ({ className, ...props }: React.ComponentProps<'figure'>) => {
      return <figure className={cn(className)} {...props} />;
    },
    figcaption: ({
      className,
      children,
      ...props
    }: React.ComponentProps<'figcaption'>) => {
      const iconExtension =
        'data-language' in props && typeof props['data-language'] === 'string'
          ? getIconForLanguageExtension(props['data-language'])
          : null;

      return (
        <figcaption
          className={cn(
            'flex items-center gap-2 text-code-foreground [&_svg]:size-4 [&_svg]:text-code-foreground [&_svg]:opacity-70',
            className
          )}
          {...props}
        >
          {iconExtension}
          {children}
        </figcaption>
      );
    },
    code: ({
      className,
      __raw__,
      __src__,
      __npm__,
      __yarn__,
      __pnpm__,
      __bun__,
      ...props
    }: React.ComponentProps<'code'> & {
      __raw__?: string;
      __src__?: string;
      __npm__?: string;
      __yarn__?: string;
      __pnpm__?: string;
      __bun__?: string;
    }) => {
      // Inline Code.
      if (typeof props.children === 'string') {
        return (
          <code
            className={cn(
              'relative rounded-md bg-muted px-[0.3rem] py-[0.2rem] font-mono text-[0.8rem] wrap-break-word outline-none',
              className
            )}
            {...props}
          />
        );
      }

      // npm command.
      const isNpmCommand = __npm__ && __yarn__ && __pnpm__ && __bun__;
      if (isNpmCommand) {
        return (
          <CodeBlockCommand
            __npm__={__npm__}
            __yarn__={__yarn__}
            __pnpm__={__pnpm__}
            __bun__={__bun__}
          />
        );
      }

      // Default codeblock.
      return (
        <>
          {__raw__ && <CopyButton value={__raw__} src={__src__} />}
          <code {...props} />
        </>
      );
    },
    Step: ({ className, ...props }: React.ComponentProps<'h3'>) => (
      <h3
        className={cn(
          'font-heading mt-8 scroll-m-32 text-xl font-normal tracking-tight',
          className
        )}
        {...props}
      />
    ),
    Steps: ({ ...props }) => (
      <div
        className='steps mb-12 [counter-reset:step] *:[h3]:first:mt-0! [&>h3]:step'
        {...props}
      />
    ),
    Image: ({
      src,
      className,
      width,
      height,
      alt,
      ...props
    }: React.ComponentProps<'img'>) => (
      <Image
        className={cn('mt-6 rounded-md border', className)}
        src={(src as string) || ''}
        width={Number(width)}
        height={Number(height)}
        alt={alt || ''}
        {...props}
      />
    ),
    TabsTrigger: ({
      className,
      ...props
    }: React.ComponentProps<typeof TabsTrigger>) => (
      <TabsTrigger className={cn('bg-transparent', className)} {...props} />
    ),
    TabsList: ({
      className,
      ...props
    }: React.ComponentProps<typeof TabsList>) => (
      <TabsList
        className={cn(
          'justify-start gap-4 rounded-none bg-transparent px-0',
          className
        )}
        {...props}
      />
    ),
    TabsPanel: ({
      className,
      ...props
    }: React.ComponentProps<typeof TabsPanel>) => (
      <TabsPanel
        className={cn(
          'relative [&_h3.font-heading]:text-base *:[figure]:first:mt-0 [&>.steps]:mt-6',
          className
        )}
        {...props}
      />
    ),
    ComponentPreview,
    ComponentSource,
    CodeTabs,
    Link: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
      <Link
        className={cn('font-medium underline underline-offset-4', className)}
        {...props}
      />
    ),
    LinkedCard: ({
      className,
      ...props
    }: React.ComponentProps<typeof Link>) => (
      <Link
        className={cn(
          'flex w-full flex-col items-center rounded-xl bg-surface p-6 text-surface-foreground transition-colors hover:bg-surface/80 sm:p-10',
          className
        )}
        {...props}
      />
    ),
  };
}
