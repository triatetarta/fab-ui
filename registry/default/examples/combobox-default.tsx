'use client';

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from '@/registry/default/ui/combobox';

const frameworks = ['React', 'Vue', 'Angular', 'Svelte', 'Next.js', 'Nuxt'];

export function ComboboxDefault() {
  return (
    <Combobox items={frameworks}>
      <ComboboxInput placeholder='Select a framework...' />
      <ComboboxContent>
        <ComboboxEmpty>No frameworks found.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item} value={item}>
              {item}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
