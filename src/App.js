import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

import "./index.css";

import Model from "./components/Model";
import Ambient from "./components/Enviroment";
import ControlsCamera from "./components/ControlsCamera";
import Effects from "./components/Effects";
import AmbientLight from "./components/AmbientLight";
import DirectionalLight from "./components/DirectionalLight";
import Menu from "./components/menu/menu";

export default function App() {
  const { scene } = useGLTF("./models3d/car.glb");
  const configCamera = { position: [4, 2, 10], fov: 50 };

  const [environment, setEnvironment] = useState({
    type: "cubemap",
    files: [
      "./cubemap/posx.jpg",
      "./cubemap/negx.jpg",
      "./cubemap/posy.jpg",
      "./cubemap/negy.jpg",
      "./cubemap/posz.jpg",
      "./cubemap/negz.jpg",
    ],
  });
 

  return (
    <div className="App">
      {/* Menú de opciones */}
      <Menu scene={scene} environmentRef={setEnvironment} />

      <Canvas shadows camera={configCamera}>
        {/* Modelo */}
        <Model scene={scene} scale={2} />

        {/* Luces */}
        <AmbientLight intensity={0.5} color="#fefefe" />
        <DirectionalLight position={[8, 8, 8]} intensity={3} color="#fff" />
        <DirectionalLight position={[-8, 8, 8]} intensity={5} color="#fff" />

        {/* Fondo dinámico */}
        <Ambient environment={environment} ground={{ height: 15, scale: 30 }} />

        {/*Efecto de Desenfoque */}
        <Effects />

        {/* Control de cámara */}
        <ControlsCamera />
      </Canvas>
    </div>
  );
}
