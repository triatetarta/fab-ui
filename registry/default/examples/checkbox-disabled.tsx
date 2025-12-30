import { Checkbox } from '@/registry/default/ui/checkbox';

export function CheckboxDisabled() {
  return (
    <div className='flex items-center gap-4'>
      <Checkbox disabled />
      <Checkbox disabled defaultChecked />
    </div>
  );
}
