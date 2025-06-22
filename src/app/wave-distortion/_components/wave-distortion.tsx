import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import type { Mesh, PlaneGeometry, ShaderMaterial } from 'three';
import fragmentShader from '../_shaders/fragment.glsl';
import vertexShader from '../_shaders/vertex.glsl';

export const WaveDistortion = () => {
  const { speed, amplitude, waveLength } = useControls({
    speed: { value: 2, min: 0, max: 10, step: 0.5 },
    amplitude: { value: 0.25, min: 0, max: 5, step: 0.05 },
    waveLength: { value: 5, min: 0, max: 20, step: 1 },
  });

  const planeRef = useRef<Mesh<PlaneGeometry, ShaderMaterial>>(null);
  const uniformsRef = useRef({
    uTime: { value: 0 },
    uAmplitude: { value: amplitude },
    uWaveLength: { value: waveLength },
  });

  useFrame((_, delta) => {
    const plane = planeRef.current;

    if (!plane) return;

    plane.material.uniforms.uTime.value += delta * speed;
    plane.material.uniforms.uAmplitude.value = amplitude;
    plane.material.uniforms.uWaveLength.value = waveLength;
  });

  return (
    <mesh ref={planeRef}>
      <planeGeometry args={[3, 3, 45, 45]} />
      <shaderMaterial
        wireframe
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniformsRef.current}
      />
    </mesh>
  );
};
