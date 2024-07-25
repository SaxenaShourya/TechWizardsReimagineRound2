import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Arrow from "../../icons/Arrow";
import useDimension from "../../hooks/useDimension";

// features
import feat1 from "/tourbillion/features/feat1.mp4";
import feat2 from "/tourbillion/features/feat2.mp4";
import feat3 from "/tourbillion/features/feat3.mp4";
//banners
import feat1banner from "/tourbillion/features/feat1banner.png";
import feat2banner from "/tourbillion/features/feat2banner.png";
import feat3banner from "/tourbillion/features/feat3banner.png";

const Features = () => {
  const feat1ref = useRef(null);
  const feat2ref = useRef(null);
  const feat3ref = useRef(null);
  const { windowWidth } = useDimension();

  const [isPlaying, setIsPlaying] = useState({
    isPlaying: false,
    idx: null,
  });

  const features = [
    {
      src: feat1,
      ref: feat1ref,
      bannerSrc: feat1banner,
      title: "Inner Luxury",
    },
    {
      src: feat2,
      ref: feat2ref,
      bannerSrc: feat2banner,
      title: "Heart of Power",
    },
    {
      src: feat3,
      ref: feat3ref,
      bannerSrc: feat3banner,
      title: "Grand Entrance",
    },
  ];

  useEffect(() => {
    if (windowWidth < 740) {
      features.forEach(({ ref }, idx) => {
        ref.current.play();
        setIsPlaying({ isPlaying: true, idx: "all" });
      });
    } else {
      features.forEach(({ ref }) => {
        ref.current.pause();
      });
      setIsPlaying({ isPlaying: false, idx: null });
    }
  }, [windowWidth]);

  const handleMouseEnter = (idx) => {
    if (windowWidth >= 740) {
      setIsPlaying({ isPlaying: true, idx });
      features[idx].ref.current.play();
    }
  };

  const handleMouseLeave = (idx) => {
    if (windowWidth >= 740) {
      setIsPlaying({ isPlaying: false, idx: null });
      features[idx].ref.current.pause();
    }
  };

  return (
    <div className="mt-4 w-full flex lg:justify-evenly flex-col justify-center items-center xl:flex-row">
      {features.map(({ src, bannerSrc, ref, title }, idx) => {
        return (
          <div
            className="h-[40rem] w-[95%] md:w-[80%] lg:w-[70%] xl:w-[31%] min-w-[275px] relative overflow-hidden"
            key={idx}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
          >
            <video
              src={src}
              className="w-full h-full object-cover scale-150"
              ref={ref}
              loop
              muted
              data-scroll
              data-scroll-speed="0.2"
            ></video>
            <img
              src={bannerSrc}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 scale-150 ${
                (isPlaying.isPlaying && isPlaying.idx === idx) ||
                isPlaying.idx === "all"
                  ? "opacity-0"
                  : "opacity-100"
              }`}
              alt="Banner"
              data-scroll
              data-scroll-speed="0.2"
            />
            <motion.p
              className={`hidden sm:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full px-5 py-1 bg-light text-dark text-xs font-black uppercase  justify-center items-center gap-x-3 z-[99] ${
                (isPlaying.isPlaying && isPlaying.idx === idx) ||
                isPlaying.idx === "all"
                  ? "mix-blend-difference"
                  : ""
              }`}
              initial="initial"
              animate={
                (isPlaying.isPlaying && isPlaying.idx === idx) ||
                isPlaying.idx === "all"
                  ? "open"
                  : "initial"
              }
              variants={{
                open: { paddingRight: "8px" },
              }}
            >
              <span className="my-4 wordSpace">{title}</span>
              <motion.span
                variants={{
                  initial: { width: "8px", height: "8px" },
                  open: { width: "40px", height: "40px" },
                }}
                className="bg-dark rounded-full w-[8px] h-[8px] flex justify-center items-center"
              >
                <Arrow
                  className={
                    (isPlaying.isPlaying && isPlaying.idx === idx) ||
                    isPlaying.idx === "all"
                      ? "size-[24px]"
                      : "size-0"
                  }
                  stroke="#E6E5DD"
                />
              </motion.span>
            </motion.p>
          </div>
        );
      })}
    </div>
  );
};

export default Features;
