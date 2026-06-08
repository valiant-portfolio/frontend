import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

// Pick scale/position for the model so it never sits behind the hero text.
// On narrower (laptop) widths we shrink it and drop it lower / further back.
const getLayout = (width) => {
  if (width <= 500) return { hidden: true };
  if (width <= 1280)
    return { scale: 0.6, position: [0, -3.6, -2.4] };
  return { scale: 0.75, position: [0, -3.25, -1.5] };
};

const Computers = ({ layout }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={layout.scale}
        position={layout.position}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [layout, setLayout] = useState(() => getLayout(window.innerWidth));

  useEffect(() => {
    const handleResize = () => setLayout(getLayout(window.innerWidth));

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (layout.hidden) return null; // Hide on mobile screens

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers layout={layout} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
