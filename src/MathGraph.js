import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const MathGraph = () => {
    const lineRef = useRef();

    const createSineWave = () => {
        const points = [];
        for (let i = 0; i <= 100; i++) {
            const x = (i / 100) * 10 - 5; // X 범위: -5에서 5
            const y = Math.sin(x);
            points.push([x, y, 0]);
        }
        return points;
    };

    const sineWavePoints = createSineWave();

    return (
        <Canvas camera={{ position: [0, 5, 10] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} />
            <mesh>
                <line>
                    <bufferGeometry>
                        <bufferAttribute
                            attach="attributes-position"
                            array={new Float32Array(sineWavePoints.flat())}
                            count={sineWavePoints.length}
                            itemSize={3}
                        />
                    </bufferGeometry>
                    <lineBasicMaterial color="blue" />
                </line>
            </mesh>
            <OrbitControls />
        </Canvas>
    );
};

export default MathGraph;
