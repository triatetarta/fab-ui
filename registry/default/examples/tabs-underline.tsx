'use client';

import {
  Tabs,
  TabsList,
  TabsPanel,
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
      <TabsPanel value='overview' className='p-4'>
        <p className='text-sm text-muted-foreground'>
          View your dashboard overview.
        </p>
      </TabsPanel>
      <TabsPanel value='analytics' className='p-4'>
        <p className='text-sm text-muted-foreground'>
          Analyze your data and metrics.
        </p>
      </TabsPanel>
      <TabsPanel value='reports' className='p-4'>
        <p className='text-sm text-muted-foreground'>
          Generate and view reports.
        </p>
      </TabsPanel>
    </Tabs>
  );
}
