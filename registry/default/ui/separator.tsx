import { Separator as SeparatorPrimitive } from '@base-ui-components/react/separator';

import { cn } from '@/lib/utils';

export function Separator({ className, ...props }: SeparatorPrimitive.Props) {
  return (
    <SeparatorPrimitive
      data-slot='separator'
      className={cn(
        'shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px',
        className
      )}
      {...props}
    />
  );
}
