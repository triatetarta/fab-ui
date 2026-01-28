'use client';

import { LiquidMetalCardLogin } from '@/registry/default/examples/liquid-metal-card-login';
import { LiquidMetalCardPlayer } from '@/registry/default/examples/liquid-metal-card-player';

export default function LiquidMetalCardsPreview() {
  return (
    <div className='min-h-screen bg-background px-4 py-16 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl'>
        {/* Page Header */}
        <div className='mb-16 text-center'>
          <h1 className='bg-gradient-to-r from-neutral-800 via-neutral-600 to-neutral-800 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl dark:from-neutral-200 dark:via-neutral-400 dark:to-neutral-200'>
            Liquid Metal Cards
          </h1>
          <p className='mt-4 text-lg text-muted-foreground'>
            Stunning metallic shader effects for premium UI experiences
          </p>
        </div>

        {/* Cards Grid */}
        <div className='mx-auto grid max-w-3xl gap-8 sm:grid-cols-2'>
          <div className='flex flex-col gap-3'>
            <span className='text-sm font-medium text-muted-foreground'>
              Chrome Deck
            </span>
            <LiquidMetalCardPlayer />
          </div>

          <div className='flex flex-col gap-3'>
            <span className='text-sm font-medium text-muted-foreground'>
              Vault Access
            </span>
            <LiquidMetalCardLogin />
          </div>
        </div>
      </div>
    </div>
  );
}
