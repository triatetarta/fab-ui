'use client';

import {
  Tabs,
  TabsList,
  TabsPanel,
  TabsTrigger,
} from '@/registry/default/ui/tabs';

export function TabsDefault() {
  return (
    <Tabs defaultValue='account'>
      <TabsList>
        <TabsTrigger value='account'>Account</TabsTrigger>
        <TabsTrigger value='password'>Password</TabsTrigger>
        <TabsTrigger value='settings'>Settings</TabsTrigger>
      </TabsList>
      <TabsPanel value='account' className='p-4'>
        <p className='text-sm text-muted-foreground'>
          Make changes to your account.
        </p>
      </TabsPanel>
      <TabsPanel value='password' className='p-4'>
        <p className='text-sm text-muted-foreground'>
          Change your password here.
        </p>
      </TabsPanel>
      <TabsPanel value='settings' className='p-4'>
        <p className='text-sm text-muted-foreground'>
          Adjust your settings here.
        </p>
      </TabsPanel>
    </Tabs>
  );
}
