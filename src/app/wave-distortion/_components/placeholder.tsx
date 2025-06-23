export const Placeholder = () => {
  return (
    <mesh>
      <planeGeometry args={[3, 3, 15, 15]} />
      <meshBasicMaterial color="black" wireframe />
    </mesh>
  );
};
