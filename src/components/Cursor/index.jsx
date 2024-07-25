import { motion } from "framer-motion";
import useCursor from "../../hooks/useCursor";
import Arrow from "../../icons/Arrow";

const Cursor = () => {
  const { circleVariants, cursorVariants, cursorType } = useCursor();
  return (
    <>
      <motion.div
        style={
          cursorType == "default" || "zoomed" || "arrow"
            ? circleVariants.default
            : circleVariants.hidden
        }
        variants={{ normal: {}, zoom: { scale: "2", borderWidth: "1.5px" } }}
        initial="normal"
        animate={
          cursorType == "zoomed" || cursorType == "arrow" ? "zoom" : "normal"
        }
        className="hidden md:block fixed rounded-full pointer-events-none transition-transform duration-300 mix-blend-difference z-[9999]"
      ></motion.div>
      <motion.div
        style={
          cursorType === "default"
            ? cursorVariants.default
            : cursorVariants.hidden
        }
        className="hidden md:block fixed rounded-full pointer-events-none mix-blend-difference z-[9999]"
      ></motion.div>
      <motion.div
        style={
          cursorType === "arrow"
            ? cursorVariants.default
            : cursorVariants.hidden
        }
        className="hidden md:block fixed rounded-full pointer-events-none mix-blend-difference z-[9999] overflow-hidden"
      >
        <Arrow stroke="#004bfc" />
      </motion.div>
    </>
  );
};

export default Cursor;
