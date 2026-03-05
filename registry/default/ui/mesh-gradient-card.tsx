'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  MeshGradient,
  type MeshGradientParams,
  type MeshGradientProps,
} from '@paper-design/shaders-react';
import { animate, AnimatePresence, motion } from 'motion/react';

import { cn } from '@/lib/utils';

type GradientStep = Required<
  Pick<
    MeshGradientParams,
    | 'distortion'
    | 'swirl'
    | 'grainMixer'
    | 'grainOverlay'
    | 'speed'
    | 'scale'
    | 'rotation'
    | 'offsetX'
    | 'offsetY'
  >
>;

const DEFAULT_STEPS: GradientStep[] = [
  {
    distortion: 0.3,
    swirl: 0.1,
    grainMixer: 0.16,
    grainOverlay: 0.15,
    speed: 0.45,
    scale: 1.0,
    rotation: 0,
    offsetX: 0,
    offsetY: 0,
  },
  {
    distortion: 0.5,
    swirl: 0.3,
    grainMixer: 0.1,
    grainOverlay: 0.1,
    speed: 0.55,
    scale: 1.2,
    rotation: 15,
    offsetX: 0.1,
    offsetY: -0.05,
  },
  {
    distortion: 0.4,
    swirl: 0.8,
    grainMixer: 0.2,
    grainOverlay: 0.1,
    speed: 0.38,
    scale: 0.9,
    rotation: -10,
    offsetX: -0.15,
    offsetY: 0.1,
  },
  {
    distortion: 0.9,
    swirl: 0.5,
    grainMixer: 0.12,
    grainOverlay: 0.2,
    speed: 0.65,
    scale: 1.4,
    rotation: 25,
    offsetX: 0.05,
    offsetY: -0.1,
  },
  {
    distortion: 0.25,
    swirl: 0.2,
    grainMixer: 0.6,
    grainOverlay: 0.5,
    speed: 0.5,
    scale: 1.1,
    rotation: -5,
    offsetX: -0.05,
    offsetY: 0.05,
  },
  {
    distortion: 0.6,
    swirl: 0.9,
    grainMixer: 0.08,
    grainOverlay: 0.05,
    speed: 0.3,
    scale: 0.8,
    rotation: 35,
    offsetX: 0.12,
    offsetY: 0.08,
  },
  {
    distortion: 0.15,
    swirl: 0.05,
    grainMixer: 0.5,
    grainOverlay: 0.4,
    speed: 0.6,
    scale: 1.3,
    rotation: -20,
    offsetX: -0.1,
    offsetY: -0.08,
  },
];

const MeshGradientCardContext = createContext<{ messageIndex: number }>({
  messageIndex: 0,
});

type MeshGradientCardProps = Partial<
  Omit<MeshGradientProps, 'width' | 'height'>
> & {
  steps?: GradientStep[];
  interval?: number;
  children?: React.ReactNode;
};

function MeshGradientCardRoot({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='mesh-gradient-card'
      className={cn('relative overflow-hidden rounded-4xl', className)}
      {...props}
    />
  );
}

function MeshGradientCard({
  className,
  children,
  colors = ['#fafafa', '#18181b', '#fafafa', '#18181b'],
  steps = DEFAULT_STEPS,
  interval = 4000,
  ...shaderProps
}: MeshGradientCardProps) {
  const { config, messageIndex } = useGradientCycler(steps, interval);

  return (
    <MeshGradientCardContext.Provider value={{ messageIndex }}>
      <MeshGradientCardRoot className={className}>
        <MeshGradient
          width='100%'
          height='100%'
          colors={colors}
          {...config}
          {...shaderProps}
        />
        {children}
      </MeshGradientCardRoot>
    </MeshGradientCardContext.Provider>
  );
}

function MeshGradientCardMessages({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const { messageIndex } = useContext(MeshGradientCardContext);
  const items = React.Children.toArray(children);
  const active = items[messageIndex % items.length];

  return (
    <span data-slot='mesh-gradient-card-messages' className={className}>
      <AnimatePresence mode='wait'>
        {React.isValidElement(active)
          ? React.cloneElement(active, {
              key: messageIndex,
            } as React.Attributes)
          : active}
      </AnimatePresence>
    </span>
  );
}

function MeshGradientCardMessage({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.span
      data-slot='mesh-gradient-card-message'
      initial={{ opacity: 0, filter: 'blur(8px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(8px)' }}
      transition={{ duration: 0.45, ease: 'easeInOut' }}
      style={{
        textShadow: '0 1px 4px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.2)',
      }}
      className={cn(
        'absolute right-5 bottom-4 pb-1 text-lg font-medium text-white select-none',
        className
      )}
    >
      {children}
    </motion.span>
  );
}

function useGradientCycler(
  steps: GradientStep[] = DEFAULT_STEPS,
  interval: number = 4000
) {
  const [stepIndex, setStepIndex] = useState(0);
  const [config, setConfig] = useState<GradientStep>(steps[0]);
  const animationRef = useRef<ReturnType<typeof animate> | null>(null);
  const [messageIndex, setMessageIndex] = useState(0);

  const goToStep = useCallback(
    (n: number) => {
      if (n === stepIndex) return;
      animationRef.current?.stop();

      const from = { ...config };
      const to = steps[n];

      animationRef.current = animate(from, to, {
        duration: 0.6,
        ease: 'easeOut',
        onUpdate: () => setConfig({ ...from }),
      });

      setStepIndex(n);
      setMessageIndex((i) => i + 1);
    },
    [stepIndex, config, steps]
  );

  useEffect(() => {
    const id = setTimeout(() => {
      goToStep((stepIndex + 1) % steps.length);
    }, interval);
    return () => clearTimeout(id);
  }, [stepIndex, goToStep, steps.length, interval]);

  return { config, stepIndex, messageIndex, goToStep };
}

export {
  MeshGradientCard,
  MeshGradientCardMessage,
  MeshGradientCardMessages,
  MeshGradientCardRoot,
  useGradientCycler,
};

export type { GradientStep, MeshGradientCardProps };
