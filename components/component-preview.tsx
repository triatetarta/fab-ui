import { Index } from '@/registry/__index__';

import { ComponentPreviewTabs } from '@/components/component-preview-tabs';
import { ComponentSource } from '@/components/component-source';

export function ComponentPreview({
  name,
  className,
  align = 'center',
  hideCode = false,
  chromeLessOnMobile = false,
  ...props
}: React.ComponentProps<'div'> & {
  name: string;
  align?: 'center' | 'start' | 'end';
  description?: string;
  hideCode?: boolean;
  chromeLessOnMobile?: boolean;
}) {
  const Component = Index[name]?.component;

  if (!Component) {
    return (
      <p className='mt-6 text-sm text-muted-foreground'>
        Component{' '}
        <code className='relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm'>
          {name}
        </code>{' '}
        not found in registry.
      </p>
    );
  }

  return (
    <ComponentPreviewTabs
      className={className}
      align={align}
      hideCode={hideCode}
      component={<Component />}
      source={<ComponentSource name={name} collapsible={false} />}
      chromeLessOnMobile={chromeLessOnMobile}
      {...props}
    />
  );
}
