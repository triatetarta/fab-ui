import { Index } from '@/registry/__index__';

import { cn } from '@/lib/utils';

interface ComponentPreviewProps {
  name: string;
}

export function ComponentPreview({ name, ...props }: ComponentPreviewProps) {
  const Component = Index[name]?.component;
  const metaClassName = Index[name]?.meta?.className;

  if (!Component) {
    return (
      <p className='text-sm text-muted-foreground'>
        Component{' '}
        <code className='relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm'>
          {name}
        </code>{' '}
        not found in registry.
      </p>
    );
  }

  return null;
}
