'use client';

import * as React from 'react';

import { Button } from '@/registry/default/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/registry/default/ui/dropdown-menu';

export function DropdownMenuRadioGroupDemo() {
  const [sortBy, setSortBy] = React.useState('date');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant='outline' />}>
        Sort By
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-36'>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Sort order</DropdownMenuLabel>
          <DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
            <DropdownMenuRadioItem value='name'>Name</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value='date'>Date</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value='size'>Size</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
