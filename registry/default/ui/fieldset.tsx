'use client';

import { Fieldset as FieldsetPrimitive } from '@base-ui-components/react/fieldset';

import { cn } from '@/lib/utils';

function Fieldset({ className, ...props }: FieldsetPrimitive.Root.Props) {
  return (
    <FieldsetPrimitive.Root
      data-slot='fieldset-legend'
      className={cn('font-medium', className)}
      {...props}
    />
  );
}

function FieldsetLegend({
  className,
  ...props
}: FieldsetPrimitive.Legend.Props) {
  return (
    <FieldsetPrimitive.Legend
      data-slot='fieldset-legend'
      className={cn('font-medium', className)}
      {...props}
    />
  );
}

export { Fieldset, FieldsetLegend };
