import { Checkbox } from '@/registry/default/ui/checkbox';
import { Label } from '@/registry/default/ui/label';

export function CheckboxWithLabel() {
  return (
    <Label>
      <Checkbox />
      Accept terms and conditions
    </Label>
  );
}
