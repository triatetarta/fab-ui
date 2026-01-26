import { Avatar as AvatarPrimitive } from '@base-ui/react/avatar';

import { cn } from '@/lib/utils';

function Avatar({ className, ...props }: AvatarPrimitive.Root.Props) {
  return (
    <AvatarPrimitive.Root
      data-slot='avatar'
      className={cn(
        'group/avatar relative inline-flex size-12 items-center justify-center rounded-full bg-muted align-middle text-sm font-medium text-foreground select-none after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:rounded-full after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten',
        className
      )}
      {...props}
    />
  );
}

function AvatarImage({ className, ...props }: AvatarPrimitive.Image.Props) {
  return (
    <AvatarPrimitive.Image
      data-slot='avatar-image'
      className={cn(
        'pointer-events-none aspect-square size-full rounded-full object-cover select-none',
        className
      )}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: AvatarPrimitive.Fallback.Props) {
  return (
    <AvatarPrimitive.Fallback
      data-slot='avatar-fallback'
      className={cn(
        'flex size-full items-center justify-center rounded-full bg-muted text-base text-muted-foreground',
        className
      )}
      {...props}
    />
  );
}

function AvatarBadge({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot='avatar-badge'
      className={cn(
        'absolute right-0 bottom-0 z-10 inline-flex size-4 items-center justify-center rounded-full bg-primary text-primary-foreground ring-2 ring-background select-none [&>svg]:size-3',
        className
      )}
      {...props}
    />
  );
}

function AvatarGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='avatar-group'
      className={cn(
        'group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background',
        className
      )}
      {...props}
    />
  );
}

function AvatarGroupCount({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='avatar-group-count'
      className={cn(
        'relative flex size-12 shrink-0 items-center justify-center rounded-full bg-muted text-sm text-muted-foreground ring-2 ring-background [&>svg]:size-3',
        className
      )}
      {...props}
    />
  );
}

export {
  Avatar,
  AvatarImage,
  AvatarFallback,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupCount,
};
