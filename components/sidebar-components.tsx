'use client';

import type { ComponentProps } from 'react';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/registry/default/ui/collapsible';
import type { SidebarPageTreeComponents } from 'fumadocs-ui/components/sidebar/page-tree';
import { ChevronDownIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

export function Folder({
  children,
  item,
}: ComponentProps<SidebarPageTreeComponents['Folder']>) {
  return (
    <Collapsible defaultOpen className='flex flex-col gap-2 not-first:mt-8'>
      <CollapsibleTrigger className='flex items-center justify-between px-2 text-sm font-medium text-muted-foreground'>
        {item.name}
        <ChevronDownIcon className='size-3.5 transition-transform duration-200 in-data-panel-open:rotate-180' />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className='[&_a]:text-foreground [&_a]:hover:text-foreground'>
          {children}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

export function Item({
  item,
}: ComponentProps<SidebarPageTreeComponents['Item']>) {
  const pathname = usePathname();

  return (
    <Link
      prefetch={false}
      href={item.url}
      className={cn(
        '-ml-1 flex items-center justify-between rounded-lg py-2 ps-3 pe-2',
        pathname === item.url && 'bg-muted'
      )}
    >
      <span>{item.name}</span>
    </Link>
  );
}
