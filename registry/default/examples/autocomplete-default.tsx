'use client';

import {
  Autocomplete,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
} from '@/registry/default/ui/autocomplete';

const items = [
  { label: 'React', value: 'react' },
  { label: 'Next.js', value: 'nextjs' },
  { label: 'Vue.js', value: 'vue' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'TypeScript', value: 'typescript' },
  { label: 'Express', value: 'express' },
  { label: 'Tailwind CSS', value: 'tailwindcss' },
];

export function AutocompleteDemo() {
  return (
    <div className='w-full max-w-xs'>
      <Autocomplete items={items}>
        <AutocompleteInput
          aria-label='Search frameworks'
          placeholder='Search frameworks...'
        />
        <AutocompletePopup>
          <AutocompleteEmpty>No items found.</AutocompleteEmpty>
          <AutocompleteList>
            {(item) => (
              <AutocompleteItem key={item.value} value={item}>
                {item.label}
              </AutocompleteItem>
            )}
          </AutocompleteList>
        </AutocompletePopup>
      </Autocomplete>
    </div>
  );
}
