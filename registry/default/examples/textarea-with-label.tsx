'use client';

import {
  Field,
  FieldDescription,
  FieldLabel,
} from '@/registry/default/ui/field';
import { Textarea } from '@/registry/default/ui/textarea';

export function TextareaWithLabel() {
  return (
    <Field className='w-64'>
      <FieldLabel>Bio</FieldLabel>
      <Textarea placeholder='Tell us about yourself' />
      <FieldDescription className='my-0!'>
        You can @mention other users and organizations.
      </FieldDescription>
    </Field>
  );
}
