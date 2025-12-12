import { Button } from '@/registry/default/ui/button';
import { ArrowRightIcon } from 'lucide-react';

export function ButtonWithIcon() {
  return (
    <Button variant='outline'>
      Enter <ArrowRightIcon />
    </Button>
  );
}
