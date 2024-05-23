import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import { Mesh } from "three";

import CanvasLoader from "../Loader";

type GLTFResult = {
  nodes: any;
  materials: Record<string, THREE.Material>;
  animations: THREE.AnimationClip[];
  scene: any;
};

const Haloween = ({ isMobile }: { isMobile: boolean }) => {
  const haloweenmodel = useGLTF("/PortFolioWeb/gundam4.glb") as GLTFResult;
  const { animations } = haloweenmodel;

  const mixer = useRef<THREE.AnimationMixer>();
  const meshRef = useRef<Mesh>(null);

  const [currentAnimation, setCurrentAnimation] = useState(0);

  useEffect(() => {
    if (meshRef.current) {
      mixer.current = new THREE.AnimationMixer(meshRef.current);
      const action = mixer.current.clipAction(animations[currentAnimation]);
      action.play();

      const handleNextAnimation = () => {
        setCurrentAnimation((prev) => (prev + 1) % animations.length);
      };

      const timer = setTimeout(
        handleNextAnimation,
        (animations[currentAnimation].duration + 2) * 1000
      );

      return () => {
        action.stop();
        clearTimeout(timer);
      };
    }
  }, [currentAnimation, animations]);

  useFrame((_, delta) => {
    mixer.current?.update(delta);
  });

  return (
    <mesh ref={meshRef}>
      <hemisphereLight intensity={1.25} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={2} />
      <primitive
        object={haloweenmodel.scene}
        scale={isMobile ? 1.0 : 1.8}
        position={isMobile ? [-0, 1.9, -0] : [-1, -0, 0]}
        rotation={[0, 1.3, 0]}
      />
    </mesh>
  );
};

const HalowenCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:2000px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: "1200px", height: "1900px" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Haloween isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default HalowenCanvas;
