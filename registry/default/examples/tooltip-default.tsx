'use client';

import { Button } from '@/registry/default/ui/button';
import {
  Tooltip,
  TooltipPopup,
  TooltipProvider,
  TooltipTrigger,
} from '@/registry/default/ui/tooltip';

export function TooltipDefault() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={<Button variant='outline'>Hover me</Button>} />
        <TooltipPopup>Add to library</TooltipPopup>
      </Tooltip>
    </TooltipProvider>
  );
}
