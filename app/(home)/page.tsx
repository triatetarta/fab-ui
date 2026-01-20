import { LiquidMetal } from '@paper-design/shaders-react';
import Link from 'next/link';

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
          href='/docs'
          className='inline-flex h-10 items-center justify-center rounded-4xl bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80'
        >
          Get Started
        </Link>
        <Link
          href='https://github.com/triatetarta/fab-ui'
          target='_blank'
          rel='noopener noreferrer'
          className='inline-flex h-10 items-center justify-center gap-2 rounded-4xl border border-border bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted'
        >
          <svg
            role='img'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            className='size-4 fill-current'
          >
            <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
          </svg>
          GitHub
        </Link>
      </div>
    </div>
  );
}
