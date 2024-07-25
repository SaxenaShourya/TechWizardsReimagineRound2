import React from "react";
import { motion } from "framer-motion";
import useCursor from "../../hooks/useCursor";
import Arrow from "../../icons/Arrow";

const Footer = () => {
  const { zoomedCursor, defaultCursor } = useCursor();
  const Links = [
    "Bugatti Lifestyle",
    "Bugatti Heritage",
    "Models",
    "Customization",
    "Ownership",
  ];

  const Policies = [
    "News & Zeitgeist",
    "Store",
    "Legal Notice",
    "Cookie Settings",
    "UK Modern Slavery Act",
  ];

  return (
    <footer
      className="relative h-[800px] bg-light/90 mt-[10vh] md:mt-[20vh] z-[999]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[800px] sticky top-[calc(100vh-800px)] flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center gap-24 mt-[20vh] mx-[3vw]">
            <div className="flex flex-col">
              <motion.p
                className="text-dark uppercase text-base md:text-xl border-b border-dark mb-6 flex justify-between relative hover:text-light p-1"
                initial="initial"
                whileHover="open"
              >
                <motion.span
                  variants={{ initial: { width: 0 }, open: { width: "100%" } }}
                  className="h-full w-0 bg-dark absolute top-0 left-0  z-[-1]"
                ></motion.span>
                Links
                <Arrow className="p-1" stroke="#060606" />
              </motion.p>
              {Links.map((text, idx) => {
                return (
                  <span
                    className="text-dark/60 text-xl md:text-2xl font-Absans"
                    key={idx}
                    onMouseEnter={zoomedCursor}
                    onMouseLeave={defaultCursor}
                  >
                    {text}
                  </span>
                );
              })}
            </div>
            <div className="flex flex-col">
              <motion.p
                className="text-dark uppercase text-base md:text-xl border-b border-dark mb-6 flex justify-between relative hover:text-light p-1"
                initial="initial"
                whileHover="open"
              >
                <motion.span
                  variants={{ initial: { width: 0 }, open: { width: "100%" } }}
                  className="h-full w-0 bg-dark absolute top-0 left-0 z-[-1]"
                ></motion.span>
                Policies
                <Arrow className="p-1" stroke="#060606" />
              </motion.p>
              {Policies.map((text, idx) => {
                return (
                  <span
                    className="text-dark/60 text-xl md:text-2xl font-Absans"
                    key={idx}
                    onMouseEnter={zoomedCursor}
                    onMouseLeave={defaultCursor}
                  >
                    {text}
                  </span>
                );
              })}
            </div>
          </div>
          <h2 className="text-[17vw] text-dark text-center border-t border-dark leading-[16vw]">
            <motion.span
              className="lowercase inline-block overflow-hidden"
              initial="initial"
              whileInView="open"
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                staggerChildren: 0.1,
              }}
            >
              {"Bugatti".split("").map((char, idx) => {
                return (
                  <motion.span
                    key={idx}
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
                      delay: 0.1 * idx,
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                );
              })}
            </motion.span>
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
