import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, PerspectiveCamera, Environment, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const NeuralNode = ({ initialPosition, color, size }) => {
    const meshRef = useRef();
    const { viewport, mouse } = useThree();

    // Track current and target positions for smooth physics
    const targetPos = useRef(new THREE.Vector3(...initialPosition));
    const currentPos = useRef(new THREE.Vector3(...initialPosition));
    const tempPos = new THREE.Vector3();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();

        // 1. Update the "roaming" target position (gentle floating)
        targetPos.current.x = initialPosition[0] + Math.sin(t * 0.5 + initialPosition[1]) * 0.5;
        targetPos.current.y = initialPosition[1] + Math.cos(t * 0.5 + initialPosition[0]) * 0.5;

        // 2. Calculate mouse repulsion
        // Convert mouse normalized coordinates [-1, 1] to world coordinates approximately
        const mouseX = (mouse.x * viewport.width) / 2;
        const mouseY = (mouse.y * viewport.height) / 2;
        const mousePos = new THREE.Vector3(mouseX, mouseY, 0);

        const dist = currentPos.current.distanceTo(mousePos);
        const repulsionRadius = 2.5;
        const repulsionStrength = 1.2;

        if (dist < repulsionRadius) {
            // Direction away from mouse
            const dir = new THREE.Vector3().subVectors(currentPos.current, mousePos).normalize();
            const force = (1 - dist / repulsionRadius) * repulsionStrength;
            tempPos.copy(targetPos.current).add(dir.multiplyScalar(force));
        } else {
            tempPos.copy(targetPos.current);
        }

        // 3. Smoothly interpolate current position toward the calculated temp position
        currentPos.current.lerp(tempPos, 0.08);
        meshRef.current.position.copy(currentPos.current);

        // 4. Subtle individual pulsing
        const scale = 1 + Math.sin(t * 1.5 + initialPosition[0]) * 0.1;
        meshRef.current.scale.set(scale, scale, scale);
    });

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[size, 16, 16]} />
            <meshStandardMaterial
                emissive={color}
                emissiveIntensity={2}
                color={color}
                transparent
                opacity={0.6}
            />
        </mesh>
    );
};

const NeuralNetwork = ({ count = 60 }) => {
    const groupRef = useRef();

    const nodes = useMemo(() => {
        const n = [];
        for (let i = 0; i < count; i++) {
            n.push({
                initialPosition: [
                    (Math.random() - 0.5) * 12,
                    (Math.random() - 0.5) * 8,
                    (Math.random() - 0.5) * 2 // Keep them relatively flat for better 2D mouse interaction feel
                ],
                color: Math.random() > 0.5 ? "#00E5FF" : "#7000FF",
                size: 0.06 + Math.random() * 0.12
            });
        }
        return n;
    }, [count]);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        const mouse = state.mouse;

        // Subtle overall system tilt based on mouse (keep it very subtle as nodes already react)
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouse.x * 0.05, 0.05);
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -mouse.y * 0.05, 0.05);
    });

    return (
        <group ref={groupRef}>
            {nodes.map((node, i) => (
                <NeuralNode key={i} {...node} />
            ))}

            {/* Background Star-like Particles */}
            <Points limit={500}>
                <PointMaterial transparent vertexColors size={0.02} sizeAttenuation={true} depthWrite={false} />
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={150}
                        array={new Float32Array(450).map(() => (Math.random() - 0.5) * 25)}
                        itemSize={3}
                    />
                </bufferGeometry>
            </Points>
        </group>
    );
};

const HeroVisual = () => {
    return (
        <div className="hero-visual-container">
            <Canvas dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={40} />
                <NeuralNetwork />
                <Environment preset="night" />
                <ambientLight intensity={0.2} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#7000FF" />
                <pointLight position={[-10, -10, -10]} intensity={0.8} color="#00E5FF" />
            </Canvas>
        </div>
    );
};

export default HeroVisual;
