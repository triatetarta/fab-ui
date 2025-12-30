'use client';

import { Button } from '@/registry/default/ui/button';
import {
  Field,
  FieldDescription,
  FieldLabel,
} from '@/registry/default/ui/field';
import { Form } from '@/registry/default/ui/form';
import { Input } from '@/registry/default/ui/input';

export function FormDefault() {
  return (
    <Form className='w-full max-w-sm'>
      <Field>
        <FieldLabel>Email</FieldLabel>
        <Input type='email' placeholder='you@example.com' />
        <FieldDescription className='my-0!'>
          We&apos;ll never share your email.
        </FieldDescription>
      </Field>
      <Field>
        <FieldLabel>Password</FieldLabel>
        <Input type='password' placeholder='Enter your password' />
      </Field>
      <Button type='submit' className='mt-2'>
        Sign In
      </Button>
    </Form>
  );
}
