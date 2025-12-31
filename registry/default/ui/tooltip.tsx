import { Tooltip as TooltipPrimitive } from '@base-ui/react/tooltip';

import { cn } from '@/lib/utils';

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

function TooltipTrigger(props: TooltipPrimitive.Trigger.Props) {
  return <TooltipPrimitive.Trigger data-slot='tooltip-trigger' {...props} />;
}

function TooltipArrow({ className, ...props }: TooltipPrimitive.Arrow.Props) {
  return (
    <TooltipPrimitive.Arrow
      className={cn(
        'flex data-[side=bottom]:-top-2 data-[side=bottom]:rotate-0 data-[side=left]:-right-3.25 data-[side=left]:rotate-90 data-[side=right]:-left-3.25 data-[side=right]:-rotate-90 data-[side=top]:-bottom-2 data-[side=top]:rotate-180',
        className
      )}
      {...props}
    />
  );
}

function TooltipPopup({
  className,
  align = 'center',
  sideOffset = 4,
  side = 'top',
  children,
  ...props
}: TooltipPrimitive.Popup.Props & {
  align?: TooltipPrimitive.Positioner.Props['align'];
  side?: TooltipPrimitive.Positioner.Props['side'];
  sideOffset?: TooltipPrimitive.Positioner.Props['sideOffset'];
}) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Positioner
        data-slot='tooltip-positioner'
        className='z-50'
        sideOffset={sideOffset}
        align={align}
        side={side}
      >
        <TooltipPrimitive.Popup
          data-slot='tooltip-content'
          className={cn(
            'flex origin-(--transform-origin) flex-col rounded-md bg-foreground px-2 py-1 text-sm text-background shadow-sm transition-[transform,scale,opacity] data-ending-style:scale-90 data-ending-style:opacity-0 data-instant:transition-none data-starting-style:scale-90 data-starting-style:opacity-0 dark:shadow-none',
            className
          )}
          {...props}
        >
          {children}
          <TooltipArrow />
        </TooltipPrimitive.Popup>
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
  );
}

export { TooltipProvider, Tooltip, TooltipTrigger, TooltipPopup };
