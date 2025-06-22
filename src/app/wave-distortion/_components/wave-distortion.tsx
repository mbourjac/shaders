export const WaveDistortion = () => {
  return (
    <mesh>
      <planeGeometry args={[3, 3, 45, 45]} />
      <meshBasicMaterial color="red" />
    </mesh>
  );
};
