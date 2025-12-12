import { DocsLayout } from 'fumadocs-ui/layouts/docs';

import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';

import { Folder, Item } from '@/components/sidebar-components';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout
      tree={source.pageTree}
      sidebar={{ components: { Folder, Item } }}
      {...baseOptions()}
    >
      {children}
    </DocsLayout>
  );
}
