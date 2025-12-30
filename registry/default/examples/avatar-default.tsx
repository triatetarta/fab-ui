import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/registry/default/ui/avatar';

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage
        alt='Avatar image'
        src='https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=128&h=128&dpr=2&q=80'
      />
      <AvatarFallback>AI</AvatarFallback>
    </Avatar>
  );
}
