'use client';

import { Toggle } from '@/registry/default/ui/toggle';
import { Bold } from 'lucide-react';

export function ToggleDefault() {
  return (
    <Toggle aria-label='Toggle bold'>
      <Bold />
    </Toggle>
  );
}
