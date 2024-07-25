import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import { Nav, Cursor } from "./components";
import AllSections from "./components/AllSections";

const App = () => {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  return (
    <>
      <Cursor />
      <Nav />
      <AllSections />
    </>
  );
};

export default App;
