'use client';

import { Separator } from '@/registry/default/ui/separator';

export function SeparatorDefault() {
  return (
    <div className='w-64'>
      <div className='space-y-1'>
        <h4 className='text-sm leading-none font-medium'>Fab UI</h4>
        <p className='text-sm text-muted-foreground'>
          An open-source UI component library.
        </p>
      </div>
      <Separator className='my-4' />
      <div className='flex h-5 items-center space-x-4 text-sm'>
        <div>Blog</div>
        <Separator orientation='vertical' />
        <div>Docs</div>
        <Separator orientation='vertical' />
        <div>Source</div>
      </div>
    </div>
  );
}
