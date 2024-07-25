import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useDimension from "../../hooks/useDimension";

const Text = ({ text, className, size }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const { windowWidth } = useDimension();

  useEffect(() => {
    let interval = null;

    if (isAnimating && !animationCompleted) {
      let iteration = -1;

      interval = setInterval(() => {
        setDisplayText((prev) =>
          prev
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }

              return letters[Math.floor(Math.random() * 26)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
          setIsAnimating(false);
          setAnimationCompleted(true);
        }

        iteration += 1 / 3;
      }, 45);
    }

    return () => clearInterval(interval);
  }, [isAnimating]);

  const responsiveSize = windowWidth < 740 ? size + 3 : size;

  return (
    <motion.p
      onViewportEnter={() => setIsAnimating(true)}
      className={
        "overflow-hidden whitespace-nowrap text-light uppercase tracking-wide " +
        className
      }
      initial={{
        fontSize: responsiveSize + "vw",
        opacity: 0.6,
        filter: "blur(10px)",
      }}
      whileInView={{
        fontSize: responsiveSize - 1 + "vw",
        opacity: 1,
        filter: "blur(0px)",
      }}
      transition={{ duration: 1.7, ease: "easeInOut", delay: 1.5 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {displayText}
    </motion.p>
  );
};

export default Text;
