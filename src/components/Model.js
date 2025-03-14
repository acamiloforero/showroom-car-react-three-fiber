import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";

const Model = ({scene,scale}) => {
  

  // const toHex = (value) => {
  //   const hex = Math.round(value * 255).toString(16).padStart(2, "0");
  //   return hex;
  // };
  // // Ejecutar cuando el modelo se cargue


  return <primitive object={scene} scale={scale} castShadow receiveShadow />;
};

export default Model;
