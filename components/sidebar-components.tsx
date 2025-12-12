'use client';

import type { ComponentProps } from 'react';

import type { SidebarPageTreeComponents } from 'fumadocs-ui/components/sidebar/page-tree';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

export function Folder({
  children,
  item,
}: ComponentProps<SidebarPageTreeComponents['Folder']>) {
  return (
    <div className='flex flex-col gap-2 not-first:mt-8'>
      <div className='px-2 text-xs font-medium text-muted-foreground uppercase'>
        {item.name}
      </div>
      <div className='[&_a]:text-foreground [&_a]:hover:text-foreground'>
        {children}
      </div>
    </div>
  );
}

export function Item({
  item,
}: ComponentProps<SidebarPageTreeComponents['Item']>) {
  const pathname = usePathname();

  return (
    <Link
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
