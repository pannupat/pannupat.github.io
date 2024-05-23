import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import CELLS from "vanta/dist/vanta.cells.min";

const Cell: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let vantaEffect: any = null;

    if (vantaRef.current) {
      vantaEffect = CELLS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        color2: "#330066",
        color1: 0x000000,
        size: 1.2,
        speed: 1.2,
        THREE,
      });
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div ref={vantaRef} style={{ width: "100%", height: "100vh" }} />;
};

export default Cell;
