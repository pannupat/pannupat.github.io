import React, { useEffect, useRef } from "react";
import CLOUD2 from "vanta/dist/vanta.clouds2.min";
import * as THREE from "three";

const Smoke: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let vantaEffect: any = null;

    if (vantaRef.current) {
      vantaEffect = CLOUD2({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 30,
        skyColor: 0x000000,
        cloudColor: 0x186223,
        lightColor: 0x8fe596,
        speed: 1.5,

        THREE,
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div ref={vantaRef} style={{ width: "100%", height: "100vh" }} />;
};

export default Smoke;
