'use client';

import { Button } from '@/registry/default/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from '@/registry/default/ui/drawer';

export function DrawerRight() {
  return (
    <Drawer swipeDirection='right'>
      <DrawerTrigger render={<Button variant='outline' />}>
        Open Drawer
      </DrawerTrigger>
      <DrawerPopup>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Drawer</DrawerTitle>
            <DrawerDescription>
              This is a drawer that slides in from the side. You can swipe to
              dismiss it.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose render={<Button variant='outline' />}>
              Close
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </DrawerPopup>
    </Drawer>
  );
}
