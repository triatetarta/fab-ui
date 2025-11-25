'use client';

import { Field as FieldPrimitive } from '@base-ui-components/react/field';

import { cn } from '@/lib/utils';

function Field({ className, ...props }: FieldPrimitive.Root.Props) {
  return (
    <FieldPrimitive.Root
      data-slot='field'
      className={cn(
        'flex w-full max-w-64 flex-col items-start gap-1',
        className
      )}
      {...props}
    />
  );
}

function FieldLabel({ className, ...props }: FieldPrimitive.Label.Props) {
  return (
    <FieldPrimitive.Label
      data-slot='field-label'
      className={cn('text-sm font-medium', className)}
      {...props}
    />
  );
}

function FieldDescription({
  className,
  ...props
}: FieldPrimitive.Description.Props) {
  return (
    <FieldPrimitive.Description
      data-slot='field-description'
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  );
}

function FieldError({ className, ...props }: FieldPrimitive.Error.Props) {
  return (
    <FieldPrimitive.Error
      data-slot='field-error'
      className={cn('text-destructive-foreground text-sm', className)}
      {...props}
    />
  );
}

const FieldControl = FieldPrimitive.Control;
const FieldValidity = FieldPrimitive.Validity;

export {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldControl,
  FieldValidity,
};
