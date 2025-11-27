'use client';

import { Menu as MenuPrimitive } from '@base-ui-components/react/menu';
import { CheckIcon, ChevronRightIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

const Menu = MenuPrimitive.Root;

const MenuPortal = MenuPrimitive.Portal;

function MenuTrigger({ className, ...props }: MenuPrimitive.Trigger.Props) {
  return (
    <MenuPrimitive.Trigger
      data-slot='menu-trigger'
      className={cn('', className)}
      {...props}
    />
  );
}

function MenuPopup({
  align = 'center',
  sideOffset = 4,
  alignOffset = 0,
  className,
  ...props
}: MenuPrimitive.Popup.Props & {
  align?: MenuPrimitive.Positioner.Props['align'];
  sideOffset?: MenuPrimitive.Positioner.Props['sideOffset'];
  alignOffset?: MenuPrimitive.Positioner.Props['alignOffset'];
}) {
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner
        data-slot='menu-positioner'
        className='outline-none'
        alignOffset={alignOffset}
        align={align}
        sideOffset={sideOffset}
      >
        <MenuPrimitive.Popup
          data-slot='menu-popup'
          className='origin-(--transform-origin) rounded-md bg-[canvas] py-1 text-foreground shadow-sm transition-[transform,scale,opacity] duration-100 data-ending-style:scale-90 data-ending-style:opacity-0 data-starting-style:scale-90 data-starting-style:opacity-0 dark:shadow-none'
          {...props}
        />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  );
}

function MenuGroup({ ...props }: MenuPrimitive.Group.Props) {
  return <MenuPrimitive.Group data-slot='menu-group' {...props} />;
}

function MenuItem({ className, ...props }: MenuPrimitive.Item.Props) {
  return (
    <MenuPrimitive.Item
      data-slot='menu-item'
      className={cn(
        'flex cursor-pointer py-2 pr-8 pl-4 text-sm leading-4 outline-none select-none data-highlighted:relative data-highlighted:z-0 data-highlighted:before:absolute data-highlighted:before:inset-x-1 data-highlighted:before:inset-y-0 data-highlighted:before:z-[-1] data-highlighted:before:rounded-sm data-highlighted:before:bg-accent',
        className
      )}
      {...props}
    />
  );
}

function MenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: MenuPrimitive.CheckboxItem.Props) {
  return (
    <MenuPrimitive.CheckboxItem
      data-slot='menu-checkbox-item'
      className={cn(
        'grid cursor-pointer grid-cols-[0.75rem_1fr] items-center gap-2 py-2 pr-8 pl-2.5 text-sm leading-4 outline-none select-none data-highlighted:relative data-highlighted:z-0 data-highlighted:before:absolute data-highlighted:before:inset-x-1 data-highlighted:before:inset-y-0 data-highlighted:before:z-[-1] data-highlighted:before:rounded-sm data-highlighted:before:bg-accent',
        className
      )}
      checked={checked}
      {...props}
    >
      <MenuPrimitive.CheckboxItemIndicator className='col-start-1'>
        <CheckIcon />
      </MenuPrimitive.CheckboxItemIndicator>
      <span className='col-start-2'>{children}</span>
    </MenuPrimitive.CheckboxItem>
  );
}

function MenuRadioGroup({ ...props }: MenuPrimitive.RadioGroup.Props) {
  return <MenuPrimitive.RadioGroup data-slot='menu-radio-group' {...props} />;
}

function MenuRadioItem({
  className,
  children,
  ...props
}: MenuPrimitive.RadioItem.Props) {
  return (
    <MenuPrimitive.RadioItem
      data-slot='menu-radio-item'
      className={cn(
        'grid cursor-pointer grid-cols-[0.75rem_1fr] items-center gap-2 py-2 pr-8 pl-2.5 text-sm leading-4 outline-none select-none data-highlighted:relative data-highlighted:z-0 data-highlighted:before:absolute data-highlighted:before:inset-x-1 data-highlighted:before:inset-y-0 data-highlighted:before:z-[-1] data-highlighted:before:rounded-sm data-highlighted:before:bg-accent',
        className
      )}
      {...props}
    >
      <MenuPrimitive.RadioItemIndicator className='col-start-1'>
        <CheckIcon />
      </MenuPrimitive.RadioItemIndicator>
      <span className='col-start-2'>{children}</span>
    </MenuPrimitive.RadioItem>
  );
}

function MenuGroupLabel({
  className,
  ...props
}: MenuPrimitive.GroupLabel.Props) {
  return (
    <MenuPrimitive.GroupLabel
      data-slot='menu-label'
      className={cn(
        'px-2 py-2 pr-8 pl-7.5 text-sm leading-4 font-medium text-muted-foreground select-none',
        className
      )}
      {...props}
    />
  );
}

function MenuSeparator({ className, ...props }: MenuPrimitive.Separator.Props) {
  return (
    <MenuPrimitive.Separator
      data-slot='menu-separator'
      className={cn('mx-2 my-1 h-px bg-border', className)}
      {...props}
    />
  );
}

function MenuShortcut({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot='menu-shortcut'
      className={cn(
        'ms-auto text-xs tracking-widest text-muted-foreground/60',
        className
      )}
      {...props}
    />
  );
}

function MenuSub({ ...props }: MenuPrimitive.SubmenuRoot.Props) {
  return <MenuPrimitive.SubmenuRoot data-slot='menu-sub' {...props} />;
}

function MenuSubTrigger({
  className,
  children,
  ...props
}: MenuPrimitive.SubmenuTrigger.Props) {
  return (
    <MenuPrimitive.SubmenuTrigger
      data-slot='menu-sub-trigger'
      className={cn(
        "flex cursor-default py-2 pr-2 pl-4 text-sm leading-4 outline-none select-none data-highlighted:relative data-highlighted:z-0 data-highlighted:before:absolute data-highlighted:before:inset-x-1 data-highlighted:before:inset-y-0 data-highlighted:before:z-[-1] data-highlighted:before:rounded-sm data-highlighted:before:bg-accent [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className='ms-auto' />
    </MenuPrimitive.SubmenuTrigger>
  );
}

function MenuSubPopup({
  align = 'start',
  sideOffset = 1,
  alignOffset = -4,
  className,
  ...props
}: MenuPrimitive.Popup.Props & {
  align?: MenuPrimitive.Positioner.Props['align'];
  sideOffset?: MenuPrimitive.Positioner.Props['sideOffset'];
  alignOffset?: MenuPrimitive.Positioner.Props['alignOffset'];
}) {
  return (
    <MenuPopup
      className={className}
      data-slot='menu-sub-content'
      align={align}
      sideOffset={sideOffset}
      alignOffset={alignOffset}
      {...props}
    />
  );
}

export {
  Menu,
  MenuPortal,
  MenuTrigger,
  MenuPopup,
  MenuGroup,
  MenuItem,
  MenuCheckboxItem,
  MenuRadioGroup,
  MenuRadioItem,
  MenuGroupLabel,
  MenuSeparator,
  MenuShortcut,
  MenuSub,
  MenuSubTrigger,
  MenuSubPopup,
};
