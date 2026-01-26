import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from '@/registry/default/ui/avatar';

export function AvatarGroupDemo() {
  return (
    <AvatarGroup>
      <Avatar>
        <AvatarImage
          src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=128&h=128&dpr=2&q=80'
          alt='Avatar 1'
        />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&dpr=2&q=80'
          alt='Avatar 2'
        />
        <AvatarFallback>MK</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src='https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=128&h=128&dpr=2&q=80'
          alt='Avatar 3'
        />
        <AvatarFallback>TS</AvatarFallback>
      </Avatar>
      <AvatarGroupCount>+3</AvatarGroupCount>
    </AvatarGroup>
  );
}
