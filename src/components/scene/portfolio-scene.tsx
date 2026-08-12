"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  Line,
  PerspectiveCamera,
} from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

type Node = {
  position: [number, number, number];
  scale: number;
};

function useMousePosition() {
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return mouse;
}

function NetworkCore() {
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useMousePosition();

  const nodes = useMemo<Node[]>(
    () => [
      { position: [0, 0, 0], scale: 1.4 },
      { position: [-1.35, 0.75, 0.15], scale: 0.7 },
      { position: [1.4, 0.65, -0.1], scale: 0.75 },
      { position: [-1.1, -0.85, 0.2], scale: 0.6 },
      { position: [1.15, -0.9, 0.15], scale: 0.65 },
      { position: [0.1, 1.55, -0.2], scale: 0.5 },
      { position: [0.15, -1.55, 0.1], scale: 0.5 },
    ],
    [],
  );

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const targetRotationY = mouse.current.x * 0.28;
    const targetRotationX = mouse.current.y * 0.16;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotationY + state.clock.elapsedTime * 0.08,
      0.025,
    );

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotationX,
      0.025,
    );

    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      mouse.current.x * 0.12,
      0.02,
    );

    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      mouse.current.y * 0.08,
      0.02,
    );

    groupRef.current.position.z +=
      Math.sin(state.clock.elapsedTime * 0.7) * delta * 0.006;
  });

  return (
    <group ref={groupRef}>
      {/* Central automation core */}
      <mesh>
        <icosahedronGeometry args={[0.38, 2]} />

        <meshStandardMaterial
          color="#67e8f9"
          emissive="#0891b2"
          emissiveIntensity={2.2}
          roughness={0.25}
          metalness={0.7}
        />
      </mesh>

      {/* Network nodes */}
      {nodes.slice(1).map((node, index) => (
        <mesh
          key={index}
          position={node.position}
          scale={node.scale}
        >
          <sphereGeometry args={[0.09, 16, 16]} />

          <meshStandardMaterial
            color={
              index % 2 === 0
                ? "#67e8f9"
                : "#a78bfa"
            }
            emissive={
              index % 2 === 0
                ? "#0891b2"
                : "#7c3aed"
            }
            emissiveIntensity={2}
            roughness={0.3}
            metalness={0.5}
          />
        </mesh>
      ))}

      {/* Primary network connections */}
      <Line
        points={[
          nodes[0].position,
          nodes[1].position,
          nodes[2].position,
          nodes[0].position,
          nodes[3].position,
          nodes[4].position,
          nodes[0].position,
          nodes[5].position,
          nodes[0].position,
          nodes[6].position,
        ]}
        color="#22d3ee"
        transparent
        opacity={0.35}
        lineWidth={0.7}
      />

      {/* Secondary connections */}
      <Line
        points={[
          nodes[1].position,
          nodes[5].position,
          nodes[2].position,
        ]}
        color="#a78bfa"
        transparent
        opacity={0.18}
        lineWidth={0.5}
      />

      {/* Orbital rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.72, 0.006, 8, 96]} />

        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.28}
        />
      </mesh>

      <mesh rotation={[0.65, 0.3, 0.4]}>
        <torusGeometry args={[1.2, 0.004, 8, 96]} />

        <meshBasicMaterial
          color="#a78bfa"
          transparent
          opacity={0.18}
        />
      </mesh>

      <mesh rotation={[1.1, -0.4, 0.2]}>
        <torusGeometry args={[1.65, 0.003, 8, 96]} />

        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.1}
        />
      </mesh>
    </group>
  );
}

function Atmosphere() {
  return (
    <>
      <mesh position={[0, 0, -1.8]}>
        <sphereGeometry args={[2.8, 32, 32]} />

        <meshBasicMaterial
          color="#0e7490"
          transparent
          opacity={0.035}
        />
      </mesh>

      <points>
        <sphereGeometry args={[3.4, 32, 32]} />

        <pointsMaterial
          color="#67e8f9"
          size={0.018}
          transparent
          opacity={0.35}
          sizeAttenuation
        />
      </points>
    </>
  );
}

function SceneContents() {
  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 6]}
        fov={42}
      />

      <ambientLight intensity={0.35} />

      <pointLight
        position={[2.5, 3, 4]}
        intensity={18}
        distance={8}
        color="#22d3ee"
      />

      <pointLight
        position={[-3, -2, 2]}
        intensity={10}
        distance={7}
        color="#8b5cf6"
      />

      <Float
        speed={1.2}
        rotationIntensity={0.18}
        floatIntensity={0.25}
      >
        <NetworkCore />
      </Float>

      <Atmosphere />
    </>
  );
}

export function PortfolioScene() {
  return (
    <div
      className="h-full w-full"
      aria-hidden="true"
    >
      <Canvas
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <SceneContents />
      </Canvas>
    </div>
  );
}
