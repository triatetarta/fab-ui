'use client';

import * as React from 'react';

import { Button } from '@/registry/default/ui/button';
import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from '@/registry/default/ui/collapsible';

import { cn } from '@/lib/utils';

export function CodeCollapsibleWrapper({
  className,
  children,
  ...props
}: React.ComponentProps<typeof Collapsible>) {
  const [isOpened, setIsOpened] = React.useState(false);

  return (
    <Collapsible
      open={isOpened}
      onOpenChange={setIsOpened}
      className={cn('group/collapsible relative md:-mx-1', className)}
      {...props}
    >
      <CollapsibleTrigger
        render={
          <Button
            variant='ghost'
            size='sm'
            className='absolute top-3 right-9 z-10 flex h-7 items-center rounded-md px-2 text-muted-foreground'
          >
            {isOpened ? 'Collapse' : 'Expand'}
          </Button>
        }
      />

      <CollapsiblePanel className='relative mt-6 overflow-hidden [&>figure]:mt-0 [&>figure]:md:mx-0!'>
        {children}
      </CollapsiblePanel>
      <CollapsibleTrigger className='absolute inset-x-0 -bottom-2 flex h-20 items-center justify-center rounded-b-lg bg-linear-to-b from-code/70 to-code text-sm text-muted-foreground group-data-open/collapsible:hidden'>
        {isOpened ? 'Collapse' : 'Expand'}
      </CollapsibleTrigger>
    </Collapsible>
  );
}
