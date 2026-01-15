import { LiquidMetal } from '@paper-design/shaders-react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className='flex flex-1 flex-col items-center justify-center px-4 text-center'>
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
      <Link
        href='/docs'
        className='mt-8 inline-flex h-10 items-center justify-center rounded-4xl bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80'
      >
        Get Started
      </Link>
    </div>
  );
}
