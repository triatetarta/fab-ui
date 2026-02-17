'use client';

import * as React from 'react';

import { DrawerPreview as DrawerPrimitive } from '@base-ui/react/drawer';

import { cn } from '@/lib/utils';

function Drawer({
  swipeDirection = 'down',
  ...props
}: DrawerPrimitive.Root.Props) {
  return (
    <DrawerPrimitive.Root
      data-slot='drawer'
      swipeDirection={swipeDirection}
      {...props}
    />
  );
}

function DrawerTrigger({ ...props }: DrawerPrimitive.Trigger.Props) {
  return <DrawerPrimitive.Trigger data-slot='drawer-trigger' {...props} />;
}

function DrawerClose({ ...props }: DrawerPrimitive.Close.Props) {
  return <DrawerPrimitive.Close data-slot='drawer-close' {...props} />;
}

function DrawerProvider({ ...props }: DrawerPrimitive.Provider.Props) {
  return <DrawerPrimitive.Provider data-slot='drawer-provider' {...props} />;
}

function DrawerPortal({
  className,
  ...props
}: Omit<DrawerPrimitive.Portal.Props, 'className'> & {
  className?: string;
}) {
  return (
    <DrawerPrimitive.Portal
      data-slot='drawer-portal'
      className={cn('z-50', className)}
      {...props}
    />
  );
}

function DrawerOverlay({
  className,
  ...props
}: Omit<DrawerPrimitive.Backdrop.Props, 'className'> & {
  className?: string;
}) {
  return (
    <DrawerPrimitive.Backdrop
      data-slot='drawer-overlay'
      className={cn(
        'fixed inset-0 min-h-dvh bg-black opacity-[calc(var(--backdrop-opacity)*(1-var(--drawer-swipe-progress)))] transition-opacity duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] [--backdrop-opacity:0.2] data-ending-style:opacity-0 data-ending-style:duration-[calc(var(--drawer-swipe-strength)*300ms)] data-starting-style:opacity-0 data-swiping:duration-0 supports-backdrop-filter:backdrop-blur-3xl supports-[-webkit-touch-callout:none]:absolute dark:[--backdrop-opacity:0.7]',
        className
      )}
      {...props}
    />
  );
}

function DrawerViewport({
  className,
  ...props
}: Omit<DrawerPrimitive.Viewport.Props, 'className'> & {
  className?: string;
}) {
  return (
    <DrawerPrimitive.Viewport
      data-slot='drawer-viewport'
      className={cn(
        'fixed inset-0 flex',
        // Horizontal: stretch + viewport padding
        'has-data-[swipe-direction=left]:items-stretch has-data-[swipe-direction=left]:justify-start has-data-[swipe-direction=left]:p-(--viewport-padding)',
        'has-data-[swipe-direction=right]:items-stretch has-data-[swipe-direction=right]:justify-end has-data-[swipe-direction=right]:p-(--viewport-padding)',
        '[--viewport-padding:0px] supports-[-webkit-touch-callout:none]:[--viewport-padding:0.625rem]',
        // Vertical: center horizontally, align to edge
        'has-data-[swipe-direction=down]:items-end has-data-[swipe-direction=down]:justify-center',
        'has-data-[swipe-direction=up]:items-start has-data-[swipe-direction=up]:justify-center',
        className
      )}
      {...props}
    />
  );
}

function DrawerHandle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='drawer-handle'
      className={cn(
        'mx-auto mb-5 h-1 w-12 shrink-0 rounded-full bg-muted transition-opacity duration-200 group-data-nested-drawer-open/popup:opacity-0 group-data-nested-drawer-swiping/popup:opacity-100',
        className
      )}
      {...props}
    />
  );
}

function DrawerContent({
  className,
  ...props
}: Omit<DrawerPrimitive.Content.Props, 'className'> & {
  className?: string;
}) {
  return (
    <DrawerPrimitive.Content
      data-slot='drawer-content'
      className={cn(
        'transition-opacity duration-300 ease-[cubic-bezier(0.45,1.005,0,1.005)] group-data-nested-drawer-open/popup:opacity-0 group-data-nested-drawer-swiping/popup:opacity-100',
        className
      )}
      {...props}
    />
  );
}

function DrawerPopup({
  className,
  children,
  container,
  showHandle,
  unstyled,
  overlayClassName,
  ...props
}: Omit<DrawerPrimitive.Popup.Props, 'className'> & {
  className?: string;
  container?: DrawerPrimitive.Portal.Props['container'];
  showHandle?: boolean;
  unstyled?: boolean;
  overlayClassName?: string;
}) {
  return (
    <DrawerPortal container={container}>
      <DrawerOverlay className={overlayClassName} />
      <DrawerViewport>
        <DrawerPrimitive.Popup
          data-slot='drawer-popup'
          className={
            unstyled
              ? className
              : cn(
                  'group/popup relative',
                  'touch-auto overflow-y-auto overscroll-contain bg-background text-foreground ring-1 ring-foreground/5 data-swiping:select-none dark:ring-border',
                  'data-ending-style:duration-[calc(var(--drawer-swipe-strength)*300ms)]',
                  // Nested drawer stacking variables (no-ops when not nested)
                  '[--bleed:3rem] [--height:max(0px,calc(var(--drawer-frontmost-height,var(--drawer-height))-var(--bleed)))] [--peek:1rem] [--scale-base:calc(max(0,1-(var(--nested-drawers)*var(--stack-step))))] [--scale:clamp(0,calc(var(--scale-base)+(var(--stack-step)*var(--stack-progress))),1)] [--shrink:calc(1-var(--scale))] [--stack-peek-offset:max(0px,calc((var(--nested-drawers)-var(--stack-progress))*var(--peek)))] [--stack-progress:clamp(0,var(--drawer-swipe-progress),1)] [--stack-step:0.05]',
                  // Nested drawer overlay (::after pseudo-element)
                  "after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:bg-transparent after:transition-[background-color] after:duration-300 after:ease-[cubic-bezier(0.32,0.72,0,1)] after:content-['']",
                  // Nested drawer states
                  'data-nested-drawer-open:overflow-hidden data-nested-drawer-open:after:bg-black/5 data-nested-drawer-swiping:duration-0',
                  // Shared horizontal (left & right)
                  'data-[swipe-direction=left]:supports-[-webkit-touch-callout:none]:[--bleed:0px] data-[swipe-direction=right]:supports-[-webkit-touch-callout:none]:[--bleed:0px]',
                  'data-[swipe-direction=left]:h-full data-[swipe-direction=right]:h-full',
                  'data-[swipe-direction=left]:w-[calc(22rem+var(--bleed))] data-[swipe-direction=right]:w-[calc(22rem+var(--bleed))]',
                  'data-[swipe-direction=left]:max-w-[calc(100vw-3rem+var(--bleed))] data-[swipe-direction=right]:max-w-[calc(100vw-3rem+var(--bleed))]',
                  'data-[swipe-direction=left]:p-6 data-[swipe-direction=right]:p-6',
                  'data-[swipe-direction=left]:supports-[-webkit-touch-callout:none]:w-[20rem] data-[swipe-direction=right]:supports-[-webkit-touch-callout:none]:w-[20rem]',
                  'data-[swipe-direction=left]:supports-[-webkit-touch-callout:none]:max-w-[calc(100vw-20px)] data-[swipe-direction=right]:supports-[-webkit-touch-callout:none]:max-w-[calc(100vw-20px)]',
                  'data-[swipe-direction=left]:supports-[-webkit-touch-callout:none]:rounded-[10px] data-[swipe-direction=right]:supports-[-webkit-touch-callout:none]:rounded-[10px]',
                  // Right-only (with stacking transform + transition for box-shadow)
                  'data-[swipe-direction=right]:-mr-(--bleed) data-[swipe-direction=right]:origin-[calc(100%-var(--bleed))_50%] data-[swipe-direction=right]:transform-[translateX(calc(var(--drawer-snap-point-offset,0px)+var(--drawer-swipe-movement-x)-var(--stack-peek-offset)-(var(--shrink)*100%)))_scale(var(--scale))] data-[swipe-direction=right]:rounded-l-xl data-[swipe-direction=right]:pr-[calc(1.5rem+var(--bleed))] data-[swipe-direction=right]:shadow-[-2px_0_10px_rgb(0_0_0/0.1)] data-[swipe-direction=right]:[transition:transform_300ms_cubic-bezier(0.32,0.72,0,1),box-shadow_300ms_cubic-bezier(0.32,0.72,0,1)] data-[swipe-direction=right]:data-ending-style:shadow-[-2px_0_10px_rgb(0_0_0/0)] data-[swipe-direction=right]:data-swiping:duration-0 data-[swipe-direction=right]:supports-[-webkit-touch-callout:none]:mr-0 data-[swipe-direction=right]:supports-[-webkit-touch-callout:none]:pr-6',
                  // Right enter/exit
                  'data-[swipe-direction=right]:data-ending-style:transform-[translateX(calc(100%-var(--bleed)+var(--viewport-padding)))] data-[swipe-direction=right]:data-starting-style:transform-[translateX(calc(100%-var(--bleed)+var(--viewport-padding)))]',
                  // Left-only (with stacking transform + transition for box-shadow)
                  'data-[swipe-direction=left]:-ml-(--bleed) data-[swipe-direction=left]:origin-[var(--bleed)_50%] data-[swipe-direction=left]:transform-[translateX(calc(var(--drawer-snap-point-offset,0px)+var(--drawer-swipe-movement-x)+var(--stack-peek-offset)+(var(--shrink)*100%)))_scale(var(--scale))] data-[swipe-direction=left]:rounded-r-xl data-[swipe-direction=left]:pl-[calc(1.5rem+var(--bleed))] data-[swipe-direction=left]:shadow-[2px_0_10px_rgb(0_0_0/0.1)] data-[swipe-direction=left]:[transition:transform_300ms_cubic-bezier(0.32,0.72,0,1),box-shadow_300ms_cubic-bezier(0.32,0.72,0,1)] data-[swipe-direction=left]:data-ending-style:shadow-[2px_0_10px_rgb(0_0_0/0)] data-[swipe-direction=left]:data-swiping:duration-0 data-[swipe-direction=left]:supports-[-webkit-touch-callout:none]:ml-0 data-[swipe-direction=left]:supports-[-webkit-touch-callout:none]:pl-6',
                  // Left enter/exit
                  'data-[swipe-direction=left]:data-ending-style:transform-[translateX(calc(-100%+var(--bleed)-var(--viewport-padding)))] data-[swipe-direction=left]:data-starting-style:transform-[translateX(calc(-100%+var(--bleed)-var(--viewport-padding)))]',
                  // Shared vertical (up & down)
                  'data-[swipe-direction=down]:w-full data-[swipe-direction=up]:w-full',
                  'data-[swipe-direction=down]:max-h-[calc(80vh+var(--bleed))] data-[swipe-direction=up]:max-h-[calc(80vh+var(--bleed))]',
                  'data-[swipe-direction=down]:px-6 data-[swipe-direction=up]:px-6',
                  // Down-only (with stacking transform + transitions for height & box-shadow)
                  'data-[swipe-direction=down]:-mb-(--bleed) data-[swipe-direction=down]:h-(--drawer-height,auto) data-[swipe-direction=down]:origin-[50%_calc(100%-var(--bleed))] data-[swipe-direction=down]:transform-[translateY(calc(var(--drawer-snap-point-offset,0px)+var(--drawer-swipe-movement-y)-var(--stack-peek-offset)-(var(--shrink)*var(--height))))_scale(var(--scale))] data-[swipe-direction=down]:rounded-t-xl data-[swipe-direction=down]:pt-4 data-[swipe-direction=down]:pb-[calc(1.5rem+env(safe-area-inset-bottom,0px)+var(--bleed))] data-[swipe-direction=down]:shadow-[0_2px_10px_rgb(0_0_0/0.1)] data-[swipe-direction=down]:[transition:transform_300ms_cubic-bezier(0.32,0.72,0,1),height_300ms_cubic-bezier(0.32,0.72,0,1),box-shadow_300ms_cubic-bezier(0.32,0.72,0,1)] data-[swipe-direction=down]:data-ending-style:shadow-[0_2px_10px_rgb(0_0_0/0)] data-[swipe-direction=down]:data-nested-drawer-open:h-[calc(var(--height)+var(--bleed))] data-[swipe-direction=down]:data-swiping:duration-0',
                  // Down enter/exit
                  'data-[swipe-direction=down]:data-ending-style:transform-[translateY(calc(100%-var(--bleed)))] data-[swipe-direction=down]:data-starting-style:transform-[translateY(calc(100%-var(--bleed)))]',
                  // Up-only (with stacking transform + transitions for height & box-shadow)
                  'data-[swipe-direction=up]:-mt-(--bleed) data-[swipe-direction=up]:h-(--drawer-height,auto) data-[swipe-direction=up]:origin-[50%_var(--bleed)] data-[swipe-direction=up]:transform-[translateY(calc(var(--drawer-snap-point-offset,0px)+var(--drawer-swipe-movement-y)+var(--stack-peek-offset)+(var(--shrink)*var(--height))))_scale(var(--scale))] data-[swipe-direction=up]:rounded-b-xl data-[swipe-direction=up]:pt-[calc(1.5rem+env(safe-area-inset-top,0px)+var(--bleed))] data-[swipe-direction=up]:pb-6 data-[swipe-direction=up]:shadow-[0_-2px_10px_rgb(0_0_0/0.1)] data-[swipe-direction=up]:[transition:transform_300ms_cubic-bezier(0.32,0.72,0,1),height_300ms_cubic-bezier(0.32,0.72,0,1),box-shadow_300ms_cubic-bezier(0.32,0.72,0,1)] data-[swipe-direction=up]:data-ending-style:shadow-[0_-2px_10px_rgb(0_0_0/0)] data-[swipe-direction=up]:data-nested-drawer-open:h-[calc(var(--height)+var(--bleed))] data-[swipe-direction=up]:data-swiping:duration-0',
                  // Up enter/exit
                  'data-[swipe-direction=up]:data-ending-style:transform-[translateY(calc(-100%+var(--bleed)))] data-[swipe-direction=up]:data-starting-style:transform-[translateY(calc(-100%+var(--bleed)))]',
                  className
                )
          }
          {...props}
        >
          {!unstyled && showHandle !== false && (
            <DrawerHandle
              className={
                showHandle
                  ? undefined
                  : 'hidden group-data-[swipe-direction=down]/popup:block group-data-[swipe-direction=up]/popup:block'
              }
            />
          )}
          {children}
        </DrawerPrimitive.Popup>
      </DrawerViewport>
    </DrawerPortal>
  );
}

function DrawerHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='drawer-header'
      className={cn('flex flex-col gap-2', className)}
      {...props}
    />
  );
}

function DrawerFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='drawer-footer'
      className={cn(
        'mt-4 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
        className
      )}
      {...props}
    />
  );
}

function DrawerTitle({
  className,
  ...props
}: Omit<DrawerPrimitive.Title.Props, 'className'> & {
  className?: string;
}) {
  return (
    <DrawerPrimitive.Title
      data-slot='drawer-title'
      className={cn(
        'text-base font-medium text-foreground group-data-[swipe-direction=down]/popup:text-center group-data-[swipe-direction=up]/popup:text-center',
        className
      )}
      {...props}
    />
  );
}

function DrawerDescription({
  className,
  ...props
}: Omit<DrawerPrimitive.Description.Props, 'className'> & {
  className?: string;
}) {
  return (
    <DrawerPrimitive.Description
      data-slot='drawer-description'
      className={cn(
        'mt-1.5 text-sm text-muted-foreground group-data-[swipe-direction=down]/popup:text-center group-data-[swipe-direction=up]/popup:text-center',
        className
      )}
      {...props}
    />
  );
}

function DrawerIndentBackground({
  className,
  ...props
}: DrawerPrimitive.IndentBackground.Props) {
  return (
    <DrawerPrimitive.IndentBackground
      data-slot='drawer-indent-background'
      className='absolute inset-0 isolate bg-foreground/70'
      {...props}
    />
  );
}

function DrawerIndent({
  className,
  ...props
}: Omit<DrawerPrimitive.Indent.Props, 'className'> & {
  className?: string;
}) {
  return (
    <DrawerPrimitive.Indent
      data-slot='drawer-indent'
      className={cn(
        'relative origin-[center_top] transform-[scale(1)_translateY(0)] border bg-background p-4 duration-[calc(400ms*var(--indent-transition)),calc(250ms*var(--indent-transition))] will-change-transform [--indent-progress:var(--drawer-swipe-progress)] [--indent-radius:calc(1rem*(1-var(--indent-progress)))] [--indent-transition:calc(1-clamp(0,calc(var(--drawer-swipe-progress)*100000),1))] [transition:transform_0.4s_cubic-bezier(0.32,0.72,0,1),border-radius_0.25s_cubic-bezier(0.32,0.72,0,1)] data-active:transform-[scale(calc(0.98+(0.02*var(--indent-progress))))_translateY(calc(0.5rem*(1-var(--indent-progress))))] data-active:rounded-tl-(--indent-radius) data-active:rounded-tr-(--indent-radius)',
        className
      )}
      {...props}
    />
  );
}

const createDrawerHandle = DrawerPrimitive.createHandle;

export {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHandle,
  DrawerHeader,
  DrawerIndent,
  DrawerIndentBackground,
  DrawerOverlay,
  DrawerPopup,
  DrawerPortal,
  DrawerProvider,
  DrawerTitle,
  DrawerTrigger,
  DrawerViewport,
  createDrawerHandle,
};
