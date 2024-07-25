import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

import img1 from "/tourbillion/imgs/1.png";
import img2 from "/tourbillion/imgs/2.png";

const Comfort = () => {
  const images = [
    {
      id: "img1",
      src: img1,
      top: "50%",
      left: "0%",
      width: "61vw",
      height: "43vh",
      initialClipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
      finalClipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    },
    {
      id: "img2",
      src: img2,
      top: "5%",
      left: "75%",
      width: "15vw",
      height: "68vh",
      initialClipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      finalClipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    },
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#pinned",
          start: "50% 50%",
          endTrigger: "#spacer",
          end: "90% 50%",
          scrub: 3,
          pin: true,
          onUpdate: (self) => {
            gsap.to("#star", {
              rotate: 360 * self.progress,
              scale: 1 + 120 * self.progress,
            });
            gsap.to("#spacer", {
              backgroundColor: self.progress === 1 ? "#E6E5DD" : "#060606",
              duration: 0,
            });
          },
        },
      });
      tl.to("#star", {
        right: "50%",
        top: "50%",
        color: "#E6E5DD",
        borderColor: "#E6E5DD",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="h-full min-h-screen w-full relative mt-[20vh]">
        {images.map(
          (
            {
              id,
              src,
              top,
              left,
              initialClipPath,
              finalClipPath,
              height,
              width,
            },
            idx
          ) => {
            return (
              <motion.div
                initial="initial"
                whileInView="open"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 1 * (idx + 1) }}
                key={idx}
              >
                <motion.div
                  id={id}
                  className="absolute top-0"
                  variants={{
                    initial: {
                      clipPath: initialClipPath,
                      top,
                      left,
                      height,
                      width,
                    },
                    open: {
                      clipPath: finalClipPath,
                    },
                  }}
                  transition={{
                    duration: 1,
                    ease: [0.42, 0, 0.58, 1],
                    delay: 1 * (idx + 1),
                  }}
                >
                  <img
                    src={src}
                    alt="img"
                    className="hidden md:block w-full h-full object-cover mix-blend-difference"
                    data-scroll
                    data-scroll-speed="0.15"
                  />
                </motion.div>
              </motion.div>
            );
          }
        )}
        <div
          className="absolute w-[100vw] h-screen overflow-hidden"
          id="pinned"
        >
          <div
            className="absolute top-0 right-2 rounded-full border border-main text-main -translate-x-[50%] w-fit  overflow-hidden"
            id="star"
          >
            <h4 className="text-[12vw] leading-[6vw] translate-y-[12.5%] -translate-x-[0.2%]">
              *
            </h4>
          </div>
        </div>
        <motion.h4
          className="font-Absans text-[16vw] font-black leading-[13vw] mix-blend-difference"
          data-scroll
          data-scroll-speed="0.1"
        >
          {["Smooth", "Luxurious", "Exprience"].map((text, idx) => {
            return (
              <div key={idx}>
                <motion.span
                  className="lowercase inline-block overflow-hidden"
                  style={{
                    marginLeft: idx === 1 ? "12vw" : idx === 2 ? "21vw" : "",
                  }}
                  key={idx}
                  initial="initial"
                  whileInView="open"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    staggerChildren: 0.1,
                    delayChildren: 0.1 * idx,
                  }}
                >
                  {text.split("").map((char, i) => {
                    return (
                      <motion.span
                        key={i}
                        variants={{
                          initial: {
                            y: "200%",
                          },
                          open: {
                            y: 0,
                          },
                        }}
                        transition={{
                          duration: 1,
                          ease: [0.6, 0.01, -0.05, 0.95],
                        }}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    );
                  })}
                </motion.span>
                <br />
              </div>
            );
          })}
        </motion.h4>
      </section>
      <div id="spacer" className="h-[250vh] w-full overflow-hidden"></div>
    </>
  );
};

export default Comfort;
