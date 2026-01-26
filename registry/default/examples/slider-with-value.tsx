'use client';

import { Slider } from '@/registry/default/ui/slider';

export function SliderWithValue() {
  return (
    <Slider
      defaultValue={[75]}
      max={100}
      step={1}
      className='mx-auto w-full max-w-xs'
    />
  );
}
