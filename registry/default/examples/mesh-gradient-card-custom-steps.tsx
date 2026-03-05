import {
  MeshGradientCard,
  MeshGradientCardMessage,
  MeshGradientCardMessages,
  type GradientStep,
} from '@/registry/default/ui/mesh-gradient-card';

const steps: GradientStep[] = [
  {
    distortion: 0.8,
    swirl: 0.1,
    grainMixer: 0.2,
    grainOverlay: 0.15,
    speed: 0.7,
    scale: 1.3,
    rotation: 10,
    offsetX: 0.1,
    offsetY: -0.05,
  },
  {
    distortion: 0.1,
    swirl: 0.9,
    grainMixer: 0.05,
    grainOverlay: 0.08,
    speed: 0.4,
    scale: 0.85,
    rotation: -15,
    offsetX: -0.1,
    offsetY: 0.1,
  },
  {
    distortion: 0.45,
    swirl: 0.45,
    grainMixer: 0.12,
    grainOverlay: 0.12,
    speed: 0.55,
    scale: 1.1,
    rotation: 20,
    offsetX: 0.05,
    offsetY: 0.05,
  },
];

const messages = ['High distortion.', 'Deep swirl.', 'Balanced flow.'];

export function MeshGradientCardCustomSteps() {
  return (
    <MeshGradientCard
      steps={steps}
      interval={2000}
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
