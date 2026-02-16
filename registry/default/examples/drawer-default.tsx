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

export function DrawerDefault() {
  return (
    <Drawer>
      <DrawerTrigger render={<Button variant='outline' />}>
        Open Drawer
      </DrawerTrigger>
      <DrawerPopup>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Notifications</DrawerTitle>
            <DrawerDescription>
              You are all caught up. Good job!
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
