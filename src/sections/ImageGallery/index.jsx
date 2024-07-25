import React, { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

const ImageGallery = () => {
  const sectionRef = useRef(null);
  const images = [
    {
      src: "tourbillion.png",
      classes: "w-[25vw] h-[25vh]",
      id: "image1",
    },
    {
      src: "news.png",
      classes: "hidden md:block w-[30vw] h-[25vh] top-[-30vh] left-[2.5vw]",
      id: "image2",
    },
    {
      src: "mesure.png",
      classes: "hidden md:block w-[20vw] h-[65vh] top-[-10vh] left-[-25vw]",
      id: "image3",
    },
    {
      src: "holide.png",
      classes: "hidden md:block w-[20vw] h-[45vh] top-[10vh] left-[25vw]",
      id: "image4",
    },
    {
      src: "shop.png",
      classes: "hidden md:block w-[40vw] h-[25vh] top-[30vh] left-[-15vw]",
      id: "image5",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "5% 50%",
        end: "100% 50%",
        scrub: 2,
      },
    });

    images.map(({ id }, idx) => {
      tl.to(
        "#" + id,
        {
          scale: 4 + idx,
        },
        "same"
      );
    });
  }, [sectionRef]);

  return (
    <div className="h-[450vh] relative w-full" ref={sectionRef}>
      <div className="sticky overflow-hidden top-0 h-[100vh] w-full">
        {images.map(({ src, classes, id }, idx) => {
          return (
            <div
              className="w-full h-full top-0 absolute flex justify-center items-center"
              key={idx}
              id={id}
            >
              <div className={"relative overflow-hidden " + classes}>
                <img
                  src={`/imageGallery/${src}`}
                  alt="image"
                  className={`min-w-[250px] object-cover ${
                    idx == 2 ? "scale-[2.5]" : ""
                  }`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ImageGallery;
