import {
  AvatarFallback,
  AvatarImage,
  LiquidMetalAvatar,
} from '@/registry/default/ui/liquid-metal-avatar';

export function LiquidMetalAvatarDefault() {
  return (
    <LiquidMetalAvatar>
      <AvatarImage
        src='https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80'
        alt='Avatar'
      />
      <AvatarFallback>JD</AvatarFallback>
    </LiquidMetalAvatar>
  );
}
