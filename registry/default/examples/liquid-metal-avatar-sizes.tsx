import {
  AvatarFallback,
  AvatarImage,
  LiquidMetalAvatar,
} from '@/registry/default/ui/liquid-metal-avatar';

export function LiquidMetalAvatarSizes() {
  return (
    <div className='flex items-center gap-4'>
      <LiquidMetalAvatar size='sm'>
        <AvatarImage
          src='https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80'
          alt='Avatar'
        />
        <AvatarFallback>SM</AvatarFallback>
      </LiquidMetalAvatar>
      <LiquidMetalAvatar size='md'>
        <AvatarImage
          src='https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80'
          alt='Avatar'
        />
        <AvatarFallback>MD</AvatarFallback>
      </LiquidMetalAvatar>
      <LiquidMetalAvatar size='lg'>
        <AvatarImage
          src='https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80'
          alt='Avatar'
        />
        <AvatarFallback>LG</AvatarFallback>
      </LiquidMetalAvatar>
    </div>
  );
}
