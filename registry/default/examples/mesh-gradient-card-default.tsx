import {
  MeshGradientCard,
  MeshGradientCardMessage,
  MeshGradientCardMessages,
} from '@/registry/default/ui/mesh-gradient-card';

const messages = [
  'Painting with light.',
  'Shifting dimensions.',
  'Breathing color.',
  'Tracing the unseen.',
  'Folding horizons.',
  'Dissolving edges.',
  'Drifting through haze.',
];

export function MeshGradientCardDefault() {
  return (
    <MeshGradientCard className='aspect-video w-full max-w-md'>
      <MeshGradientCardMessages>
        {messages.map((msg) => (
          <MeshGradientCardMessage key={msg}>{msg}</MeshGradientCardMessage>
        ))}
      </MeshGradientCardMessages>
    </MeshGradientCard>
  );
}
