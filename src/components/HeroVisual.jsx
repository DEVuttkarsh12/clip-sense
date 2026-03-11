import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const WaterShader = () => {
    const meshRef = useRef();
    const { viewport } = useThree();

    const shaderArgs = useMemo(() => ({
        uniforms: {
            uTime: { value: 0 },
            uColor1: { value: new THREE.Color('#0A0908') },
            uColor2: { value: new THREE.Color('#D4A373') },
            uResolution: { value: new THREE.Vector2(viewport.width, viewport.height) }
        },
        vertexShader: `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform float uTime;
            uniform vec3 uColor1;
            uniform vec3 uColor2;
            uniform vec2 uResolution;
            varying vec2 vUv;

            // Simplex 2D noise
            vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

            float snoise(vec2 v){
                const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                        -0.577350269189626, 0.024390243902439);
                vec2 i  = floor(v + dot(v, C.yy) );
                vec2 x0 = v -   i + dot(i, C.xx);
                vec2 i1;
                i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
                vec4 x12 = x0.xyxy + C.xxzz;
                x12.xy -= i1;
                i = mod(i, 289.0);
                vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
                    + i.x + vec3(0.0, i1.x, 1.0 ));
                vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
                    dot(x12.zw,x12.zw)), 0.0);
                m = m*m ;
                m = m*m ;
                vec3 x = 2.0 * fract(p * C.www) - 1.0;
                vec3 h = abs(x) - 0.5;
                vec3 a0 = x - floor(x + 0.5);
                vec3 g = a0 * vec3(x0.x,x12.xz) + h * vec3(x0.y,x12.yw);
                vec3 l = 1.30 * (m * g);
                return dot(l, vec3(1.0));
            }

            void main() {
                vec2 st = vUv * 2.0 - 1.0;
                float noise = snoise(st * 0.5 + uTime * 0.05);
                
                // Layered noise for "watery" effect
                float finalNoise = snoise(st * 0.8 + noise * 0.5 + uTime * 0.05);
                finalNoise += snoise(st * 1.5 - uTime * 0.03) * 0.2;
                
                // Favor Charcoal (uColor1) more heavily
                float colorMix = clamp(finalNoise * 0.4 + 0.2, 0.0, 1.0);
                vec3 color = mix(uColor1, uColor2, colorMix * 0.3); // Only use 30% of the gold
                
                // Add sharper "mercurial" highlights purely based on noise gradient
                float highlight = smoothstep(0.48, 0.5, finalNoise);
                color += uColor2 * highlight * 0.4;

                gl_FragColor = vec4(color, 1.0);
            }
        `
    }), [viewport]);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.material.uniforms.uTime.value = state.clock.getElapsedTime();
        }
    });

    return (
        <mesh ref={meshRef}>
            <planeGeometry args={[viewport.width, viewport.height]} />
            <shaderMaterial
                args={[shaderArgs]}
                transparent={true}
            />
        </mesh>
    );
};

const HeroVisual = () => {
    return (
        <div className="hero-visual-container">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <WaterShader />
            </Canvas>
        </div>
    );
};

export default HeroVisual;
