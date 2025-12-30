'use client';

import { Label } from '@/registry/default/ui/label';
import { Switch } from '@/registry/default/ui/switch';

export function SwitchWithLabel() {
  return (
    <div className='flex items-center gap-2'>
      <Switch id='airplane-mode' />
      <Label htmlFor='airplane-mode'>Airplane Mode</Label>
    </div>
  );
}
