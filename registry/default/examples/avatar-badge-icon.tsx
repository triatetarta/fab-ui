import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from '@/registry/default/ui/avatar';
import { PlusIcon } from 'lucide-react';

export function AvatarBadgeIcon() {
  return (
    <Avatar>
      <AvatarImage
        src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&h=128&dpr=2&q=80'
        alt='Avatar'
      />
      <AvatarFallback>MK</AvatarFallback>
      <AvatarBadge>
        <PlusIcon />
      </AvatarBadge>
    </Avatar>
  );
}
