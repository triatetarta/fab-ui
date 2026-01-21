import {
  AvatarFallback,
  AvatarImage,
  LiquidMetalAvatar,
} from '@/registry/default/ui/liquid-metal-avatar';

export function LiquidMetalAvatarCustom() {
  return (
    <LiquidMetalAvatar
      size='lg'
      speed={0.8}
      repetition={8}
      softness={0.7}
      shiftRed={0.5}
      shiftBlue={0.1}
    >
      <AvatarImage
        src='https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80'
        alt='Avatar'
      />
      <AvatarFallback>AB</AvatarFallback>
    </LiquidMetalAvatar>
  );
}
