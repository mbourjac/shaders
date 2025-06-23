import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Placeholder } from './placeholder';
import { WaveDistortion } from './wave-distortion';

export const Scene = () => {
  return (
    <Canvas>
      <Suspense fallback={<Placeholder />}>
        <WaveDistortion />
      </Suspense>
    </Canvas>
  );
};
