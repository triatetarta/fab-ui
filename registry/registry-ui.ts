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
    name: 'avatar',
    type: 'registry:ui',
    title: 'Avatar',
    dependencies: ['@base-ui-components/react'],
    files: [
      {
        path: 'ui/avatar.tsx',
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
  {
    name: 'checkbox',
    type: 'registry:ui',
    title: 'Checkbox',
    dependencies: ['@base-ui-components/react'],
    files: [
      {
        path: 'ui/checkbox.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'checkbox-group',
    type: 'registry:ui',
    title: 'Checkbox Group',
    dependencies: ['@base-ui-components/react'],
    files: [
      {
        path: 'ui/checkbox-group.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'collapsible',
    type: 'registry:ui',
    title: 'Collapsible',
    dependencies: ['@base-ui-components/react'],
    files: [
      {
        path: 'ui/collapsible.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'field',
    type: 'registry:ui',
    title: 'Field',
    dependencies: ['@base-ui-components/react'],
    files: [
      {
        path: 'ui/field.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'fieldset',
    type: 'registry:ui',
    title: 'Fieldset',
    dependencies: ['@base-ui-components/react'],
    files: [
      {
        path: 'ui/fieldset.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'label',
    type: 'registry:ui',
    title: 'Label',
    dependencies: ['@base-ui-components/react'],
    files: [
      {
        path: 'ui/label.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'meter',
    type: 'registry:ui',
    title: 'Meter',
    dependencies: ['@base-ui-components/react'],
    files: [
      {
        path: 'ui/meter.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'progress',
    type: 'registry:ui',
    dependencies: ['@base-ui-components/react'],
    files: [
      {
        path: 'ui/progress.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'separator',
    type: 'registry:ui',
    title: 'Separator',
    dependencies: ['@base-ui-components/react'],
    files: [
      {
        path: 'ui/separator.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'switch',
    type: 'registry:ui',
    title: 'Switch',
    dependencies: ['@base-ui-components/react'],
    files: [
      {
        path: 'ui/switch.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'toggle',
    type: 'registry:ui',
    title: 'Toggle',
    dependencies: ['@base-ui-components/react'],
    files: [
      {
        path: 'ui/toggle.tsx',
        type: 'registry:ui',
      },
    ],
  },
];
