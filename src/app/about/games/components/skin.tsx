'use client'

import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react'
import SkinModel from './skinModel';

export default function Skin() {
  return (
    <Canvas
      camera={{
        fov: 75,
        position: [0, 0, 2],
        far: 1000,
      }}
    >
      <ambientLight intensity={0.1} />
      <directionalLight position={[1, 1, 1]} intensity={2} />
      <directionalLight position={[-1, -1, -1]} intensity={1.6} />
      <directionalLight position={[0, 0, 1]} intensity={1.8} />
      <OrbitControls />
      <SkinModel position={[0, -1, 0]} rotation={[0, 3.4, 0]} />
    </Canvas>
  );
}
