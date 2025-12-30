'use client';

import { ScrollArea } from '@/registry/default/ui/scroll-area';

const items = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
}));

export function ScrollAreaHorizontal() {
  return (
    <ScrollArea orientation='horizontal' className='w-96 rounded-md border'>
      <div className='flex gap-4 p-4'>
        {items.map((item) => (
          <div
            key={item.id}
            className='flex h-20 w-32 shrink-0 items-center justify-center rounded-md border bg-muted'
          >
            {item.name}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
