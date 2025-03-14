import { OrbitControls } from "@react-three/drei";

const ControlsCamera = () => {
  return (
    <OrbitControls
      minPolarAngle={0} // Permite ver desde arriba completamente
      maxPolarAngle={Math.PI / 2.5} // Restringe para que no baje por debajo del auto
    />
  );
};

export default ControlsCamera;
