const Model = ({scene,scale}) => {
  return <primitive object={scene} scale={scale} castShadow receiveShadow />;
};

export default Model;
