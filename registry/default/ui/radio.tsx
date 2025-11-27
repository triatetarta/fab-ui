'use client';

import { Radio as RadioPrimitive } from '@base-ui-components/react/radio';
import { RadioGroup as RadioGroupPrimitive } from '@base-ui-components/react/radio-group';

import { cn } from '@/lib/utils';

function RadioGroup({ className, ...props }: RadioGroupPrimitive.Props) {
  return (
    <RadioGroupPrimitive
      data-slot='radio-group'
      className={cn('flex flex-col items-start gap-2', className)}
      {...props}
    />
  );
}

function Radio({ className, ...props }: RadioPrimitive.Root.Props) {
  return (
    <RadioPrimitive.Root
      data-slot='radio'
      className={cn(
        'relative flex size-4 items-center justify-center rounded-full focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:outline-offset-2 data-checked:bg-primary data-unchecked:border data-unchecked:border-border',
        className
      )}
      {...props}
    >
      <RadioPrimitive.Indicator
        data-slot='radio-indicator'
        className='flex before:size-2 before:rounded-full before:bg-muted data-unchecked:hidden'
      />
    </RadioPrimitive.Root>
  );
}

export { RadioGroup, Radio };
