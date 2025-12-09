import { Registry } from 'shadcn/schema';

export const examples: Registry['items'] = [
  {
    name: 'example-button-1',
    type: 'registry:example',
    registryDependencies: ['button'],
    files: [
      {
        path: 'examples/example-button-1.tsx',
        type: 'registry:example',
      },
    ],
  },
];
