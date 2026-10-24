"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

function AnimatedStarField() {
  const pointsRef = useRef(null);
  const positions = useMemo(() => {
    const data = new Float32Array(5001);
    random.inSphere(data, { radius: 1.2 });
    for (let i = 0; i < data.length; i++) {
      if (isNaN(data[i])) data[i] = 0;
    }
    return data;
  }, []);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.x -= delta / 10;
    pointsRef.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={pointsRef}
        positions={positions}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.0025}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function RegistrationStars() {
  return (
    <div
      className="registration-stars"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        overflow: "hidden",
        pointerEvents: "none",
        opacity: 0.78,
      }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1.5]}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
        }}
      >
        <Suspense fallback={null}>
          <AnimatedStarField />
        </Suspense>
      </Canvas>
    </div>
  );
}
