'use client';

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from '@/registry/default/ui/input-group';

export function InputGroupDefault() {
  return (
    <div className='grid w-full max-w-sm gap-6'>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>https://</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder='example.com' className='pl-0.5!' />
      </InputGroup>
      <InputGroup>
        <InputGroupAddon>
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <InputGroupInput placeholder='username' />
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder='18' />
        <InputGroupAddon align='inline-end'>
          <InputGroupText>years</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder='Write a bio...' />
        <InputGroupAddon align='block-end'>
          <InputGroupText className='text-xs text-muted-foreground'>
            Max 200 characters
          </InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
