import { useRef } from 'react';
import { useAspect, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { MotionValue, transform } from 'framer-motion';
import { useControls } from 'leva';
import type { Mesh, PlaneGeometry, ShaderMaterial } from 'three';
import fragmentShader from '../_shaders/fragment.glsl';
import vertexShader from '../_shaders/vertex.glsl';

type WaveDistortionProps = {
  scrollYProgress: MotionValue<number>;
};

export const WaveDistortion = ({ scrollYProgress }: WaveDistortionProps) => {
  const texture = useTexture('/images/c3p73.webp');
  const { width, height } = texture.image;

  const scale = useAspect(width, height, 0.3);

  const { speed, amplitude, waveLength } = useControls({
    speed: { value: 2, min: 0, max: 10, step: 0.5 },
    amplitude: { value: 0.25, min: 0, max: 5, step: 0.05 },
    waveLength: { value: 5, min: 0, max: 20, step: 1 },
  });

  const planeRef = useRef<Mesh<PlaneGeometry, ShaderMaterial>>(null);
  const uniformsRef = useRef({
    uTime: { value: 0 },
    uTexture: { value: texture },
    uAmplitude: { value: amplitude },
    uWaveLength: { value: waveLength },
  });

  useFrame((_, delta) => {
    const plane = planeRef.current;

    if (!plane) return;

    const updatedAmplitude = transform(
      scrollYProgress.get(),
      [0, 1],
      [amplitude, 0]
    );

    plane.material.uniforms.uTime.value += delta * speed;
    plane.material.uniforms.uAmplitude.value = updatedAmplitude;
    plane.material.uniforms.uWaveLength.value = waveLength;
  });

  return (
    <mesh ref={planeRef} scale={scale}>
      <planeGeometry args={[1, 1, 45, 45]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniformsRef.current}
      />
    </mesh>
  );
};
