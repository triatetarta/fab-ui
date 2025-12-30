'use client';

import {
  Field,
  FieldDescription,
  FieldLabel,
} from '@/registry/default/ui/field';
import { Input } from '@/registry/default/ui/input';

export function FieldWithDescription() {
  return (
    <Field>
      <FieldLabel>Username</FieldLabel>
      <Input placeholder='Enter your username' />
      <FieldDescription className='my-0!'>
        This will be your public display name.
      </FieldDescription>
    </Field>
  );
}
