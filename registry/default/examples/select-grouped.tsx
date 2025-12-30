'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/registry/default/ui/select';

const timezones = [
  { label: 'Select timezone', value: null },
  { label: 'Eastern (EST)', value: 'est', group: 'North America' },
  { label: 'Central (CST)', value: 'cst', group: 'North America' },
  { label: 'Pacific (PST)', value: 'pst', group: 'North America' },
  { label: 'GMT', value: 'gmt', group: 'Europe' },
  { label: 'Central European (CET)', value: 'cet', group: 'Europe' },
];

const groups = ['North America', 'Europe'];

export function SelectGrouped() {
  return (
    <Select items={timezones}>
      <SelectTrigger className='w-48'>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {groups.map((group) => (
          <SelectGroup key={group}>
            <SelectLabel>{group}</SelectLabel>
            {timezones
              .filter((tz) => tz.group === group)
              .map((tz) => (
                <SelectItem key={tz.value} value={tz.value}>
                  {tz.label}
                </SelectItem>
              ))}
          </SelectGroup>
        ))}
      </SelectContent>
    </Select>
  );
}
