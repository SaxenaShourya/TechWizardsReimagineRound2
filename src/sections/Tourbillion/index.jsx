import React, { useRef, useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import TextAnimate from "../../components/TextAnimate";
import Lottie from "react-lottie-player";
import { motion } from "framer-motion";
import useCursor from "../../hooks/useCursor";

const Tourbillion = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const { defaultCursor, arrowCursor } = useCursor();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      const section = sectionRef.current;
      const el = videoRef.current;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "50% 50%",
          end: "100% 50%",
          scrub: 3,
          pin: true,
        },
      });
      tl.to(el, {
        width: "98%",
        height: "100%",
        ease: [0.76, 0, 0.24, 1],
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef]);

  return (
    <>
      <section
        ref={sectionRef}
        className="h-screen w-full flex justify-center items-center overflow-hidden mt-8"
      >
        <div
          className="w-[30%] h-[95%] relative overflow-hidden"
          ref={videoRef}
          onMouseEnter={arrowCursor}
          onMouseLeave={defaultCursor}
        >
          <video
            src="/tourbillion/vid.mp4"
            className="w-full h-full object-cover opacity-70"
            autoPlay
            loop
            muted
          ></video>
        </div>
      </section>
      <section className="h-full w-full ">
        <div
          className="flex flex-col justify-center items-center relative mt-[10vh]"
          data-scroll
          data-scroll-speed="0.1"
        >
          <TextAnimate
            text="Tourbillion"
            className="font-Pigarnos font-black text-light/80"
            size={9}
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 3.5, duration: 1.2 }}
            className="hidden sm:block absolute size-[7vw] md:size-[5vw] left-[2%] md:left-[15%] top-[10%]"
            viewport={{ once: true, amount: 0.5 }}
          >
            <Lottie
              path="https://assets.awwwards.com/assets/redesign/images/lottie/laurel-wreath.json"
              play
              loop
              className="size-full"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Tourbillion;
