import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from '@/registry/default/ui/avatar';

export function AvatarWithBadge() {
  return (
    <Avatar>
      <AvatarImage
        src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=128&h=128&dpr=2&q=80'
        alt='Avatar'
      />
      <AvatarFallback>JD</AvatarFallback>
      <AvatarBadge className='bg-green-600' />
    </Avatar>
  );
}
