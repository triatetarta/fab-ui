import { Registry } from 'shadcn/schema';

export const ui: Registry['items'] = [
  {
    name: 'accordion',
    type: 'registry:ui',
    title: 'Accordion',
    dependencies: ['@base-ui/react'],
    files: [
      {
        path: 'ui/accordion.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'alert-dialog',
    type: 'registry:ui',
    title: 'Alert Dialog',
    registryDependencies: ['@fab-ui/button'],
    dependencies: ['@base-ui/react'],
    files: [
      {
        path: 'ui/alert-dialog.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'autocomplete',
    type: 'registry:ui',
    title: 'Autocomplete',
    registryDependencies: ['@fab-ui/input'],
    dependencies: ['@base-ui/react'],
    files: [
      {
        path: 'ui/autocomplete.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'avatar',
    type: 'registry:ui',
    title: 'Avatar',
    dependencies: ['@base-ui/react'],
    files: [
      {
        path: 'ui/avatar.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'badge',
    type: 'registry:ui',
    title: 'Badge',
    dependencies: ['@base-ui/react'],
    files: [
      {
        path: 'ui/badge.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'button',
    type: 'registry:ui',
    title: 'Button',
    dependencies: ['@base-ui/react'],
    files: [
      {
        path: 'ui/button.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'card',
    type: 'registry:ui',
    title: 'Card',
    dependencies: ['@base-ui/react'],
    files: [
      {
        path: 'ui/card.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'checkbox',
    type: 'registry:ui',
    title: 'Checkbox',
    dependencies: ['@base-ui/react'],
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
    dependencies: ['@base-ui/react'],
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
    dependencies: ['@base-ui/react'],
    files: [
      {
        path: 'ui/collapsible.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'combobox',
    type: 'registry:ui',
    title: 'Combobox',
    registryDependencies: ['@fab-ui/button', '@fab-ui/input-group'],
    dependencies: ['@base-ui/react', 'lucide-react'],
    files: [
      {
        path: 'ui/combobox.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'context-menu',
    type: 'registry:ui',
    title: 'Context Menu',
    dependencies: ['@base-ui/react'],
    files: [
      {
        path: 'ui/context-menu.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'dialog',
    type: 'registry:ui',
    title: 'Dialog',
    registryDependencies: ['@fab-ui/button'],
    dependencies: ['@base-ui/react', 'lucide-react'],
    files: [
      {
        path: 'ui/dialog.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'dropdown-menu',
    type: 'registry:ui',
    title: 'Dropdown Menu',
    dependencies: ['@base-ui/react'],
    files: [
      {
        path: 'ui/dropdown-menu.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'field',
    type: 'registry:ui',
    title: 'Field',
    dependencies: ['@base-ui/react'],
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
    dependencies: ['@base-ui/react'],
    files: [
      {
        path: 'ui/fieldset.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'form',
    type: 'registry:ui',
    title: 'Form',
    dependencies: ['@base-ui/react'],
    files: [
      {
        path: 'ui/form.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'input',
    type: 'registry:ui',
    title: 'Input',
    dependencies: ['@base-ui/react'],
    files: [
      {
        path: 'ui/input.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'input-group',
    type: 'registry:ui',
    title: 'Input Group',
    registryDependencies: [
      '@fab-ui/button',
      '@fab-ui/input',
      '@fab-ui/textarea',
    ],
    dependencies: ['@base-ui/react'],
    files: [
      {
        path: 'ui/input-group.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'label',
    type: 'registry:ui',
    title: 'Label',
    dependencies: ['@base-ui/react'],
    files: [
      {
        path: 'ui/label.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'liquid-metal-avatar',
    type: 'registry:ui',
    title: 'Liquid Metal Avatar',
    registryDependencies: ['@fab-ui/avatar'],
    dependencies: ['@paper-design/shaders-react'],
    files: [
      {
        path: 'ui/liquid-metal-avatar.tsx',
        type: 'registry:ui',
      },
    ],
    cssVars: {
      theme: {
        '--inset-shadow-lg':
          'inset 0 10px 8px color-mix(in oklch, var(--background) 7%, transparent)',
      },
    },
  },
  {
    name: 'liquid-metal-button',
    type: 'registry:ui',
    title: 'Liquid Metal Button',
    registryDependencies: ['@fab-ui/button'],
    dependencies: ['@paper-design/shaders-react'],
    files: [
      {
        path: 'ui/liquid-metal-button.tsx',
        type: 'registry:ui',
      },
    ],
    cssVars: {
      theme: {
        '--inset-shadow-lg':
          'inset 0 10px 8px color-mix(in oklch, var(--background) 7%, transparent)',
      },
    },
  },
  {
    name: 'liquid-metal-card',
    type: 'registry:ui',
    title: 'Liquid Metal Card',
    registryDependencies: ['@fab-ui/card'],
    dependencies: ['@paper-design/shaders-react'],
    files: [
      {
        path: 'ui/liquid-metal-card.tsx',
        type: 'registry:ui',
      },
    ],
    cssVars: {
      theme: {
        '--inset-shadow-lg':
          'inset 0 10px 8px color-mix(in oklch, var(--background) 7%, transparent)',
      },
    },
  },
  {
    name: 'meter',
    type: 'registry:ui',
    title: 'Meter',
    dependencies: ['@base-ui/react'],
    files: [
      {
        path: 'ui/meter.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'number-field',
    type: 'registry:ui',
    title: 'Number Field',
    dependencies: ['@base-ui/react'],
    files: [
      {
        path: 'ui/number-field.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'popover',
    type: 'registry:ui',
    title: 'Popover',
    dependencies: ['@base-ui/react'],
    files: [
      {
        path: 'ui/popover.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'hover-card',
    type: 'registry:ui',
    title: 'Hover Card',
    dependencies: ['@base-ui/react'],
    files: [
      {
        path: 'ui/hover-card.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'progress',
    type: 'registry:ui',
    dependencies: ['@base-ui/react'],
    files: [
      {
        path: 'ui/progress.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'radio',
    type: 'registry:ui',
    title: 'Radio',
    dependencies: ['@base-ui/react'],
    files: [
      {
        path: 'ui/radio.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'scroll-area',
    type: 'registry:ui',
    title: 'Scroll Area',
    dependencies: ['@base-ui/react'],
    files: [
      {
        path: 'ui/scroll-area.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'select',
    type: 'registry:ui',
    title: 'Select',
    dependencies: ['@base-ui/react'],
    files: [
      {
        path: 'ui/select.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'separator',
    type: 'registry:ui',
    title: 'Separator',
    dependencies: ['@base-ui/react'],
    files: [
      {
        path: 'ui/separator.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'slider',
    type: 'registry:ui',
    title: 'Slider',
    dependencies: ['@base-ui/react'],
    files: [
      {
        path: 'ui/slider.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'switch',
    type: 'registry:ui',
    title: 'Switch',
    dependencies: ['@base-ui/react'],
    files: [
      {
        path: 'ui/switch.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'tabs',
    type: 'registry:ui',
    title: 'Tabs',
    dependencies: ['@base-ui/react'],
    files: [
      {
        path: 'ui/tabs.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'textarea',
    type: 'registry:ui',
    title: 'Textarea',
    dependencies: ['@base-ui/react'],
    files: [
      {
        path: 'ui/textarea.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'toggle-group',
    type: 'registry:ui',
    title: 'Toggle Group',
    registryDependencies: ['@fab-ui/toggle'],
    dependencies: ['@base-ui/react'],
    files: [
      {
        path: 'ui/toggle-group.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'toggle',
    type: 'registry:ui',
    title: 'Toggle',
    dependencies: ['@base-ui/react'],
    files: [
      {
        path: 'ui/toggle.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'toolbar',
    type: 'registry:ui',
    title: 'Toolbar',
    dependencies: ['@base-ui/react'],
    files: [
      {
        path: 'ui/toolbar.tsx',
        type: 'registry:ui',
      },
    ],
  },
  {
    name: 'tooltip',
    type: 'registry:ui',
    title: 'Tooltip',
    dependencies: ['@base-ui/react'],
    files: [
      {
        path: 'ui/tooltip.tsx',
        type: 'registry:ui',
      },
    ],
  },
];
