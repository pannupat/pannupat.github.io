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

const Golem_fire = ({ isMobile }: { isMobile: boolean }) => {
  const golemmodel = useGLTF("/GolemDnce2.glb") as GLTFResult;
  const { animations } = golemmodel;

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
        object={golemmodel.scene}
        scale={isMobile ? 0.9 : 0.9}
        position={isMobile ? [1, 0, -0] : [0, -1, 0]}
        rotation={[0, 1.3, 0]}
      />
    </mesh>
  );
};

const GolemCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    console.log("Initial isMobile:", mediaQuery.matches);

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      console.log("Media query changed, isMobile:", event.matches);
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    console.log("isMobile state updated:", isMobile);
  }, [isMobile]);

  const canvasSize = isMobile
    ? { width: "350px", height: "350px" }
    : { width: "600px", height: "600px" };

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="bg-white bg-opacity-35 rounded-full border-8 border-fuchsia-400 border-opacity-50 -mt-3  lg:-mt-0 "
      style={{
        ...canvasSize,
        boxShadow: "2px 3px 3px white, 4px 7px purple, 8px 8px 4px #85df50",
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Golem_fire isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default GolemCanvas;
