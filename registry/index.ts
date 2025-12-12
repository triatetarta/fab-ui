import { examples } from '@/registry/examples';
import { lib } from '@/registry/registry-lib';
import { ui } from '@/registry/registry-ui';
import { type Registry } from 'shadcn/schema';

export const registry = {
  name: 'fab-ui',
  homepage: 'https://fab-ui.vercel.app',
  items: [...ui, ...examples, ...lib],
} satisfies Registry;
