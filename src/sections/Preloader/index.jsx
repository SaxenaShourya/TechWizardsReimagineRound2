import React, { useState } from "react";
import { motion } from "framer-motion";

const Preloader = () => {
  const [onClick, setOnClick] = useState(false);
  return (
    <motion.section
      className="fixed top-0 left-0 h-screen w-full bg-dark z-[9998] flex flex-col justify-center items-center"
      onClick={() => setOnClick(true)}
      animate={onClick ? "tap" : ""}
      variants={{
        tap: {
          opacity: 0,
          y: "-100%",
          display: "none",
        },
      }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
    >
      <motion.h1
        initial="initial"
        animate="open"
        viewport={{ once: true, amount: 0.5 }}
        className="text-[10vw] md:text-[8vw] font-Branch text-dark mainText relative overflow-hidden"
      >
        Bugatti Automobiles
        <motion.span
          variants={{
            initial: { width: "0%" },
            open: { width: "100%" },
          }}
          transition={{ duration: 1.4, ease: "linear", delay: 0.5 }}
          className="absolute top-0 left-0 text-[10vw] md:text-[8vw] overflow-hidden whitespace-nowrap text-white loaderOpener"
        >
          Bugatti Automobiles
        </motion.span>
      </motion.h1>

      <span className="px-0 sm:px-4 md:px-6 py-2 md:py-3 bg-light text-dark rounded-md md:rounded-xl inline-block text-xs lg:text-base text-center">
        Click anywhere{" "}
        <img
          src="https://uploads-ssl.webflow.com/5f2429f172d117fcee10e819/61001a3509319b6ae39e156b_arrow-long.svg"
          alt="arrow"
          className="inline-block mx-4 w-[10%] lg:w-[25%]"
        />{" "}
        to Continue
      </span>
    </motion.section>
  );
};

export default Preloader;
