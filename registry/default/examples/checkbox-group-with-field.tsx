import { Checkbox } from '@/registry/default/ui/checkbox';
import { CheckboxGroup } from '@/registry/default/ui/checkbox-group';
import {
  Field,
  FieldDescription,
  FieldLabel,
} from '@/registry/default/ui/field';
import { Label } from '@/registry/default/ui/label';

export function CheckboxGroupWithField() {
  return (
    <div>
      <Field>
        <FieldLabel>Email Preferences</FieldLabel>
        <FieldDescription>
          Choose which emails you&apos;d like to receive.
        </FieldDescription>
        <CheckboxGroup className='mt-2'>
          <Label>
            <Checkbox name='emails' value='marketing' />
            Marketing emails
          </Label>
          <Label>
            <Checkbox name='emails' value='social' />
            Social notifications
          </Label>
          <Label>
            <Checkbox name='emails' value='security' />
            Security alerts
          </Label>
        </CheckboxGroup>
      </Field>
    </div>
  );
}
