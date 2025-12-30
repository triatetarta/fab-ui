'use client';

import { Label } from '@/registry/default/ui/label';
import { Slider, SliderValue } from '@/registry/default/ui/slider';

export function SliderWithValue() {
  return (
    <div className='w-full max-w-xs'>
      <Slider defaultValue={75}>
        <div className='mb-2 flex justify-between'>
          <Label>Volume</Label>
          <SliderValue />
        </div>
      </Slider>
    </div>
  );
}
