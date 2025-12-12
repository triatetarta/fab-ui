'use client';

import { useCopyToClipboard } from '@/registry/default/hooks/use-copy-to-clipboard';
import { Button } from '@/registry/default/ui/button';
import {
  Menu,
  MenuItem,
  MenuPopup,
  MenuTrigger,
} from '@/registry/default/ui/menu';
import { Check, ChevronDown, Copy } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import { cn } from '@/lib/utils';

import { Icons } from './icons';

function getPromptUrl(baseURL: string, url: string) {
  return `${baseURL}?q=${encodeURIComponent(
    `I'm looking at this @fab-ui documentation: ${url}. Help me understand how to use it. Be ready to explain concepts, give examples, or help debug based on it.`
  )}`;
}

interface DocsCopyPageProps extends React.ComponentProps<'div'> {
  page: string;
  url: string;
}

export function DocsCopyPage({
  page,
  url,
  className,
  ...props
}: DocsCopyPageProps) {
  const { slug } = useParams<{ slug: string[] }>();
  const { copyToClipboard, isCopied } = useCopyToClipboard();

  if (!slug) return null;

  const menuItems = [
    {
      label: 'View as Markdown',
      href: `/docs/${slug.join('/')}.md`,
      icon: <Icons.markdown />,
    },

    {
      label: 'Open in ChatGPT',
      href: getPromptUrl('https://chatgpt.com', url),
      icon: <Icons.openai />,
    },

    {
      label: 'Open in Claude',
      href: getPromptUrl('https://claude.ai/new', url),
      icon: <Icons.claude />,
    },

    {
      label: 'Open in v0',
      href: getPromptUrl('https://v0.dev', url),
      icon: <Icons.v0 />,
    },
  ];

  return (
    <div className={cn('flex items-center', className)} {...props}>
      <Button
        variant='secondary'
        size='sm'
        className='h-8 rounded-e-none text-xs'
        onClick={() => copyToClipboard(page)}
      >
        {isCopied ? (
          <Check className='size-3.5' />
        ) : (
          <Copy className='size-3.5' />
        )}
        Copy Page
      </Button>
      <Menu>
        <MenuTrigger
          render={
            <Button
              size='icon'
              variant='secondary'
              className='size-8 rounded-s-none border-l'
            />
          }
        >
          <ChevronDown />
        </MenuTrigger>
        <MenuPopup className='border'>
          {menuItems.map((menuItem) => {
            return (
              <MenuItem
                key={menuItem.label}
                render={
                  <Link
                    href={menuItem.href}
                    target='_blank'
                    rel='noopener noreferrer'
                  />
                }
              >
                {menuItem.icon} {menuItem.label}
              </MenuItem>
            );
          })}
        </MenuPopup>
      </Menu>
    </div>
  );
}
