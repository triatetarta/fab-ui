'use client';

import * as React from 'react';

import { Button } from '@/registry/default/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from '@/registry/default/ui/drawer';

export function DrawerNested() {
  const [firstOpen, setFirstOpen] = React.useState(false);
  const [secondOpen, setSecondOpen] = React.useState(false);
  const [thirdOpen, setThirdOpen] = React.useState(false);

  return (
    <Drawer
      open={firstOpen}
      onOpenChange={(nextOpen) => {
        setFirstOpen(nextOpen);
        if (!nextOpen) {
          setSecondOpen(false);
          setThirdOpen(false);
        }
      }}
    >
      <DrawerTrigger render={<Button variant='outline' />}>
        Open Drawer Stack
      </DrawerTrigger>
      <DrawerPopup>
        <DrawerContent>
          <DrawerTitle className='mb-1'>Account</DrawerTitle>
          <DrawerDescription className='mb-6'>
            Nested drawers can be styled to stack, while each drawer remains
            independently focus managed.
          </DrawerDescription>

          <div className='flex items-center justify-end gap-4'>
            <div className='mr-auto'>
              <Drawer
                open={secondOpen}
                onOpenChange={(nextOpen) => {
                  setSecondOpen(nextOpen);
                  if (!nextOpen) {
                    setThirdOpen(false);
                  }
                }}
              >
                <DrawerTrigger
                  render={<Button variant='link' className='px-0' />}
                >
                  Security settings
                </DrawerTrigger>
                <DrawerPopup>
                  <DrawerContent>
                    <DrawerTitle className='mb-1'>Security</DrawerTitle>
                    <DrawerDescription className='mb-6'>
                      Review sign-in activity and update your security
                      preferences.
                    </DrawerDescription>

                    <ul className='mb-6 list-disc pl-5 text-muted-foreground'>
                      <li>Passkeys enabled</li>
                      <li>2FA via authenticator app</li>
                      <li>3 signed-in devices</li>
                    </ul>

                    <div className='flex items-center justify-end gap-4'>
                      <div className='mr-auto'>
                        <Drawer open={thirdOpen} onOpenChange={setThirdOpen}>
                          <DrawerTrigger
                            render={<Button variant='link' className='px-0' />}
                          >
                            Advanced options
                          </DrawerTrigger>
                          <DrawerPopup>
                            <DrawerContent>
                              <DrawerTitle className='mb-1'>
                                Advanced
                              </DrawerTitle>
                              <DrawerDescription className='mb-6'>
                                This drawer is taller to demonstrate
                                variable-height stacking.
                              </DrawerDescription>

                              <div className='mb-4 grid gap-1.5'>
                                <label
                                  className='text-sm font-medium'
                                  htmlFor='device-name'
                                >
                                  Device name
                                </label>
                                <input
                                  id='device-name'
                                  className='w-full rounded-md border border-input bg-background px-2.5 py-2 text-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none'
                                  defaultValue='Personal laptop'
                                />
                              </div>

                              <div className='mb-6 grid gap-1.5'>
                                <label
                                  className='text-sm font-medium'
                                  htmlFor='notes'
                                >
                                  Notes
                                </label>
                                <textarea
                                  id='notes'
                                  className='w-full resize-y rounded-md border border-input bg-background px-2.5 py-2 text-sm focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none'
                                  defaultValue='Rotate recovery codes and revoke older sessions.'
                                  rows={3}
                                />
                              </div>

                              <div className='flex justify-end'>
                                <DrawerClose
                                  render={<Button variant='outline' />}
                                >
                                  Done
                                </DrawerClose>
                              </div>
                            </DrawerContent>
                          </DrawerPopup>
                        </Drawer>
                      </div>

                      <DrawerClose render={<Button variant='outline' />}>
                        Close
                      </DrawerClose>
                    </div>
                  </DrawerContent>
                </DrawerPopup>
              </Drawer>
            </div>

            <DrawerClose render={<Button variant='outline' />}>
              Close
            </DrawerClose>
          </div>
        </DrawerContent>
      </DrawerPopup>
    </Drawer>
  );
}
