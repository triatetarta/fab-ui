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

const ACTIONS = [
  'Unfollow',
  'Mute',
  'Add to Favourites',
  'Add to Close Friends',
  'Restrict',
];

export function DrawerActionSheet() {
  const [open, setOpen] = React.useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger render={<Button variant='outline' />}>
        Open Action Sheet
      </DrawerTrigger>
      <DrawerPopup
        unstyled
        overlayClassName='bg-black/40'
        className='pointer-events-none relative flex w-full max-w-md transform-[translateY(var(--drawer-swipe-movement-y))] touch-auto flex-col gap-3 overflow-y-auto overscroll-contain bg-transparent px-4 pt-4 pb-[calc(1rem+env(safe-area-inset-bottom,0px))] text-foreground ring-0 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] outline-none data-ending-style:transform-[translateY(calc(100%+1rem))] data-ending-style:duration-[calc(var(--drawer-swipe-strength)*300ms)] data-starting-style:transform-[translateY(calc(100%+1rem))] data-swiping:transition-none data-swiping:select-none'
      >
        <DrawerContent className='pointer-events-auto overflow-hidden rounded-2xl bg-background ring-1 ring-foreground/10'>
          <DrawerTitle className='sr-only'>Profile actions</DrawerTitle>
          <DrawerDescription className='sr-only'>
            Choose an action for this user.
          </DrawerDescription>

          <ul
            className='m-0 list-none divide-y divide-foreground/10 p-0'
            aria-label='Profile actions'
          >
            {ACTIONS.map((action, index) => (
              <li key={action}>
                {index === 0 && (
                  <DrawerClose className='sr-only'>
                    Close action sheet
                  </DrawerClose>
                )}
                <button
                  type='button'
                  className='block w-full border-0 bg-transparent px-5 py-4 text-center text-sm select-none hover:bg-muted focus-visible:bg-muted focus-visible:outline-none'
                  onClick={() => setOpen(false)}
                >
                  {action}
                </button>
              </li>
            ))}
          </ul>
        </DrawerContent>
        <div className='pointer-events-auto overflow-hidden rounded-2xl bg-background ring-1 ring-foreground/10'>
          <button
            type='button'
            className='block w-full border-0 bg-transparent px-5 py-4 text-center text-sm text-destructive select-none hover:bg-muted focus-visible:bg-muted focus-visible:outline-none'
            onClick={() => setOpen(false)}
          >
            Block User
          </button>
        </div>
      </DrawerPopup>
    </Drawer>
  );
}
