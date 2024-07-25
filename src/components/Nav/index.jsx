import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useCursor from "../../hooks/useCursor";
import logo from "/logo.svg";
import { Link } from "react-router-dom";

const SocialMedias = () => {
  const { zoomedCursor, defaultCursor } = useCursor();
  return (
    <div className="flex max-[640px]:h-full items-center sm:justify-center md:gap-x-12 lg:w-[70%] sm:mt-[20vh]">
      <div className="hidden sm:flex flex-col gap-y-[10vh]">
        <img src={logo} alt="logo" className="w-[65%] md:w-[80%] rounded-md" />
        <menu className="flex flex-col">
          {[
            "Facebook",
            "Instagram",
            "Youtube",
            "LinkedIn",
            "Twitter",
            "Pinterest",
          ].map((item, idx) => {
            return (
              <Link
                to="/"
                className="inline-block font-Absans font-sm"
                onMouseEnter={zoomedCursor}
                onMouseLeave={defaultCursor}
                key={idx}
              >
                {item}
              </Link>
            );
          })}
        </menu>
      </div>
      <motion.menu
        className="font-Absans font-bold text-4xl sm:text-6xl lg:text-7xl uppercase overflow-hidden flex flex-col max-[640px]:items-center max-[640px]:gap-y-4"
        initial="initial"
        animate="open"
        exit="exit"
        transition={{ delayChildren: 0.2, staggerChildren: 0.1 }}
      >
        {["Home", "About", "Models", "Tourbillion", "Lifestyle"].map(
          (text, idx) => {
            return (
              <div
                className="overflow-hidden relative inline-block w-fit"
                key={idx}
                onMouseEnter={zoomedCursor}
                onMouseLeave={defaultCursor}
              >
                <motion.li
                  variants={{
                    initial: { y: "100%" },
                    open: { y: 0 },
                    exit: { y: "100%" },
                  }}
                  transition={{
                    ease: [0.76, 0, 0.24, 1],
                    duration: 0.95,
                  }}
                >
                  <Link to="/">{text}</Link>
                </motion.li>
              </div>
            );
          }
        )}
      </motion.menu>
    </div>
  );
};
const Footer = () => {
  return (
    <div className="w-full flex justify-between items-center overflow-hidden">
      <motion.menu
        initial="initial"
        animate="open"
        exit="exit"
        className="hidden sm:flex gap-5"
        transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
      >
        {["Contact", "Privacy Policy", "Careers", "Terms & Conditions"].map(
          (text, idx) => {
            return (
              <motion.li
                className="font-Absans overflow-hidden text-xs lg:text-sm"
                variants={{
                  initial: { y: "100%" },
                  open: { y: "0" },
                  exit: { y: "100%" },
                }}
                transition={{
                  ease: "backInOut",
                  duration: 0.45,
                }}
                key={idx}
              >
                <Link to="/">{text}</Link>
              </motion.li>
            );
          }
        )}
      </motion.menu>
      <p className="font-Absans uppercase text-xs lg:text-sm">
        2024 <span className="text-main">BUGATTI Automobiles</span>
      </p>
    </div>
  );
};
const Navigations = () => {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.05, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
      className="h-screen w-full bg-dark text-light-2 fixed top-0 right-0 z-[99] flex flex-col justify-between items-center px-[2vw] py-[3vw]"
    >
      <SocialMedias />
      <Footer />
    </motion.nav>
  );
};

const Nav = () => {
  const [isActive, setIsActive] = useState(false);
  const { defaultCursor, zoomedCursor } = useCursor();
  return (
    <>
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        onMouseEnter={zoomedCursor}
        onMouseLeave={defaultCursor}
        className={`fixed right-4 top-4 size-[5vw] min-w-[75px] min-h-[75px] z-[999] flex justify-center items-center overflow-hidden mix-blend-difference`}
      >
        <div className={`burger ${isActive ? "burgerActive" : ""}`} />
      </div>
      <AnimatePresence mode="wait">
        {isActive && <Navigations />}
      </AnimatePresence>
    </>
  );
};

export default Nav;
