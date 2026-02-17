'use client';

import * as React from 'react';

import { NavigationMenu as NavigationMenuPrimitive } from '@base-ui/react/navigation-menu';
import { ChevronDownIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

function NavigationMenu({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.Root>) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot='navigation-menu'
      className={cn(
        'group/navigation-menu relative flex min-w-max items-center justify-center rounded-xl bg-popover p-1 text-popover-foreground',
        className
      )}
      {...props}
    />
  );
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot='navigation-menu-list'
      className={cn('not-prose relative flex', className)}
      {...props}
    />
  );
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentPropsWithRef<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot='navigation-menu-item'
      className={cn('relative', className)}
      {...props}
    />
  );
}

function NavigationMenuTrigger({
  className,
  ...props
}: NavigationMenuPrimitive.Trigger.Props) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot='navigation-menu-trigger'
      className={cn(
        'm-0 box-border flex h-10 items-center justify-center gap-1.5 rounded-md bg-popover px-3.5 text-base leading-6 font-medium text-popover-foreground no-underline select-none hover:bg-accent focus-visible:relative focus-visible:z-10 focus-visible:ring-[3px] focus-visible:ring-foreground/10 focus-visible:outline-none active:bg-accent data-popup-open:bg-accent',
        className
      )}
      {...props}
    />
  );
}

function NavigationMenuIcon({
  className,
  children,
  ...props
}: NavigationMenuPrimitive.Icon.Props) {
  return (
    <NavigationMenuPrimitive.Icon
      data-slot='navigation-menu-icon'
      className={cn(
        'transition-transform duration-200 ease-in-out data-popup-open:rotate-180',
        className
      )}
      {...props}
    >
      {children ?? <ChevronDownIcon className='size-3' />}
    </NavigationMenuPrimitive.Icon>
  );
}

function NavigationMenuContent({
  className,
  ...props
}: NavigationMenuPrimitive.Content.Props) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot='navigation-menu-content'
      className={cn(
        'h-full p-6 transition-[opacity,transform,translate] duration-(--duration) ease-(--easing) data-ending-style:opacity-0 data-starting-style:opacity-0 data-ending-style:data-[activation-direction=left]:translate-x-[50%] data-starting-style:data-[activation-direction=left]:translate-x-[-50%] data-ending-style:data-[activation-direction=right]:translate-x-[-50%] data-starting-style:data-[activation-direction=right]:translate-x-[50%]',
        className
      )}
      {...props}
    />
  );
}

function NavigationMenuLink({
  className,
  ...props
}: NavigationMenuPrimitive.Link.Props) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot='navigation-menu-link'
      className={cn(
        'block rounded-md p-3 text-inherit no-underline hover:bg-accent focus-visible:relative focus-visible:z-10 focus-visible:ring-[3px] focus-visible:ring-foreground/10 focus-visible:outline-none data-active:bg-accent',
        className
      )}
      {...props}
    />
  );
}

function NavigationMenuBackdrop({
  className,
  ...props
}: NavigationMenuPrimitive.Backdrop.Props) {
  return (
    <NavigationMenuPrimitive.Backdrop
      data-slot='navigation-menu-backdrop'
      className={cn(
        'fixed inset-0 transition-opacity data-ending-style:opacity-0 data-starting-style:opacity-0',
        className
      )}
      {...props}
    />
  );
}

function NavigationMenuPortal({
  ...props
}: NavigationMenuPrimitive.Portal.Props) {
  return (
    <NavigationMenuPrimitive.Portal
      data-slot='navigation-menu-portal'
      {...props}
    />
  );
}

function NavigationMenuPositioner({
  className,
  sideOffset = 12,
  style: styleProp,
  ...props
}: NavigationMenuPrimitive.Positioner.Props) {
  const defaultStyle = {
    ['--duration' as string]: '0.35s',
    ['--easing' as string]: 'cubic-bezier(0.22, 1, 0.36, 1)',
  };

  return (
    <NavigationMenuPrimitive.Portal>
      <NavigationMenuPrimitive.Positioner
        data-slot='navigation-menu-positioner'
        sideOffset={sideOffset}
        className={cn(
          "box-border h-(--positioner-height) w-(--positioner-width) max-w-(--available-width) transition-[top,left,right,bottom] duration-(--duration) ease-(--easing) before:absolute before:content-[''] data-instant:transition-none data-[side=bottom]:before:-top-2 data-[side=bottom]:before:right-0 data-[side=bottom]:before:left-0 data-[side=bottom]:before:h-2 data-[side=left]:before:top-0 data-[side=left]:before:-right-2 data-[side=left]:before:bottom-0 data-[side=left]:before:w-2 data-[side=right]:before:top-0 data-[side=right]:before:bottom-0 data-[side=right]:before:-left-2 data-[side=right]:before:w-2 data-[side=top]:before:right-0 data-[side=top]:before:-bottom-2 data-[side=top]:before:left-0 data-[side=top]:before:h-2",
          className
        )}
        style={
          typeof styleProp === 'function'
            ? (state: NavigationMenuPrimitive.Positioner.State) => ({
                ...defaultStyle,
                ...styleProp(state),
              })
            : { ...defaultStyle, ...styleProp }
        }
        {...props}
      >
        <NavigationMenuPrimitive.Popup className='relative h-(--popup-height) w-(--popup-width) origin-(--transform-origin) rounded-lg bg-popover text-popover-foreground shadow-lg ring-1 ring-foreground/10 transition-[opacity,transform,width,height,scale,translate] duration-(--duration) ease-(--easing) data-ending-style:scale-90 data-ending-style:opacity-0 data-ending-style:duration-150 data-starting-style:scale-90 data-starting-style:opacity-0 dark:shadow-none dark:-outline-offset-1'>
          <NavigationMenuArrow />
          <NavigationMenuPrimitive.Viewport className='relative size-full overflow-hidden' />
        </NavigationMenuPrimitive.Popup>
      </NavigationMenuPrimitive.Positioner>
    </NavigationMenuPrimitive.Portal>
  );
}

function NavigationMenuViewport({
  className,
  ...props
}: NavigationMenuPrimitive.Viewport.Props) {
  return (
    <NavigationMenuPrimitive.Viewport
      data-slot='navigation-menu-viewport'
      className={cn('relative h-full w-full overflow-hidden', className)}
      {...props}
    />
  );
}

function ArrowSvg(props: React.ComponentProps<'svg'>) {
  return (
    <svg width='20' height='10' viewBox='0 0 20 10' fill='none' {...props}>
      <path
        d='M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z'
        className='fill-popover'
      />
      <path
        d='M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z'
        className='fill-border dark:fill-none'
      />
      <path
        d='M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z'
        className='dark:fill-border'
      />
    </svg>
  );
}

function NavigationMenuArrow({
  className,
  ...props
}: NavigationMenuPrimitive.Arrow.Props) {
  return (
    <NavigationMenuPrimitive.Arrow
      data-slot='navigation-menu-arrow'
      className={cn(
        'flex transition-[left] duration-(--duration) ease-(--easing) data-[side=bottom]:-top-2 data-[side=left]:-right-3.25 data-[side=left]:rotate-90 data-[side=right]:-left-3.25 data-[side=right]:-rotate-90 data-[side=top]:-bottom-2 data-[side=top]:rotate-180',
        className
      )}
      {...props}
    >
      <ArrowSvg />
    </NavigationMenuPrimitive.Arrow>
  );
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuIcon,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuBackdrop,
  NavigationMenuPortal,
  NavigationMenuPositioner,
  NavigationMenuViewport,
};
