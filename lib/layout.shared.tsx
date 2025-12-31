import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className='flex items-center gap-2'>
          <Image
            src='/fab-ui-logo.png'
            alt='fab ui'
            width={24}
            height={24}
            className='rounded-sm'
          />
          <span>fab ui</span>
        </div>
      ),
    },
    githubUrl: 'https://github.com/triatetarta/fab-ui',
  };
}
