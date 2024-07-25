import React, { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

const Lifestyle = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let ctx = gsap.context(() => {
      const section = sectionRef.current;
      const el = textRef.current;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "0% 50%",
          end: "100% 50%",
          scrub: 2,
        },
      });
      tl.to(
        el,
        {
          x: "-255%",
          color: "#004bfc",
          ease: "power3.inOut",
        },
        "same"
      );
      tl.to(
        ".lifestyleImages",
        {
          rotate: "10",
          scale: "1.1",
          x: "-380vw",
          ease: "power3.inOut",
        },
        "same"
      );
    }, sectionRef);
    return () => ctx.revert();
  }, [sectionRef]);

  const images = [
    {
      left: "95%",
      top: "60%",
    },
    {
      left: "195%",
      top: "15%",
    },
    {
      left: "260%",
      top: "70%",
    },
    {
      left: "355%",
      top: "20%",
    },
  ];

  return (
    <section className="h-[500vh] w-full relative" ref={sectionRef}>
      <div className="sticky overflow-hidden top-0 h-[100vh] w-full">
        <h3
          className="text-[35vw] leading-[100vh] whitespace-nowrap font-Branch px-[76vw]"
          ref={textRef}
        >
          Living The Bugatti Life.
        </h3>
        <div className="">
          {" "}
          {images.map(({ left, top }, idx) => {
            return (
              <div
                className="absolute w-[13rem] sm:w-[16rem] md:w-[20rem] lg:w-[24rem] h-[10rem] sm:h-[12rem] md:h-[14rem] lg:h-[16rem] overflow-hidden lifestyleImages"
                style={{ left, top }}
                key={idx}
              >
                <img
                  src={`/lifestyle/${idx + 1}.png`}
                  alt=""
                  className="absolute w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Lifestyle;
