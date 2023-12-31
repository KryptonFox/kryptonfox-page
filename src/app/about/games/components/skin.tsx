'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import SkinModel from './skinModel';

export default function Skin() {
  // const groupRef = useRef(null);
  // useFrame(() => (groupRef.current.rotation.y += 0.01));
  return (
    <Canvas
      camera={{
        fov: 75,
        position: [0, 0, 2],
        far: 1000,
      }}
    >
      <ambientLight intensity={0.7} />
      <Group />
      <OrbitControls />
    </Canvas>
  );
}

function Group() {
  const groupRef = useRef(null);
  useFrame(() => (groupRef.current.rotation.y += 0.01));
  return (
    <group ref={groupRef}>
      <directionalLight position={[1, 1, 1]} intensity={1.4} />
      <directionalLight position={[-1, 1, -1]} intensity={1.4} />
      <directionalLight position={[0, 0, 1]} intensity={1.4} />
      <SkinModel position={[0, -1, 0]} rotation={[0, 3.4, 0]} />
    </group>
  );
}
