import React, { useEffect } from "react";
import { useMotionValue, useSpring } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  setCursorDefault,
  hideCursor as setHideCursor,
  setCursorZoomed,
  setCursorArrow,
} from "../redux/cursorSlice";

const useCursor = () => {
  const dispatch = useDispatch();
  const cursorType = useSelector((state) => state.cursor.type);

  const circleSize =
    cursorType == "default" || cursorType == "zoomed" || cursorType == "arrow"
      ? 26
      : 0;
  const cursorSize =
    cursorType == "default" ? 5 : cursorType == "arrow" ? 32 : 0;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 25, stiffness: 120, mass: 0.25 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };
  const smoothOptions2 = { damping: 30, stiffness: 250, mass: 0.15 };
  const smoothMouse2 = {
    x: useSpring(mouse.x, smoothOptions2),
    y: useSpring(mouse.y, smoothOptions2),
  };

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  const circleVariants = {
    default: {
      left: smoothMouse.x,
      top: smoothMouse.y,
      height: circleSize,
      width: circleSize,
      borderColor: "#004bfc",
      borderWidth: "1px",
      translateX: "-50%",
      translateY: "-50%",
    },
    hidden: {
      height: cursorSize,
      width: cursorSize,
      left: smoothMouse.x,
      top: smoothMouse.y,
    },
  };
  const cursorVariants = {
    default: {
      left: smoothMouse2.x,
      top: smoothMouse2.y,
      height: cursorSize,
      width: cursorSize,
      backgroundColor: cursorType == "default" ? "#004bfc" : "",
      translateX: "-50%",
      translateY: "-50%",
    },
    hidden: {
      height: cursorSize,
      width: cursorSize,
      left: smoothMouse2.x,
      top: smoothMouse2.y,
    },
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  const hideCursor = () => dispatch(setHideCursor());
  const zoomedCursor = () => dispatch(setCursorZoomed());
  const defaultCursor = () => dispatch(setCursorDefault());
  const arrowCursor = () => dispatch(setCursorArrow());

  return {
    circleVariants,
    cursorVariants,
    defaultCursor,
    hideCursor,
    zoomedCursor,
    cursorType,
    arrowCursor,
  };
};

export default useCursor;
