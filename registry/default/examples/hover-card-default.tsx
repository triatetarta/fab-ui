'use client';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/registry/default/ui/hover-card';

export function HoverCardDefault() {
  return (
    <HoverCard>
      <HoverCardTrigger
        delay={10}
        closeDelay={100}
        className='text-primary underline underline-offset-4'
      >
        Hover over me
      </HoverCardTrigger>
      <HoverCardContent>
        <div className='flex flex-col gap-2'>
          <p className='font-semibold'>Hover Card</p>
          <p className='text-muted-foreground'>
            This is a hover card that appears on hover. It can contain any
            content you want to display.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
