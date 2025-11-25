import { Registry } from 'shadcn/schema';

export const ui: Registry['items'] = [
  {
    name: 'button',
    type: 'registry:ui',
    title: 'Button',
    dependencies: ['@base-ui-components/react'],
    files: [
      {
        path: 'ui/button.tsx',
        type: 'registry:ui',
      },
    ],
  },
];
