import {
  MeshGradientCard,
  MeshGradientCardMessage,
  MeshGradientCardMessages,
} from '@/registry/default/ui/mesh-gradient-card';

const messages = [
  'Forest calm.',
  'Emerald glow.',
  'Green pulse.',
  'Leaf drift.',
  'Deep canopy.',
  'Jade shimmer.',
  'Moss light.',
];

export function MeshGradientCardCustom() {
  return (
    <MeshGradientCard
      colors={['#ecfdf5', '#059669', '#d1fae5', '#047857']}
      className='aspect-video w-full max-w-md'
    >
      <MeshGradientCardMessages>
        {messages.map((msg) => (
          <MeshGradientCardMessage key={msg}>{msg}</MeshGradientCardMessage>
        ))}
      </MeshGradientCardMessages>
    </MeshGradientCard>
  );
}
