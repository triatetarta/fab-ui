'use client';

import * as React from 'react';

import { Button } from '@/registry/default/ui/button';
import {
  Tooltip,
  TooltipPopup,
  TooltipTrigger,
} from '@/registry/default/ui/tooltip';
import { CheckIcon, CopyIcon } from 'lucide-react';

import { Event, trackEvent } from '@/lib/events';
import { cn } from '@/lib/utils';

export function copyToClipboardWithMeta(value: string, event?: Event) {
  navigator.clipboard.writeText(value);
  if (event) {
    trackEvent(event);
  }
}

export function CopyButton({
  value,
  className,
  variant = 'ghost',
  event,
  tooltip = 'Copy to Clipboard',
  ...props
}: React.ComponentProps<typeof Button> & {
  value: string;
  src?: string;
  event?: Event['name'];
  tooltip?: string;
}) {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, []);

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            data-copied={hasCopied}
            size='icon'
            variant={variant}
            className={cn(
              'bg-code absolute top-3 right-2 z-10 size-7 hover:opacity-100 focus-visible:opacity-100',
              className
            )}
            onClick={() => {
              copyToClipboardWithMeta(
                value,
                event
                  ? {
                      name: event,
                      properties: {
                        code: value,
                      },
                    }
                  : undefined
              );
              setHasCopied(true);
            }}
            {...props}
          >
            <span className='sr-only'>Copy</span>
            {hasCopied ? <CheckIcon /> : <CopyIcon />}
          </Button>
        }
      >
        Hover me
      </TooltipTrigger>
      <TooltipPopup>{hasCopied ? 'Copied' : tooltip}</TooltipPopup>
    </Tooltip>
  );
}
