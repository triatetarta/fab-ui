'use client';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/registry/default/ui/tabs';

export function TabsUnderline() {
  return (
    <Tabs defaultValue='overview'>
      <TabsList variant='underline'>
        <TabsTrigger value='overview'>Overview</TabsTrigger>
        <TabsTrigger value='analytics'>Analytics</TabsTrigger>
        <TabsTrigger value='reports'>Reports</TabsTrigger>
      </TabsList>
      <TabsContent value='overview' className='p-4'>
        <p className='text-sm text-muted-foreground'>
          View your dashboard overview.
        </p>
      </TabsContent>
      <TabsContent value='analytics' className='p-4'>
        <p className='text-sm text-muted-foreground'>
          Analyze your data and metrics.
        </p>
      </TabsContent>
      <TabsContent value='reports' className='p-4'>
        <p className='text-sm text-muted-foreground'>
          Generate and view reports.
        </p>
      </TabsContent>
    </Tabs>
  );
}
