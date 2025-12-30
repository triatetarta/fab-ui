'use client';

import { Button } from '@/registry/default/ui/button';
import { Input } from '@/registry/default/ui/input';
import { Autocomplete as AutocompletePrimitive } from '@base-ui/react/autocomplete';
import { XIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

const Autocomplete = AutocompletePrimitive.Root;

function AutocompleteInput(props: AutocompletePrimitive.Input.Props) {
  return (
    <AutocompletePrimitive.Input
      data-slot='autocomplete-input'
      render={<Input />}
      {...props}
    />
  );
}

function AutocompletePopup({
  className,
  sideOffset = 4,
  children,
  ...props
}: AutocompletePrimitive.Popup.Props & {
  sideOffset?: number;
}) {
  return (
    <AutocompletePositioner sideOffset={sideOffset}>
      <AutocompletePrimitive.Popup
        data-slot='autocomplete-popup'
        className={cn(
          'max-h-[min(var(--available-height),23rem)] w-(--anchor-width) max-w-(--available-width) scroll-pt-2 scroll-pb-2 overflow-y-auto overscroll-contain rounded-2xl bg-popover text-popover-foreground shadow-lg outline-1 outline-muted dark:shadow-none dark:-outline-offset-1 dark:outline-muted',
          className
        )}
        {...props}
      >
        {children}
      </AutocompletePrimitive.Popup>
    </AutocompletePositioner>
  );
}

function AutocompletePositioner({
  className,
  ...props
}: AutocompletePrimitive.Positioner.Props) {
  return (
    <AutocompletePrimitive.Portal>
      <AutocompletePrimitive.Positioner
        data-slot='autocomplete-positioner'
        className={cn('outline-none', className)}
        {...props}
      />
    </AutocompletePrimitive.Portal>
  );
}

function AutocompleteList({
  className,
  ...props
}: AutocompletePrimitive.List.Props) {
  return (
    <AutocompletePrimitive.List
      data-slot='autocomplete-list'
      className={cn('p-1 data-empty:p-0', className)}
      {...props}
    />
  );
}

function AutocompleteEmpty({
  className,
  ...props
}: AutocompletePrimitive.Empty.Props) {
  return (
    <AutocompletePrimitive.Empty
      data-slot='autocomplete-empty'
      className={cn(
        'px-4 py-2 text-[0.925rem] leading-4 text-gray-600 empty:m-0 empty:p-0',
        className
      )}
      {...props}
    />
  );
}

function AutocompleteItem({
  className,
  ...props
}: AutocompletePrimitive.Item.Props) {
  return (
    <AutocompletePrimitive.Item
      data-slot='autocomplete-item'
      className={cn(
        "relative flex w-full cursor-default items-center gap-2.5 rounded-xl py-2 pr-8 pl-3 text-sm outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-highlighted:bg-accent data-highlighted:text-accent-foreground not-data-[variant=destructive]:data-highlighted:**:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  );
}

function AutocompleteGroup({
  className,
  ...props
}: AutocompletePrimitive.Group.Props) {
  return (
    <AutocompletePrimitive.Group
      data-slot='autocomplete-group'
      className={cn('block pb-2', className)}
      {...props}
    />
  );
}

function AutocompleteGroupLabel({
  className,
  ...props
}: AutocompletePrimitive.GroupLabel.Props) {
  return (
    <AutocompletePrimitive.GroupLabel
      data-slot='autocomplete-group-label'
      className={cn(
        'sticky top-0 z-1 mt-0 mr-2 mb-0 ml-0 w-[calc(100%-0.5rem)] bg-[canvas] px-4 pt-2 pb-1 text-xs font-semibold tracking-wider uppercase',
        className
      )}
      {...props}
    />
  );
}

function AutocompleteCollection({
  ...props
}: AutocompletePrimitive.Collection.Props) {
  return (
    <AutocompletePrimitive.Collection
      data-slot='autocomplete-collection'
      {...props}
    />
  );
}

function AutocompleteStatus({
  className,
  ...props
}: AutocompletePrimitive.Status.Props) {
  return (
    <AutocompletePrimitive.Status
      data-slot='autocomplete-status'
      className={cn(
        'mt-1 px-4 py-2 text-sm leading-5 text-muted-foreground empty:m-0 empty:p-0',
        className
      )}
      {...props}
    />
  );
}

function AutocompleteClear({
  className,
  children,
  ...props
}: AutocompletePrimitive.Clear.Props) {
  return (
    <AutocompletePrimitive.Clear
      data-slot='autocomplete-clear'
      className={cn(className)}
      {...props}
    >
      {children ?? <XIcon className='h-4 w-4 text-muted-foreground' />}
    </AutocompletePrimitive.Clear>
  );
}

function AutocompleteRow({
  className,
  ...props
}: AutocompletePrimitive.Row.Props) {
  return (
    <AutocompletePrimitive.Row
      data-slot='autocomplete-row'
      className={cn(className)}
      {...props}
    />
  );
}

function AutocompleteTrigger({
  className,
  ...props
}: AutocompletePrimitive.Trigger.Props) {
  return (
    <AutocompletePrimitive.Trigger
      data-slot='autocomplete-trigger'
      className={cn(className)}
      render={<Button variant='outline' />}
      {...props}
    />
  );
}

export {
  Autocomplete,
  AutocompleteClear,
  AutocompleteCollection,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
  AutocompletePositioner,
  AutocompleteRow,
  AutocompleteStatus,
  AutocompleteTrigger,
};
