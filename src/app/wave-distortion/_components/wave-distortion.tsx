import fragmentShader from '../_shaders/fragment.glsl';
import vertexShader from '../_shaders/vertex.glsl';

export const WaveDistortion = () => {
  return (
    <mesh>
      <planeGeometry args={[3, 3, 45, 45]} />
      <shaderMaterial
        wireframe
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
};
