'use client';

import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from '@/registry/default/ui/progress';

export function ProgressWithLabel() {
  return (
    <Progress value={56} className='w-64'>
      <ProgressLabel>Upload progress</ProgressLabel>
      <ProgressValue />
    </Progress>
  );
}
