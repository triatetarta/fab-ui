import { Meter as MeterPrimitive } from '@base-ui-components/react/meter';

import { cn } from '@/lib/utils';

function Meter({ className, children, ...props }: MeterPrimitive.Root.Props) {
  return (
    <MeterPrimitive.Root
      data-slot='meter'
      className={cn('box-border grid w-48 grid-cols-2 gap-y-2', className)}
      {...props}
    >
      {children ? (
        children
      ) : (
        <MeterTrack>
          <MeterIndicator />
        </MeterTrack>
      )}
    </MeterPrimitive.Root>
  );
}

function MeterLabel({ className, ...props }: MeterPrimitive.Label.Props) {
  return (
    <MeterPrimitive.Label
      data-slot='meter-label'
      className={cn('text-sm font-medium', className)}
      {...props}
    />
  );
}

function MeterTrack({ className, ...props }: MeterPrimitive.Track.Props) {
  return (
    <MeterPrimitive.Track
      data-slot='meter-track'
      className={cn(
        'col-span-2 block h-2 w-48 overflow-hidden bg-input',
        className
      )}
      {...props}
    />
  );
}

function MeterIndicator({
  className,
  ...props
}: MeterPrimitive.Indicator.Props) {
  return (
    <MeterPrimitive.Indicator
      data-slot='meter-indicator'
      className={cn('block bg-primary transition-all duration-500', className)}
      {...props}
    />
  );
}

function MeterValue({ className, ...props }: MeterPrimitive.Value.Props) {
  return (
    <MeterPrimitive.Value
      data-slot='meter-value'
      className={cn('col-start-2 m-0 text-right text-sm leading-5', className)}
      {...props}
    />
  );
}

export { Meter, MeterLabel, MeterTrack, MeterIndicator, MeterValue };
