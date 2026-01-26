'use client';

import {
  Tabs,
  TabsContent,
  TabsList,
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
      <TabsContent value='account' className='p-4'>
        <p className='text-sm text-muted-foreground'>
          Make changes to your account.
        </p>
      </TabsContent>
      <TabsContent value='password' className='p-4'>
        <p className='text-sm text-muted-foreground'>
          Change your password here.
        </p>
      </TabsContent>
      <TabsContent value='settings' className='p-4'>
        <p className='text-sm text-muted-foreground'>
          Adjust your settings here.
        </p>
      </TabsContent>
    </Tabs>
  );
}
