'use client';

import { Button } from '@/registry/default/ui/button';
import {
  Tooltip,
  TooltipPopup,
  TooltipProvider,
  TooltipTrigger,
} from '@/registry/default/ui/tooltip';

export function TooltipPositions() {
  return (
    <TooltipProvider>
      <div className='flex gap-4'>
        <Tooltip>
          <TooltipTrigger render={<Button variant='outline'>Top</Button>} />
          <TooltipPopup side='top'>Tooltip on top</TooltipPopup>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger render={<Button variant='outline'>Right</Button>} />
          <TooltipPopup side='right'>Tooltip on right</TooltipPopup>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger render={<Button variant='outline'>Bottom</Button>} />
          <TooltipPopup side='bottom'>Tooltip on bottom</TooltipPopup>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger render={<Button variant='outline'>Left</Button>} />
          <TooltipPopup side='left'>Tooltip on left</TooltipPopup>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}
