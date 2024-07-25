import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import Button from "../../components/Button";

const Models = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const data = [
    {
      title: "Tourbillion",
      description: "Made for Eternity",
      src: "/tourbillion.mp4",
    },
    {
      title: "Chiron",
      description: "Facets of Performance",
      src: "/chiron.mp4",
    },
    {
      title: "W16 Mistral",
      description: "The Ultimate Roadster",
      src: "/mistral.mp4",
    },
    {
      title: "Bolide",
      description: "Ultimate Power Unleashed",
      src: "/bolide.mp4",
    },
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#models",
          start: "10% 50%",
          end: "100% 50%",
          scrub: 3,
        },
      });

      tl.to("#modelVideo", {
        top: "60%",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="h-full w-full py-[6vh] mt-[10vh] relative" id="models">
      <h3 className="text-xl md:text-[1.6vw] px-[3vw] text-light/70 font-Absans uppercase py-[2vh]">
        Models
      </h3>

      <div className="relative">
        {data.map(({ title, src }, idx) => {
          return (
            <div
              className={`${
                idx === 0 ? "border-t" : ""
              } border-b border-light/40 relative z-[2]`}
              key={idx}
              onMouseEnter={() => {
                setSelectedProject({ idx: idx + 1, src: "/models/" + src });
              }}
              onMouseLeave={() => {
                setSelectedProject(null);
              }}
            >
              <div className="px-[3vw] inline-block text-light">
                <p className="text-[10vw] xl:text-[10vw] font-bold uppercase font-Pigarnos">
                  {title}
                </p>
              </div>
            </div>
          );
        })}
        <div className="hidden md:block absolute h-full w-full top-[3px] z-[2] pointer-events-none">
          {data.map(({ title, description }, idx) => {
            return (
              <div
                key={idx}
                className="bg-main flex justify-between items-center px-[3vw] transition-all duration-500"
                style={{
                  clipPath:
                    selectedProject && selectedProject.idx == idx + 1
                      ? "inset(0 0 0)"
                      : "inset(50% 0 50%",
                }}
              >
                <p className="text-dark z-[1] text-[10vw] xl:text-[10vw] font-bold relative uppercase font-Pigarnos">
                  {title}
                </p>
                <p className="text-dark text-sm xl:text-base font-Absans">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <motion.div
        id="modelVideo"
        variants={{
          initial: { scale: 0.75, opacity: 0 },
          open: { scale: 1, opacity: 1 },
          close: { scale: 0, opacity: 0 },
        }}
        initial="initial"
        animate={selectedProject ? "open" : "close"}
        transition={{
          duration: "0.4",
          ease: [0.42, 0, 0.58, 1],
          delay: selectedProject ? 0 : 0.1,
        }}
        className="hidden md:block absolute top-0 left-[50%] xl:left-[70%] -translate-x-1/2 h-[32rem] w-[25rem] overflow-hidden rounded-2xl z-[9]"
      >
        <video
          src={selectedProject && selectedProject.src}
          className="w-full h-full object-cover"
          loop
          muted
          autoPlay
        ></video>
      </motion.div>

      <div className="w-full flex justify-center my-[8vh]">
        <Button text="More" number="+10" />
      </div>
    </section>
  );
};

export default Models;
