'use client';

import { Button } from '@/registry/default/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/registry/default/ui/select';
import {
  ToggleGroup,
  ToggleGroupItem,
} from '@/registry/default/ui/toggle-group';
import {
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  ToolbarLink,
  ToolbarSeparator,
} from '@/registry/default/ui/toolbar';
import {
  Tooltip,
  TooltipPopup,
  TooltipProvider,
  TooltipTrigger,
} from '@/registry/default/ui/tooltip';
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  DollarSign,
  Percent,
} from 'lucide-react';

const fonts = [
  { label: 'Helvetica', value: 'helvetica' },
  { label: 'Arial', value: 'arial' },
];

export function ToolbarDefault() {
  return (
    <TooltipProvider>
      <Toolbar className='space-x-4'>
        <ToggleGroup className='border-none p-0'>
          <Tooltip>
            <TooltipTrigger
              render={
                <ToolbarButton
                  aria-label='Align left'
                  render={<ToggleGroupItem value='left' />}
                >
                  <AlignLeft />
                </ToolbarButton>
              }
            />
            <TooltipPopup sideOffset={8}>Align left</TooltipPopup>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              render={
                <ToolbarButton
                  aria-label='Align center'
                  render={<ToggleGroupItem value='center' />}
                >
                  <AlignCenter />
                </ToolbarButton>
              }
            />
            <TooltipPopup sideOffset={8}>Align center</TooltipPopup>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              render={
                <ToolbarButton
                  aria-label='Align right'
                  render={<ToggleGroupItem value='right' />}
                >
                  <AlignRight />
                </ToolbarButton>
              }
            />
            <TooltipPopup sideOffset={8}>Align right</TooltipPopup>
          </Tooltip>
        </ToggleGroup>
        <ToolbarSeparator />
        <ToolbarGroup>
          <Tooltip>
            <TooltipTrigger
              render={
                <ToolbarButton
                  aria-label='Format as currency'
                  render={<Button size='icon' variant='ghost' />}
                >
                  <DollarSign />
                </ToolbarButton>
              }
            />
            <TooltipPopup sideOffset={8}>Format as currency</TooltipPopup>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger
              render={
                <ToolbarButton
                  aria-label='Format as percent'
                  render={<Button size='icon' variant='ghost' />}
                >
                  <Percent />
                </ToolbarButton>
              }
            />
            <TooltipPopup sideOffset={8}>Format as percent</TooltipPopup>
          </Tooltip>
        </ToolbarGroup>
        <ToolbarSeparator />
        <ToolbarGroup>
          <Select defaultValue='helvetica' items={fonts}>
            <Tooltip>
              <TooltipTrigger
                render={
                  <ToolbarButton
                    render={
                      <SelectTrigger className='w-36'>
                        <SelectValue />
                      </SelectTrigger>
                    }
                  />
                }
              />
              <TooltipPopup sideOffset={8}>Select font</TooltipPopup>
            </Tooltip>
            <SelectContent>
              {fonts.map(({ label, value }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </ToolbarGroup>
      </Toolbar>
    </TooltipProvider>
  );
}
