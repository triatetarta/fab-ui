'use client';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/registry/default/ui/collapsible';
import { ChevronDownIcon } from 'lucide-react';

export function CollapsibleDefault() {
  return (
    <Collapsible className='w-64'>
      <CollapsibleTrigger className='flex items-center gap-2'>
        Show more
        <ChevronDownIcon className='size-4 transition-transform duration-200 in-data-panel-open:rotate-180' />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <p className='text-sm text-muted-foreground'>
          The chevron icon rotates when the panel is open.
        </p>
      </CollapsibleContent>
    </Collapsible>
  );
}
