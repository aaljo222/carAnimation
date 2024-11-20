import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import CarAnimation from "./CarAnimation";

const App = () => {
  const [speed, setSpeed] = useState(1); // Default speed
  const [angularSpeed, setAngularSpeed] = useState(1); // Default angular speed

  // 버튼 클릭 시 이동할 URL
  const handleButtonClick = () => {
    window.location.href = "https://mathai-ekuofudghth5bcglznyxen.streamlit.app/";
  };

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      {/* 3D Canvas */}
      <Canvas camera={{ position: [0, 5, 15], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} />
        <CarAnimation speed={speed} angularSpeed={angularSpeed} />
        <OrbitControls />
      </Canvas>

      {/* Sliders */}
      <div style={{ position: "absolute", bottom: 80, left: 20 }}>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Speed: {speed.toFixed(2)}
            <input
              type="range"
              min="0.1"
              max="5"
              step="0.1"
              value={speed}
              onChange={(e) => setSpeed(parseFloat(e.target.value))}
              style={{ marginLeft: "10px" }}
            />
          </label>
        </div>
        <div>
          <label>
            Angular Speed: {angularSpeed.toFixed(2)}
            <input
              type="range"
              min="0.1"
              max="5"
              step="0.1"
              value={angularSpeed}
              onChange={(e) => setAngularSpeed(parseFloat(e.target.value))}
              style={{ marginLeft: "10px" }}
            />
          </label>
        </div>
      </div>

      {/* Navigation Button */}
      <button
        onClick={handleButtonClick}
        style={{
          position: "absolute",
          bottom: 20,
          left: 20,
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Go to MathAI
      </button>
    </div>
  );
};

export default App;
