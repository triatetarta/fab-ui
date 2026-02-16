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

export function DrawerNonModal() {
  return (
    <Drawer swipeDirection='right' modal={false} disablePointerDismissal>
      <DrawerTrigger render={<Button variant='outline' />}>
        Open Non-Modal Drawer
      </DrawerTrigger>
      <DrawerPopup>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Non-modal Drawer</DrawerTitle>
            <DrawerDescription>
              This drawer does not trap focus and ignores outside clicks. Use
              the close button or swipe to dismiss it.
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
