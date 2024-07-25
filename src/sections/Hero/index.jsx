import React, { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import mainHome from "../../assets/mainHome.mp4";
import homeAudio from "../../assets/audio.mp3";
import useCursor from "../../hooks/useCursor";

import Lottie from "react-lottie-player";
import lottieJson from "../../assets/music.json";

const index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const { zoomedCursor, defaultCursor } = useCursor();

  const handleToggle = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };
  return (
    <main className="w-full h-screen bg-dark flex flex-col justify-center items-center relative">
      <video
        src={mainHome}
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover opacity-20"
      ></video>
      <div className="hidden md:block relative w-full h-full">
        <Canvas className="">
          <ambientLight intensity={2} />
          <directionalLight position={[2, 1, 1]} />
          <Cube />
        </Canvas>
        <span className="absolute top-[24%] left-[30%] lg:left-[35%] xl:left-[40%] -translate-x-[50%] -translate-y-[50%] font-Pigarnos text-4xl">
          &copy;
        </span>
      </div>
      <div className="md:hidden relative w-full h-full opacity-80 overflow-hidden flex justify-center items-center">
        <img src="/logo.png" alt="logo" className="w-[50%] object-cover" />
      </div>

      <div
        onClick={handleToggle}
        className="fixed top-[92%] right-[0.3%] z-[98] overflow-hidden -rotate-90 w-[65px]"
        onMouseEnter={zoomedCursor}
        onMouseLeave={defaultCursor}
      >
        <Lottie
          animationData={lottieJson}
          play={isPlaying ? true : false}
          className="overflow-hidden h-full w-full scale-[2.5] mix-blend-difference"
        ></Lottie>
      </div>
      <audio ref={audioRef} loop>
        <source src={homeAudio} type="audio/mpeg" />
        {/* Your browser does not support the audio element. */}
      </audio>
      <h5 className="text-4xl sm:text-5xl lg:text-6xl font-Branch absolute top-[5%] left-[2%] z-[999] inline-block w-fit">
        Bugatti
      </h5>
    </main>
  );
};

export default index;
