'use client';

import { Label } from '@/registry/default/ui/label';
import { Radio, RadioGroup } from '@/registry/default/ui/radio';

export function RadioHorizontal() {
  return (
    <RadioGroup defaultValue='small' className='flex-row gap-4'>
      <div className='flex items-center gap-2'>
        <Radio value='small' id='small' />
        <Label htmlFor='small'>Small</Label>
      </div>
      <div className='flex items-center gap-2'>
        <Radio value='medium' id='medium' />
        <Label htmlFor='medium'>Medium</Label>
      </div>
      <div className='flex items-center gap-2'>
        <Radio value='large' id='large' />
        <Label htmlFor='large'>Large</Label>
      </div>
    </RadioGroup>
  );
}
