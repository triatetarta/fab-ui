import { Button } from '@/registry/default/ui/button';
import { ChevronRightIcon } from 'lucide-react';

export function ButtonIcon() {
  return (
    <Button size='icon' variant='outline'>
      <ChevronRightIcon />
    </Button>
  );
}
