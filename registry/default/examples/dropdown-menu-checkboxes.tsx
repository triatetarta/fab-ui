'use client';

import * as React from 'react';

import { Button } from '@/registry/default/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/registry/default/ui/dropdown-menu';

export function DropdownMenuCheckboxes() {
  const [emailNotifs, setEmailNotifs] = React.useState(true);
  const [pushNotifs, setPushNotifs] = React.useState(false);
  const [smsNotifs, setSmsNotifs] = React.useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant='outline' />}>
        Notifications
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-44'>
        <DropdownMenuGroup>
          <DropdownMenuLabel>Notify me via</DropdownMenuLabel>
          <DropdownMenuCheckboxItem
            checked={emailNotifs}
            onCheckedChange={setEmailNotifs}
          >
            Email
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={pushNotifs}
            onCheckedChange={setPushNotifs}
          >
            Push notifications
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={smsNotifs}
            onCheckedChange={setSmsNotifs}
            disabled
          >
            SMS
          </DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
