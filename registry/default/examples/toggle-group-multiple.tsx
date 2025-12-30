'use client';

import {
  ToggleGroup,
  ToggleGroupItem,
} from '@/registry/default/ui/toggle-group';
import { Bold, Italic, Underline } from 'lucide-react';

export function ToggleGroupMultiple() {
  return (
    <ToggleGroup multiple aria-label='Text formatting'>
      <ToggleGroupItem value='bold' aria-label='Toggle bold'>
        <Bold />
      </ToggleGroupItem>
      <ToggleGroupItem value='italic' aria-label='Toggle italic'>
        <Italic />
      </ToggleGroupItem>
      <ToggleGroupItem value='underline' aria-label='Toggle underline'>
        <Underline />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
