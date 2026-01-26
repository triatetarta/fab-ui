'use client';

import { Label } from '@/registry/default/ui/label';
import { RadioGroup, RadioGroupItem } from '@/registry/default/ui/radio-group';

export function RadioDefault() {
  return (
    <RadioGroup defaultValue='option-1' className='mx-auto w-fit'>
      <div className='flex items-center gap-2'>
        <RadioGroupItem value='option-1' id='option-1' />
        <Label htmlFor='option-1'>Option 1</Label>
      </div>
      <div className='flex items-center gap-2'>
        <RadioGroupItem value='option-2' id='option-2' />
        <Label htmlFor='option-2'>Option 2</Label>
      </div>
      <div className='flex items-center gap-2'>
        <RadioGroupItem value='option-3' id='option-3' />
        <Label htmlFor='option-3'>Option 3</Label>
      </div>
    </RadioGroup>
  );
}
