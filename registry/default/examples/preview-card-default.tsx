'use client';

import {
  PreviewCard,
  PreviewCardPopup,
  PreviewCardTrigger,
} from '@/registry/default/ui/preview-card';

export function PreviewCardDefault() {
  return (
    <PreviewCard>
      <PreviewCardTrigger className='text-primary underline underline-offset-4'>
        Hover over me
      </PreviewCardTrigger>
      <PreviewCardPopup>
        <div className='flex flex-col gap-2'>
          <p className='font-semibold'>Preview Card</p>
          <p className='text-muted-foreground'>
            This is a preview card that appears on hover. It can contain any
            content you want to display.
          </p>
        </div>
      </PreviewCardPopup>
    </PreviewCard>
  );
}
