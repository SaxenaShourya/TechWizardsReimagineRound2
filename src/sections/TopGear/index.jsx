import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const TopGear = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      const section = sectionRef.current;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "10% 50%",
          end: "85% 50%",
          scrub: 2,
        },
      });
      tl.to(
        "#gear-text-1",
        {
          x: "-170vw",
          scale: 10,
          ease: "power2.inOut",
        },
        "same"
      )
        .to(
          "#gear-text-2",
          {
            x: "210vw",
            scale: 10,
            ease: "power2.inOut",
          },
          "same"
        )
        .to(
          "#gear-img",
          {
            rotate: 0,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "power2.inOut",
          },
          "same"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef]);

  return (
    <div className="h-[150vh] w-full relative" ref={sectionRef}>
      <div className="sticky top-0 h-screen w-full flex justify-center items-center overflow-hidden">
        <div
          className="absolute top-0 h-full w-full rotate-[20deg] bg-dark"
          style={{
            clipPath: "polygon(41.5% 20%, 57.5% 20%, 57.5% 80%, 41.5% 80%)",
          }}
          id="gear-img"
        >
          <img
            alt="gear"
            src="/tourbillion/gear.png"
            className="w-full h-full object-cover"
          />
        </div>
        <h4 className="text-[10vw] font-Pigarnos uppercase font-bold mix-blend-difference text-light/75">
          <span className="inline-block" id="gear-text-1">
            Top
          </span>{" "}
          <span className="inline-block" id="gear-text-2">
            Gear
          </span>
        </h4>
      </div>
    </div>
  );
};

export default TopGear;
