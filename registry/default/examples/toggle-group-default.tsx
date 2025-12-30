'use client';

import {
  ToggleGroup,
  ToggleGroupItem,
} from '@/registry/default/ui/toggle-group';
import { AlignCenter, AlignLeft, AlignRight } from 'lucide-react';

export function ToggleGroupDefault() {
  return (
    <ToggleGroup aria-label='Text alignment'>
      <ToggleGroupItem value='left' aria-label='Align left'>
        <AlignLeft />
      </ToggleGroupItem>
      <ToggleGroupItem value='center' aria-label='Align center'>
        <AlignCenter />
      </ToggleGroupItem>
      <ToggleGroupItem value='right' aria-label='Align right'>
        <AlignRight />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
