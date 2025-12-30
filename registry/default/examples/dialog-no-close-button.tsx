'use client';

import { Button } from '@/registry/default/ui/button';
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from '@/registry/default/ui/dialog';

export function DialogNoCloseButton() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant='outline' />}>
        Open Dialog
      </DialogTrigger>
      <DialogPopup showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Confirm Action</DialogTitle>
          <DialogDescription>
            Are you sure you want to proceed with this action?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className='mt-4'>
          <DialogClose render={<Button variant='outline' />}>
            Cancel
          </DialogClose>
          <Button>Confirm</Button>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  );
}
