import { SpotLight } from "@react-three/drei";

const Spotlight = ({ position, intensity,color }) => {
  return (
    <spotLight
      position={position}
      intensity={intensity}
      angle={0.3}
      penumbra={0.5}
      color={color}
      castShadow
    />
  );
};

export default Spotlight;
