'use client';

import { Field, FieldLabel } from '@/registry/default/ui/field';
import { Input } from '@/registry/default/ui/input';

export function FieldDefault() {
  return (
    <Field>
      <FieldLabel>Email</FieldLabel>
      <Input type='email' placeholder='Enter your email' />
    </Field>
  );
}
