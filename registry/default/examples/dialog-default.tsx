'use client';

import { Button } from '@/registry/default/ui/button';
import {
  Dialog,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from '@/registry/default/ui/dialog';

export function DialogDefault() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant='outline' />}>
        Open Dialog
      </DialogTrigger>
      <DialogPopup>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className='py-4'>
          <p className='text-sm text-muted-foreground'>
            Your profile settings will be updated.
          </p>
        </div>
        <DialogFooter>
          <Button type='submit'>Save changes</Button>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  );
}
