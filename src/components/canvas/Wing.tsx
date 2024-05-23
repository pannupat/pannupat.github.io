import React, { useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from "three";

const Wing: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let vantaEffect: any = null;

    if (vantaRef.current) {
      vantaEffect = BIRDS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 10.0,
        scaleMobile: 1.0,
        color1: 0xc64bd9,
        color2: 0x3f43ae,
        birdSize: 0.5,
        wingSpan: 18.0,
        speedLimit: 3.0,
        backgroundAlpha: 0.0,
        THREE,
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div ref={vantaRef} style={{ width: "100%", height: "100vh" }} />;
};

export default Wing;
