import React, { useState, useRef, useEffect } from "react";
import Card from "./Card";

const Features = () => {
  // BentoTilt component for 3D tilt effect
  const BentoTilt = ({ children, className }) => {
    const [transformStyle, setTransformStyle] = useState("");
    const [isLeaving, setIsLeaving] = useState(false);

    const itemRef = useRef();
    const rafRef = useRef(null);

    useEffect(() => {
      return () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    }, []);

    // const handleMouseMove = (e) => {
    //   if (!itemRef.current) return;
    //   setIsLeaving(false);
    //   if (rafRef.current) cancelAnimationFrame(rafRef.current);

    //   rafRef.current = requestAnimationFrame(() => {
    //     const rect = itemRef.current.getBoundingClientRect();
    //     const x = e.clientX - rect.left;
    //     const y = e.clientY - rect.top;
    //     const cx = rect.width / 2;
    //     const cy = rect.height / 2;

    //     const maxTilt = 5; // degrees
    //     const dx = (x - cx) / cx; // -1 .. 1
    //     const dy = (y - cy) / cy;

    //     const rotY = dx * maxTilt; // rotate around Y (left/right)
    //     const rotX = -dy * maxTilt; // rotate around X (up/down), invert for natural feel
    //     const translateZ = 5; // small pop-out

    //     setTransformStyle(
    //       `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(${translateZ}px)`
    //     );
    //   });
    // };

    const handleMouseLeave = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      setIsLeaving(true);
      setTransformStyle(
        `perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)`
      );
    };

    return (
      <div
        className={`${className}`}
        ref={itemRef}
        // onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: transformStyle,
          transition: isLeaving
            ? "transform 600ms cubic-bezier(.2,.9,.2,1)"
            : "none",
          willChange: "transform",
        }}
      >
        {children}
      </div>
    );
  };

  return (
    <section id="projects" className="bg-stone-1000 pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-body text-stone-600 text-lg">
            Exploring the depths of architectural innovation and design.
          </p>
          <p className="max-w-md text-stone-200 opacity-80 text-lg font-body">
            Discover our comprehensive portfolio of projects that showcase
            innovation, sustainability, and timeless design principles.
          </p>
        </div>
        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md border md:h-[65vh]">
          <Card
            src="/videos/feature-1.mp4"
            title={
              <>
                residen<b>t</b>ial
              </>
            }
            description="Creating homes that perfectly balance comfort, functionality, and aesthetic appeal for modern living."
            isComingSoon={false}
          />
        </BentoTilt>
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:!col-span-1 md:row-span-2">
            <Card
              src="/videos/feature-2.mp4"
              title={
                <>
                  commer<b>c</b>ial
                </>
              }
              description="Designing commercial spaces that inspire productivity and reflect your brand's unique identity."
              isComingSoon={false}
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:!col-span-1 md:ms-0">
            <Card
              src="/videos/feature-3.mp4"
              title={
                <>
                  sustain<b>a</b>ble
                </>
              }
              description="Eco-conscious designs that harmonize with nature while maintaining architectural excellence."
              isComingSoon={false}
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 me-14 md:!col-span-1 md:me-0">
            <Card
              src="/videos/feature-4.mp4"
              title={
                <>
                  inter<b>i</b>or
                </>
              }
              description="Interior spaces that seamlessly blend functionality with sophisticated aesthetic sensibilities."
              isComingSoon={false}
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
            <Card
              containerClass="flex size-full flex-col justify-between bg-sage-500 p-5"
              title={"More projects soon!"}
              description="Stay tuned for upcoming architectural projects that will showcase our latest innovations in design and construction."
              isComingSoon={true}
            ></Card>
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
            <Card src="/videos/feature-5.mp4" isComingSoon={false} />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
