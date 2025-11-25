import { Registry } from 'shadcn/schema';

export const ui: Registry['items'] = [
  {
    name: 'accordion',
    type: 'registry:ui',
    title: 'Accordion',
    dependencies: ['@base-ui-components/react'],
    files: [
      {
        path: 'ui/accordion.tsx',
        type: 'registry:ui',
      },
    ],
  },
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
