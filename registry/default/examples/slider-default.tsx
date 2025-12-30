'use client';

import { Slider } from '@/registry/default/ui/slider';

export function SliderDefault() {
  return (
    <div className='w-full max-w-xs'>
      <Slider defaultValue={50} />
    </div>
  );
}
