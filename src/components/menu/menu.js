import React from "react";
import "./Menu.css";

const Menu = ({ scene, environmentRef }) => {
  const colors = ["#4F0D08", "#030303", "#BABCBC", "#1B213C", "#E5E2DB"];

  const environments = [
    {
        name: "Night City",
        type: "cubemap",
        files: [
          "./cubemap/posx.jpg",
          "./cubemap/negx.jpg",
          "./cubemap/posy.jpg",
          "./cubemap/negy.jpg",
          "./cubemap/posz.jpg",
          "./cubemap/negz.jpg",
        ],
      },
    { name: "Sun Day", type: "hdr", file: "./hdrs/CiudadDia.jpg" },
    
  ];
   
  const changeColor = (color) => {
    if (!scene) return;
    
    
    let body = scene.getObjectByName("Body");
    if (body) {
      let mesh = body.getObjectByName("Mesh005_4");
      if (mesh) {
        mesh.material.color.set(color);
      }
    }
  };

  const showLights = (env) => {
    if(env.type!=="cubemap"){
         scene.getObjectByName("SueloLuces").visible = false;
    }else{
         scene.getObjectByName("SueloLuces").visible = true;
    }
  
  }

  const changeEnvironment = async (env) => {
    if (!environmentRef) return;
    
    
    // Actualizar correctamente el estado en `App.js`
   await environmentRef({
      type: env.type,
      file: env.type === "hdr" ? env.file : undefined,
      files: env.type === "cubemap" ? env.files : undefined,
    });

    await showLights(env);
  
  };
  

  return (
    <div className="menu">
      <h3>Choose color</h3>
      <div className="colors">
        {colors.map((color) => (
          <button
            key={color}
            style={{ backgroundColor: color }}
            onClick={() => changeColor(color)}
          />
        ))}
      </div>

      <h3>Select Enviroment</h3>
      <div className="environments">
        {environments.map((env) => (
          <button key={env.name} onClick={() => changeEnvironment(env)}>
            {env.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Menu;
