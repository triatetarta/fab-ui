import { Checkbox } from '@/registry/default/ui/checkbox';
import { CheckboxGroup } from '@/registry/default/ui/checkbox-group';
import { Label } from '@/registry/default/ui/label';

export function CheckboxGroupDefault() {
  return (
    <CheckboxGroup defaultValue={['updates']}>
      <Label>
        <Checkbox name='notifications' value='updates' />
        Product updates
      </Label>
      <Label>
        <Checkbox name='notifications' value='news' />
        Company news
      </Label>
      <Label>
        <Checkbox name='notifications' value='offers' />
        Special offers
      </Label>
    </CheckboxGroup>
  );
}
