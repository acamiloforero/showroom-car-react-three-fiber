const DirectionalLight = ({position, intensity,color}) => {
  return (
    <directionalLight castShadow position={position} intensity={intensity} color={color} />
  );
};

export default DirectionalLight;
