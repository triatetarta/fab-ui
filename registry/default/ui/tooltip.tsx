import { Tooltip as TooltipPrimitive } from '@base-ui/react/tooltip';

import { cn } from '@/lib/utils';

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

function TooltipTrigger(props: TooltipPrimitive.Trigger.Props) {
  return <TooltipPrimitive.Trigger data-slot='tooltip-trigger' {...props} />;
}

function ArrowSvg(props: React.ComponentProps<'svg'>) {
  return (
    <svg width='20' height='10' viewBox='0 0 20 10' fill='none' {...props}>
      <path
        d='M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z'
        className='fill-foreground'
      />
      <path
        d='M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z'
        className='fill-background/10 dark:fill-background/10'
      />
    </svg>
  );
}

function TooltipArrow({ className, ...props }: TooltipPrimitive.Arrow.Props) {
  return (
    <TooltipPrimitive.Arrow
      className={cn(
        'flex data-[side=bottom]:-top-2 data-[side=bottom]:rotate-0 data-[side=left]:-right-3.25 data-[side=left]:rotate-90 data-[side=right]:-left-3.25 data-[side=right]:-rotate-90 data-[side=top]:-bottom-2 data-[side=top]:rotate-180',
        className
      )}
      {...props}
    >
      <ArrowSvg />
    </TooltipPrimitive.Arrow>
  );
}

function TooltipPopup({
  className,
  align = 'center',
  sideOffset = 9,
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
            'flex origin-(--transform-origin) flex-col rounded-md bg-foreground px-2 py-1 text-sm text-background shadow-sm ring ring-foreground/10 transition-[transform,scale,opacity] data-ending-style:scale-90 data-ending-style:opacity-0 data-instant:transition-none data-starting-style:scale-90 data-starting-style:opacity-0 dark:shadow-none dark:ring-foreground/10',
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
