"use client";

import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Sparkles } from "@react-three/drei";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

function CoreObject() {
  const group = useRef<THREE.Group>(null);
  const mesh = useRef<THREE.Mesh>(null);

  const { pointer } = useThree();
  const scrollProgress = useScrollProgress();
  const reducedMotion = useReducedMotion();

  const materialProps = useMemo(
    () => ({
      thickness: 0.45,
      roughness: 0.08,
      transmission: 0.95,
      ior: 1.4,
      chromaticAberration: 0.035,
      anisotropy: 0.15,
      distortion: 0.18,
      distortionScale: 0.25,
      temporalDistortion: 0.08,
      color: "#67e8f9",
    }),
    []
  );

  useFrame((state, delta) => {
    if (!group.current || !mesh.current) {
      return;
    }

    const targetX = reducedMotion ? 0 : pointer.y * 0.12;
    const targetY = reducedMotion ? 0 : pointer.x * 0.18;

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      targetX,
      1 - Math.pow(0.001, delta)
    );

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      targetY,
      1 - Math.pow(0.001, delta)
    );

    const scrollRotation = reducedMotion ? 0 : scrollProgress * Math.PI * 0.65;

    mesh.current.rotation.z = THREE.MathUtils.lerp(
      mesh.current.rotation.z,
      scrollRotation,
      1 - Math.pow(0.01, delta)
    );

    if (!reducedMotion) {
      mesh.current.rotation.x += delta * 0.08;
      mesh.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={group}>
      <Float
        speed={reducedMotion ? 0 : 1.1}
        rotationIntensity={reducedMotion ? 0 : 0.12}
        floatIntensity={reducedMotion ? 0 : 0.18}
      >
        <mesh ref={mesh} scale={1.65}>
          <icosahedronGeometry args={[1, 32]} />

          <MeshTransmissionMaterial {...materialProps} />
        </mesh>

        <mesh scale={2.05}>
          <icosahedronGeometry args={[1, 2]} />

          <meshBasicMaterial
            color="#22d3ee"
            transparent
            opacity={0.025}
            wireframe
          />
        </mesh>
      </Float>
    </group>
  );
}

function SceneContents() {
  const reducedMotion = useReducedMotion();

  return (
    <>
      <ambientLight intensity={0.35} />

      <pointLight
        position={[3, 3, 4]}
        intensity={12}
        color="#22d3ee"
      />

      <pointLight
        position={[-4, -2, 2]}
        intensity={7}
        color="#8b5cf6"
      />

      <CoreObject />

      {!reducedMotion && (
        <Sparkles
          count={45}
          scale={7}
          size={1.2}
          speed={0.25}
          opacity={0.35}
          color="#67e8f9"
        />
      )}
    </>
  );
}

export function PortfolioScene() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="h-full w-full">
      <Canvas
        dpr={[1, 1.5]}
        camera={{
          position: [0, 0, 5.5],
          fov: 42,
          near: 0.1,
          far: 100,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
        frameloop={reducedMotion ? "demand" : "always"}
        onCreated={({ gl }) => {
          gl.setClearColor("#000000", 0);
        }}
      >
        <SceneContents />
      </Canvas>
    </div>
  );
}
