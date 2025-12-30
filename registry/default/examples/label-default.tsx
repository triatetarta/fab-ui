'use client';

import { Input } from '@/registry/default/ui/input';
import { Label } from '@/registry/default/ui/label';

export function LabelDefault() {
  return (
    <div className='flex w-64 flex-col gap-2'>
      <Label htmlFor='email'>Email</Label>
      <Input id='email' type='email' placeholder='you@example.com' />
    </div>
  );
}
