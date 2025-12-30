'use client';

import { Input } from '@/registry/default/ui/input';

export function InputDisabled() {
  return (
    <Input type='text' placeholder='Disabled input' disabled className='w-64' />
  );
}
