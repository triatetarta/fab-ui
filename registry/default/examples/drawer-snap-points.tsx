'use client';

import * as React from 'react';

import { Button } from '@/registry/default/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from '@/registry/default/ui/drawer';

const TOP_MARGIN_REM = 1;
const VISIBLE_SNAP_POINTS_REM = [30];

function toViewportSnapPoint(heightRem: number) {
  return `${heightRem + TOP_MARGIN_REM}rem`;
}

const snapPoints = [...VISIBLE_SNAP_POINTS_REM.map(toViewportSnapPoint), 1];

export function DrawerSnapPoints() {
  return (
    <Drawer snapPoints={snapPoints}>
      <DrawerTrigger render={<Button variant='outline' />}>
        Open Snap Drawer
      </DrawerTrigger>
      <DrawerPopup
        unstyled
        className='relative flex max-h-[calc(100dvh-var(--top-margin))] min-h-0 w-full transform-[translateY(calc(var(--drawer-snap-point-offset)+var(--drawer-swipe-movement-y)))] touch-none flex-col overflow-visible rounded-t-xl bg-background pb-[max(0px,calc(var(--drawer-snap-point-offset)+var(--drawer-swipe-movement-y)))] text-foreground shadow-[0_-16px_48px_rgb(0_0_0/0.12),0_6px_18px_rgb(0_0_0/0.06)] ring-1 ring-foreground/10 transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] outline-none [--bleed:3rem] after:pointer-events-none after:absolute after:inset-x-0 after:top-full after:h-(--bleed) after:bg-background after:content-[""] data-ending-style:transform-[translateY(100%)] data-ending-style:pb-0 data-ending-style:shadow-[0_-16px_48px_rgb(0_0_0/0),0_6px_18px_rgb(0_0_0/0)] data-ending-style:duration-[calc(var(--drawer-swipe-strength)*300ms)] data-starting-style:transform-[translateY(100%)] data-starting-style:pb-0 data-starting-style:shadow-[0_-16px_48px_rgb(0_0_0/0),0_6px_18px_rgb(0_0_0/0)] data-swiping:transition-none data-swiping:select-none'
        style={
          { '--top-margin': `${TOP_MARGIN_REM}rem` } as React.CSSProperties
        }
      >
        <div className='shrink-0 touch-none border-b border-border px-6 pt-3.5 pb-3'>
          <div className='mx-auto h-1 w-12 rounded-full bg-muted-foreground/30' />
          <DrawerTitle className='mt-2.5 cursor-default'>
            Snap points
          </DrawerTitle>
        </div>
        <DrawerContent className='min-h-0 flex-1 touch-auto overflow-y-auto overscroll-contain px-6 pt-4 pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))]'>
          <div className='mx-auto w-full max-w-87.5'>
            <DrawerDescription className='mb-4'>
              Drag the sheet to snap between a compact peek and a near
              full-height view.
            </DrawerDescription>
            <div className='mb-6 grid gap-3' aria-hidden>
              {Array.from({ length: 20 }, (_, index) => (
                <div
                  key={index}
                  className='h-12 rounded-xl border border-border bg-muted'
                />
              ))}
            </div>
            <div className='flex items-center justify-end gap-4'>
              <DrawerClose render={<Button variant='outline' />}>
                Close
              </DrawerClose>
            </div>
          </div>
        </DrawerContent>
      </DrawerPopup>
    </Drawer>
  );
}
