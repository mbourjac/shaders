import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { MotionValue } from 'framer-motion';
import { Placeholder } from './placeholder';
import { WaveDistortion } from './wave-distortion';

type SceneProps = {
  scrollYProgress: MotionValue<number>;
};

export const Scene = ({ scrollYProgress }: SceneProps) => {
  return (
    <Canvas>
      <Suspense fallback={<Placeholder />}>
        <WaveDistortion scrollYProgress={scrollYProgress} />
      </Suspense>
    </Canvas>
  );
};
