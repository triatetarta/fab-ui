'use client';

import { PreviewCard as PreviewCardPrimitive } from '@base-ui-components/react/preview-card';

import { cn } from '@/lib/utils';

const PreviewCard = PreviewCardPrimitive.Root;

function PreviewCardTrigger({ ...props }: PreviewCardPrimitive.Trigger.Props) {
  return (
    <PreviewCardPrimitive.Trigger data-slot='preview-card-trigger' {...props} />
  );
}

function PreviewCardPopup({
  className,
  children,
  align = 'center',
  sideOffset = 8,
  ...props
}: PreviewCardPrimitive.Popup.Props & {
  align?: PreviewCardPrimitive.Positioner.Props['align'];
  sideOffset?: PreviewCardPrimitive.Positioner.Props['sideOffset'];
}) {
  return (
    <PreviewCardPrimitive.Portal>
      <PreviewCardPrimitive.Positioner
        data-slot='preview-card-positioner'
        className='z-50'
        sideOffset={sideOffset}
        align={align}
      >
        <PreviewCardPrimitive.Popup
          data-slot='preview-card-content'
          className={cn(
            'relative flex w-64 origin-(--transform-origin) rounded-md border bg-popover bg-clip-padding p-4 text-sm text-balance text-popover-foreground shadow-sm transition-[scale,opacity] data-ending-style:scale-98 data-ending-style:opacity-0 data-starting-style:scale-98 data-starting-style:opacity-0 dark:bg-clip-border',
            className
          )}
          {...props}
        >
          {children}
        </PreviewCardPrimitive.Popup>
      </PreviewCardPrimitive.Positioner>
    </PreviewCardPrimitive.Portal>
  );
}

export { PreviewCard, PreviewCardTrigger, PreviewCardPopup };
