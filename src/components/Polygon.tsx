import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export default function Polygon(props: JSX.IntrinsicElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useFrame(
    (state, delta) => (ref.current.rotation.x += clicked ? 0.01 : -0.01)
  );
  useFrame(
    (state, delta) => (ref.current.rotation.y += clicked ? 0.01 : -0.01)
  );
  return (
    <mesh
      {...props}
      ref={ref}
      scale={2}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <icosahedronGeometry />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}
