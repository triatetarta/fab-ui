'use client';

import { Button } from '@/registry/default/ui/button';
import {
  Popover,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from '@/registry/default/ui/popover';

export function PopoverDefault() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant='outline' />}>
        Open Popover
      </PopoverTrigger>
      <PopoverPopup className='w-72'>
        <PopoverTitle>Dimensions</PopoverTitle>
        <PopoverDescription className='mt-1'>
          Set the dimensions for the layer.
        </PopoverDescription>
      </PopoverPopup>
    </Popover>
  );
}
