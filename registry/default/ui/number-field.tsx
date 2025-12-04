'use client';

import * as React from 'react';

import { Label } from '@/registry/default/ui/label';
import { NumberField as NumberFieldPrimitive } from '@base-ui-components/react/number-field';
import { MinusIcon, MoveHorizontal, PlusIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

const NumberFieldContext = React.createContext<{
  fieldId: string;
} | null>(null);

function NumberField({
  id,
  className,
  ...props
}: NumberFieldPrimitive.Root.Props) {
  const numberFieldId = React.useId();
  const fieldId = id ?? numberFieldId;

  return (
    <NumberFieldContext.Provider value={{ fieldId }}>
      <NumberFieldPrimitive.Root
        id={fieldId}
        data-slot='number-field'
        className={cn('flex flex-col items-start gap-2', className)}
        {...props}
      />
    </NumberFieldContext.Provider>
  );
}

function NumberFieldScrubArea({
  className,
  label,
  ...props
}: NumberFieldPrimitive.ScrubArea.Props & { label: string }) {
  const context = React.useContext(NumberFieldContext);

  if (!context) {
    throw new Error(
      'NumberFieldScrubArea must be used within the NumberField.'
    );
  }

  return (
    <NumberFieldPrimitive.ScrubArea
      data-slot='number-field-scrub-area'
      className={cn('cursor-ew-resize"', className)}
      {...props}
    >
      <Label htmlFor={context.fieldId} className='cursor-ew-resize font-normal'>
        {label}
      </Label>
      <NumberFieldPrimitive.ScrubAreaCursor className='drop-shadow-[0_1px_1px_#0008] filter'>
        <MoveHorizontal />
      </NumberFieldPrimitive.ScrubAreaCursor>
    </NumberFieldPrimitive.ScrubArea>
  );
}

function NumberFieldGroup({
  className,
  ...props
}: NumberFieldPrimitive.Group.Props) {
  return (
    <NumberFieldPrimitive.Group
      data-slot='number-field-group'
      className={cn(
        'flex rounded-md ring-ring/40 ring-offset-1 focus-within:border-ring focus-within:ring-2 focus-within:has-aria-invalid:border-destructive/60 focus-within:has-aria-invalid:ring-destructive/40',
        className
      )}
      {...props}
    />
  );
}

function NumberFieldDecrement({
  className,
  ...props
}: NumberFieldPrimitive.Decrement.Props) {
  return (
    <NumberFieldPrimitive.Decrement
      className={cn(
        "flex size-9 items-center justify-center rounded-tl-md rounded-bl-md border border-border bg-clip-padding text-foreground select-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      data-slot='number-field-decrement'
      {...props}
    >
      <MinusIcon />
    </NumberFieldPrimitive.Decrement>
  );
}

function NumberFieldIncrement({
  className,
  ...props
}: NumberFieldPrimitive.Increment.Props) {
  return (
    <NumberFieldPrimitive.Increment
      className={cn(
        "flex size-9 items-center justify-center rounded-tr-md rounded-br-md border border-border bg-clip-padding text-foreground select-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      data-slot='number-field-increment'
      {...props}
    >
      <PlusIcon />
    </NumberFieldPrimitive.Increment>
  );
}

function NumberFieldInput({
  className,
  ...props
}: NumberFieldPrimitive.Input.Props) {
  return (
    <NumberFieldPrimitive.Input
      className={cn(
        'h-9 w-32 border-t border-b border-border text-center text-base text-foreground tabular-nums outline-none focus:z-1',
        className
      )}
      data-slot='number-field-input'
      {...props}
    />
  );
}

export {
  NumberField,
  NumberFieldScrubArea,
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldGroup,
  NumberFieldInput,
};
