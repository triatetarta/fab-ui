import { CheckboxGroup as CheckboxGroupPrimitive } from '@base-ui-components/react/checkbox-group';

import { cn } from '@/lib/utils';

function CheckboxGroup({ className, ...props }: CheckboxGroupPrimitive.Props) {
  return (
    <CheckboxGroupPrimitive
      className={cn('flex flex-col items-start gap-1', className)}
      {...props}
    />
  );
}

export { CheckboxGroup };
