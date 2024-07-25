import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Collaborations = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      const section = sectionRef.current;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "5% 50%",
          end: "85% 50%",
          scrub: 1,
        },
      });
      tl.to(
        "#top",
        {
          top: "-52%",
          ease: "power2.inOut",
        },
        "same"
      )
        .to(
          "#bottom",
          {
            bottom: "-50.5%",
            ease: "power2.inOut",
          },
          "same"
        )
        .to(
          "#top-h",
          {
            bottom: "-50%",
            ease: "power2.inOut",
          },
          "same"
        )
        .to(
          "#bottom-h",
          {
            top: "-50%",
            ease: "power2.inOut",
          },
          "same"
        )
        .from(
          "#center h6",
          {
            marginTop: "70%",
          },
          "same"
        );
      images.map(({ id, initialLeft, initialTop }, idx) => {
        return tl.from(
          "#" + id,
          {
            left: initialLeft,
            top: initialTop,
          },
          "same"
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef]);

  const images = [
    {
      src: "/adidas.png",
      top: "34%",
      left: "2.5%",
      id: "collabImg1",
      initialTop: "34%",
      initialLeft: "-10%",
    },
    {
      src: "/gillete.png",
      top: "48%",
      left: "75%",
      id: "collabImg2",
      initialTop: "48%",
      initialLeft: "100%",
    },
    {
      src: "/pods.png",
      top: "10%",
      left: "40%",
      id: "collabImg3",
      initialTop: "-10%",
      initialLeft: "40%",
    },
  ];

  return (
    <section className="h-[300vh] w-full relative" ref={sectionRef}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div
          id="top"
          className="h-[51vh] w-full absolute top-0 overflow-hidden z-10 bg-light"
        >
          <h6
            id="top-h"
            className="absolute bottom-[-1%] left-1/2 -translate-x-1/2 translate-y-1/2 text-[16vw] font-bold font-Absans uppercase overflow-hidden text-dark"
          >
            Collabs
          </h6>
        </div>
        <div
          className="relative h-screen w-full bg-dark overflow-hidden"
          id="center"
        >
          {images.map(({ src, top, left, id }, idx) => {
            return (
              <div
                className="h-[12rem] w-[12rem] sm:h-[14rem] sm:w-[14rem]  md:h-[16rem] md:w-[16rem] lg:h-[22rem] lg:w-[22rem] absolute"
                key={idx}
                style={{ top, left }}
                id={id}
              >
                <img
                  src={"/collaborations" + src}
                  alt="collabs"
                  className="object-cover h-full w-full"
                />
              </div>
            );
          })}
          <h6 className="absolute top-1/2 left-1/2 text-5xl sm:text-6xl md:text-[7vw] font-Branch text-light">
            Brands
          </h6>
        </div>
        <div
          id="bottom"
          className="h-[50vh] w-full absolute bottom-0 overflow-hidden bg-light"
        >
          <h6
            id="bottom-h"
            className="absolute top-[3%] left-1/2 text-[16vw] -translate-x-1/2 -translate-y-1/2 font-bold font-Absans uppercase text-dark"
          >
            Collabs
          </h6>
        </div>
      </div>
    </section>
  );
};

export default Collaborations;
