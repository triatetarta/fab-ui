'use client';

import { Accordion as AccordionPrimitive } from '@base-ui/react/accordion';
import { PlusIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

function Accordion({ className, ...props }: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot='accordion'
      className={cn('flex w-full flex-col', className)}
      {...props}
    />
  );
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot='accordion-item'
      className={cn('not-last:border-b', className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className='mt-0 mb-0 flex py-4'>
      <AccordionPrimitive.Trigger
        className={cn(
          'group/accordion-trigger relative flex flex-1 cursor-pointer items-start justify-between gap-4 rounded-md border border-transparent text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:after:border-ring disabled:pointer-events-none disabled:opacity-64 **:data-[slot=accordion-trigger-icon]:ml-auto **:data-[slot=accordion-trigger-icon]:size-4 **:data-[slot=accordion-trigger-icon]:text-muted-foreground [&[data-panel-open]>svg]:rotate-45',
          className
        )}
        data-slot='accordion-trigger'
        {...props}
      >
        {children}
        <PlusIcon className='pointer-events-none size-4 shrink-0 translate-y-0.5 opacity-72 transition-transform duration-150 ease-out' />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      className='h-(--accordion-panel-height) overflow-hidden text-sm text-muted-foreground transition-[height] duration-150 ease-out data-ending-style:h-0 data-starting-style:h-0'
      data-slot='accordion-panel'
      {...props}
    >
      <div className={cn('pt-0 pb-4', className)}>{children}</div>
    </AccordionPrimitive.Panel>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
