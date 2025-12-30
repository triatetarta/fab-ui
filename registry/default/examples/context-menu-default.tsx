'use client';

import {
  ContextMenu,
  ContextMenuItem,
  ContextMenuPopup,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from '@/registry/default/ui/context-menu';

export function ContextMenuDefault() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className='flex h-32 w-64 items-center justify-center rounded-md border border-dashed'>
        Right click here
      </ContextMenuTrigger>
      <ContextMenuPopup>
        <ContextMenuItem>Back</ContextMenuItem>
        <ContextMenuItem>Forward</ContextMenuItem>
        <ContextMenuItem>Reload</ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>Save As...</ContextMenuItem>
        <ContextMenuItem>Print...</ContextMenuItem>
      </ContextMenuPopup>
    </ContextMenu>
  );
}
