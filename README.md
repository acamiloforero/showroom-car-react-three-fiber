# 🚗 Car Showroom - React Three Fiber

This project is a **Car Showroom** built using **React Three Fiber**. It allows users to explore a 3D car model with interactive features, such as changing the car's color and environment. The project also supports loading additional models and customizing the scene.

---

## 🌟 Features
✅ **Load 3D Car Model** (`.glb` format)  
✅ **Change Car Color** dynamically  
✅ **Switch Environments** (HDR & CubeMap)  
✅ **Interactive Scene Controls**  
✅ **Realistic Lighting & Effects**  

---

## 📂 Project Structure
```plaintext
src/
├── components/
│   ├── Model.js           # Loads and renders the car model
│   ├── Environment.js     # Handles HDR and CubeMap environments
│   ├── ControlsCamera.js  # Controls for moving around the scene
│   ├── Effects.js         # Post-processing effects
│   ├── AmbientLight.js    # Ambient lighting
│   ├── DirectionalLight.js# Directional lighting
│   ├── menu/
│   │   ├── Menu.js        # UI for color and environment selection
│   │   └── Menu.css       # Styles for the menu
├── App.js                 # Main application file
├── index.js               # React entry point
├── index.css              # Global styles
```

---

## 🚀 Installation & Usage

### 1️⃣ Install dependencies:
```sh
npm install
```
### 2️⃣ Run the development server:
```sh
npm run start
```
### 3️⃣ Open in browser:
Go to [http://localhost:3000](http://localhost:3000)

---

## 🛠️ Technologies Used

- **React Three Fiber** - 3D rendering with Three.js  
- **Drei** - Useful helpers for Three.js in React  
- **GLTFLoader** - Load `.glb` 3D models  
- **HDR & CubeMap Environments** - Dynamic lighting effects  
- **React Hooks** - Manage state and effects  

---

## 🎨 How to Use

- 🖌️ Use the menu panel to select a car color  
- 🌄 Switch between day & night environments  
- 🎥 Click and drag to rotate the scene 

---

## 📝 License

This project is open-source under the [MIT License](https://opensource.org/licenses/MIT).