'use client';

import { Field, FieldLabel } from '@/registry/default/ui/field';
import { Fieldset, FieldsetLegend } from '@/registry/default/ui/fieldset';
import { Input } from '@/registry/default/ui/input';

export function FieldsetDefault() {
  return (
    <Fieldset className='flex flex-col gap-4'>
      <FieldsetLegend>Shipping Address</FieldsetLegend>
      <Field>
        <FieldLabel>Street Address</FieldLabel>
        <Input placeholder='123 Main St' />
      </Field>
      <Field>
        <FieldLabel>City</FieldLabel>
        <Input placeholder='New York' />
      </Field>
    </Fieldset>
  );
}
