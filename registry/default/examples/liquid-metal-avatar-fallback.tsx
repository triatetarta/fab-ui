import {
  AvatarFallback,
  LiquidMetalAvatar,
} from '@/registry/default/ui/liquid-metal-avatar';

export function LiquidMetalAvatarFallback() {
  return (
    <LiquidMetalAvatar>
      <AvatarFallback>JD</AvatarFallback>
    </LiquidMetalAvatar>
  );
}
