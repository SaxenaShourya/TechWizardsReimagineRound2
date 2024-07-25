import React, { useEffect, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useMotionValue, useSpring } from "framer-motion";
import { motion } from "framer-motion-3d";

const Cube = () => {
  const cube = useRef(null);
  const options = { damping: 20 };
  const mouse = {
    x: useSpring(useMotionValue(0), options),
    y: useSpring(useMotionValue(0), options),
  };
  const manageMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;
    const multiplier = 0.5;
    const x = (-0.5 + clientX / innerWidth) * multiplier;
    const y = (-0.5 + clientY / innerHeight) * multiplier;
    mouse.x.set(x);
    mouse.y.set(y);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);

    return () => window.removeEventListener("mousemove", manageMouseMove);
  }, []);

  const texture_1 = useLoader(TextureLoader, "/logo.png");

  return (
    <motion.mesh ref={cube} rotation-x={mouse.y} rotation-y={mouse.x}>
      <boxGeometry args={[2.75, 2.5, 2.5]} />
      <meshStandardMaterial
        map={texture_1}
        attach="material-4"
        transparent={true}
        opacity={1}
      />
      <meshStandardMaterial transparent opacity={0.5} attach="material-0" />
      <meshStandardMaterial transparent opacity={0.5} attach="material-1" />
      <meshStandardMaterial transparent opacity={0.5} attach="material-2" />
      <meshStandardMaterial transparent opacity={0.5} attach="material-3" />
      <meshStandardMaterial transparent opacity={0.5} attach="material-5" />
    </motion.mesh>
  );
};

export default Cube;
