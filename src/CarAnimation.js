import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const CarAnimation = ({ speed, angularSpeed }) => {
    const carRef = useRef();

    // Load the car model
    const car = useLoader(GLTFLoader, "/models/car.glb");

    // Animation frame update
    useFrame(({ clock }) => {
        const t = clock.getElapsedTime() * speed; // Apply speed multiplier

        // Sinusoidal movement
        const x = Math.sin(t) * 5; // X-axis (left and right)
        const z = Math.cos(t) * 5; // Z-axis (forward and backward)
        const y = Math.sin(t * 2) * 0.5; // Y-axis (up and down for a "bounce" effect)

        if (carRef.current) {
            carRef.current.position.set(x, y, z);
            carRef.current.rotation.y = t * angularSpeed; // Apply angular speed multiplier
        }
    });

    return (
        <primitive
            ref={carRef}
            object={car.scene}
            scale={[0.1, 0.1, 0.1]} // Increase size of the car
        />
    );
};

export default CarAnimation;
