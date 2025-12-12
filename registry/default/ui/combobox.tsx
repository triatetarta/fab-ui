'use client';

import { ScrollArea } from '@/registry/default/ui/scroll-area';
import { Combobox as ComboboxPrimitive } from '@base-ui/react/combobox';
import { CheckIcon, XIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

const Combobox = ComboboxPrimitive.Root;

function ComboboxInput({
  children,
  className,
  ...props
}: ComboboxPrimitive.Input.Props) {
  return (
    <div className='relative w-full has-disabled:opacity-64 has-[+[data-slot=combobox-trigger],+[data-slot=combobox-clear]]:*:data-[slot=combobox-input]:pe-7'>
      <ComboboxPrimitive.Input
        data-slot='combobox-input'
        className={cn(
          'h-9 w-full min-w-0 rounded-md border border-input bg-[canvas] pl-3.5 outline-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
          className
        )}
        {...props}
      />
      {children}
    </div>
  );
}

function ComboboxTrigger({
  className,
  ...props
}: ComboboxPrimitive.Trigger.Props) {
  return (
    <ComboboxPrimitive.Trigger
      data-slot='combobox-trigger'
      className={className}
      {...props}
    />
  );
}

function ComboboxIcon({ ...props }: ComboboxPrimitive.Icon.Props) {
  return <ComboboxPrimitive.Icon data-slot='combobox-icon' {...props} />;
}

function ComboboxClear({ className, ...props }: ComboboxPrimitive.Clear.Props) {
  return (
    <ComboboxPrimitive.Clear
      data-slot='combobox-clear'
      className={className}
      {...props}
    />
  );
}

function ComboboxValue({ ...props }: ComboboxPrimitive.Value.Props) {
  return <ComboboxPrimitive.Value data-slot='combobox-value' {...props} />;
}

function ComboboxPopup({
  children,
  className,
  sideOffset = 6,
  ...props
}: ComboboxPrimitive.Popup.Props & {
  sideOffset?: number;
}) {
  return (
    <ComboboxPrimitive.Portal>
      <ComboboxPrimitive.Positioner
        data-slot='combobox-positioner'
        className='select-none'
        sideOffset={sideOffset}
      >
        <ComboboxPrimitive.Popup
          data-slot='combobox-popup'
          className={cn(
            'max-h-92 w-(--anchor-width) max-w-(--available-width) origin-(--transform-origin) rounded-md bg-[canvas] text-foreground shadow-sm transition-[transform,scale,opacity] duration-100 data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0 dark:shadow-none',
            className
          )}
          {...props}
        >
          {children}
        </ComboboxPrimitive.Popup>
      </ComboboxPrimitive.Positioner>
    </ComboboxPrimitive.Portal>
  );
}

function ComboboxEmpty({ className, ...props }: ComboboxPrimitive.Empty.Props) {
  return (
    <ComboboxPrimitive.Empty
      className={cn(
        'text-center text-sm text-muted-foreground not-empty:p-2',
        className
      )}
      data-slot='combobox-empty'
      {...props}
    />
  );
}

function ComboboxList({ className, ...props }: ComboboxPrimitive.List.Props) {
  return (
    <ScrollArea className='flex-1'>
      <ComboboxPrimitive.List
        data-slot='combobox-list'
        className={cn(
          'max-h-[min(23rem,var(--available-height))] scroll-py-2 overscroll-contain py-2 ps-2 pe-4 data-empty:p-0',
          className
        )}
        {...props}
      />
    </ScrollArea>
  );
}

function ComboboxRow({ ...props }: ComboboxPrimitive.Row.Props) {
  return <ComboboxPrimitive.Row data-slot='combobox-row' {...props} />;
}

function ComboboxItem({
  className,
  children,
  ...props
}: ComboboxPrimitive.Item.Props) {
  return (
    <ComboboxPrimitive.Item
      data-slot='combobox-item'
      className={cn(
        "grid cursor-default grid-cols-[1rem_1fr] items-center gap-2 rounded-sm py-1 ps-2 pe-4 text-base outline-none in-data-[side=none]:min-w-[calc(var(--anchor-width)+1.25rem)] data-disabled:pointer-events-none data-disabled:opacity-64 data-highlighted:bg-accent data-highlighted:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      <ComboboxItemIndicator />
      <div className='col-start-2'>{children}</div>
    </ComboboxPrimitive.Item>
  );
}

function ComboboxItemIndicator({
  className,
  ...props
}: ComboboxPrimitive.ItemIndicator.Props) {
  return (
    <ComboboxPrimitive.ItemIndicator
      data-slot='combobox-item-indicator'
      className={cn('col-start-1', className)}
      {...props}
    >
      <CheckIcon />
    </ComboboxPrimitive.ItemIndicator>
  );
}

function ComboboxSeparator({ ...props }: ComboboxPrimitive.Separator.Props) {
  return (
    <ComboboxPrimitive.Separator data-slot='combobox-separator' {...props} />
  );
}

function ComboboxChips({
  className,
  ...props
}: ComboboxPrimitive.Chips.Props & {
  ref?: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <ComboboxPrimitive.Chips
      ref={props?.ref}
      data-slot='combobox-chips'
      className={cn(
        'flex flex-wrap items-start gap-0.5 rounded-md border px-1.5 py-1 transition-[color,box-shadow]',
        'focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50',
        className
      )}
      {...props}
    />
  );
}

function ComboboxChip({ className, ...props }: ComboboxPrimitive.Chip.Props) {
  return (
    <ComboboxPrimitive.Chip
      data-slot='combobox-chip'
      className={cn(
        'flex cursor-default items-center gap-1 rounded-md bg-muted px-1.5 py-[0.2rem] text-sm outline-none',
        className
      )}
      {...props}
    />
  );
}

function ComboboxChipRemove({
  className,
  children,
  ...props
}: ComboboxPrimitive.ChipRemove.Props) {
  return (
    <ComboboxPrimitive.ChipRemove
      data-slot='combobox-chip-remove'
      className={cn(
        "rounded-md p-1 text-inherit hover:bg-accent-foreground/20 [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      aria-label='Remove'
      {...props}
    >
      {children ?? <XIcon />}
    </ComboboxPrimitive.ChipRemove>
  );
}

function ComboboxArrow({ ...props }: ComboboxPrimitive.Arrow.Props) {
  return <ComboboxPrimitive.Arrow data-slot='combobox-arrow' {...props} />;
}

function ComboboxStatus({
  className,
  ...props
}: ComboboxPrimitive.Status.Props) {
  return (
    <ComboboxPrimitive.Status
      data-slot='combobox-status'
      className={cn(
        'flex items-center gap-2 py-1 pr-5 pl-4 text-sm text-muted-foreground empty:hidden',
        className
      )}
      {...props}
    />
  );
}

function ComboboxGroup({ className, ...props }: ComboboxPrimitive.Group.Props) {
  return (
    <ComboboxPrimitive.Group
      data-slot='combobox-group'
      className={cn('block pb-2', className)}
      {...props}
    />
  );
}

function ComboboxGroupLabel({
  className,
  ...props
}: ComboboxPrimitive.GroupLabel.Props) {
  return (
    <ComboboxPrimitive.GroupLabel
      data-slot='combobox-group-label'
      className={cn(
        'text-muted-foregroun sticky top-0 z-1 mt-0 mr-2 mb-0 ml-0 w-[calc(100%-0.5rem)] bg-[canvas] pt-3 pr-4 pb-1 pl-9 text-sm font-semibold tracking-wider uppercase',
        className
      )}
      {...props}
    />
  );
}

function ComboboxCollection({ ...props }: ComboboxPrimitive.Collection.Props) {
  return (
    <ComboboxPrimitive.Collection data-slot='combobox-collection' {...props} />
  );
}

export {
  Combobox,
  ComboboxInput,
  ComboboxTrigger,
  ComboboxIcon,
  ComboboxClear,
  ComboboxValue,
  ComboboxPopup,
  ComboboxEmpty,
  ComboboxList,
  ComboboxItem,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipRemove,
  ComboboxArrow,
  ComboboxStatus,
  ComboboxItemIndicator,
  ComboboxSeparator,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxCollection,
  ComboboxRow,
};
