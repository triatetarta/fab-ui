'use client';

import { Button } from '@/registry/default/ui/button';
import { Field, FieldLabel } from '@/registry/default/ui/field';
import { Input } from '@/registry/default/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from '@/registry/default/ui/popover';

export function PopoverWithForm() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant='outline' />}>
        Edit Profile
      </PopoverTrigger>
      <PopoverContent className='w-80'>
        <PopoverTitle>Edit Profile</PopoverTitle>
        <PopoverDescription className='mt-1'>
          Make changes to your profile here.
        </PopoverDescription>
        <div className='mt-4 flex flex-col gap-3'>
          <Field>
            <FieldLabel>Name</FieldLabel>
            <Input defaultValue='John Doe' />
          </Field>
          <Field>
            <FieldLabel>Email</FieldLabel>
            <Input type='email' defaultValue='john@example.com' />
          </Field>
          <Button className='mt-2'>Save changes</Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
