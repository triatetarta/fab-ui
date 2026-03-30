'use client';

import {
  Tooltip,
  TooltipPopup,
  TooltipProvider,
  TooltipTrigger,
} from '@/registry/default/ui/tooltip';
import { LiquidMetal } from '@paper-design/shaders-react';
import { Star } from 'lucide-react';
import Link from 'next/link';

import { Icons } from '@/components/icons';

export default function HomePage() {
  return (
    <div className='mx-auto flex w-full max-w-(--fd-layout-width) flex-1 flex-col items-center justify-center border-x px-4 text-center'>
      <LiquidMetal
        width={200}
        height={200}
        image='./fab-ui-logo.svg'
        colorBack='#ffffff00'
        repetition={2}
        softness={0.5}
        shiftRed={0.3}
        shiftBlue={0.3}
        distortion={0.07}
        contour={0.4}
        angle={45}
        speed={0.6}
        scale={0.6}
      />

      <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>fab ui</h1>
      <p className='mt-4 max-w-xl text-lg text-muted-foreground'>
        A modern registry of React and Next.js components, built on top of Base
        UI and beyond.
      </p>
      <p className='mt-2 text-muted-foreground'>
        Open source, accessible, customizable.
      </p>
      <div className='mt-8 flex gap-3'>
        <Link
          prefetch={false}
          href='/docs'
          className='inline-flex h-10 items-center justify-center rounded-4xl bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80'
        >
          Get Started
        </Link>
        <TooltipProvider delay={0}>
          <Tooltip>
            <TooltipTrigger
              render={
                <Link
                  prefetch={false}
                  href='https://github.com/triatetarta/fab-ui'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex h-10 items-center justify-center gap-2 rounded-4xl border border-border bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted'
                >
                  <Icons.gitHub className='size-4 fill-current' />
                  GitHub
                </Link>
              }
            />
            <TooltipPopup side='bottom' className='flex-row items-center gap-1'>
              <Star className='size-4 fill-yellow-400 stroke-yellow-400' />
              Support us with a star
            </TooltipPopup>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
