import { Canvas } from '@react-three/fiber';
import { WaveDistortion } from './wave-distortion';

export const Scene = () => {
  return (
    <Canvas>
      <WaveDistortion />
    </Canvas>
  );
};
