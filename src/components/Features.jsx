import React, { useState, useRef, useEffect } from "react";
import BentoCard from "./BentoCard";
import { TiLocationArrow } from "react-icons/ti";

const Features = () => {
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

    const handleMouseMove = (e) => {
      if (!itemRef.current) return;
      setIsLeaving(false);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      rafRef.current = requestAnimationFrame(() => {
        const rect = itemRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;

        const maxTilt = 5; // degrees
        const dx = (x - cx) / cx; // -1 .. 1
        const dy = (y - cy) / cy;

        const rotY = dx * maxTilt; // rotate around Y (left/right)
        const rotX = -dy * maxTilt; // rotate around X (up/down), invert for natural feel
        const translateZ = 5; // small pop-out

        setTransformStyle(
          `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(${translateZ}px)`
        );
      });
    };

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
        onMouseMove={handleMouseMove}
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
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-blue-50 text-lg">
            Into the depths of innovation and creativity.
          </p>
          <p className="max-w-md text-blue-50 opacity-50 text-lg font-circular-web">
            Immerse yourself in a rich and ever-expanding universe of features
            designed to enhance your experience. From interactive elements to
            dynamic content, each feature is crafted to engage and inspire.
          </p>
        </div>
        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md border md:h-[65vh]">
          <BentoCard
            src="/videos/feature-1.mp4"
            title={
              <>
                radia<b>n</b>t
              </>
            }
            description="An immersive experience that brings your content to life with stunning visuals and engaging interactions."
            isComingSoon={true}
          />
        </BentoTilt>
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:!col-span-1 md:row-span-2">
            <BentoCard
              src="/videos/feature-2.mp4"
              title={
                <>
                  zig<b>m</b>a
                </>
              }
              description="An immersive experience that brings your content to life with stunning visuals and engaging interactions."
              isComingSoon={true}
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:!col-span-1 md:ms-0">
            <BentoCard
              src="/videos/feature-3.mp4"
              title={
                <>
                  n<b>e</b>xus
                </>
              }
              description="An immersive experience that brings your content to life with stunning visuals and engaging interactions."
              isComingSoon={true}
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 me-14 md:!col-span-1 md:me-0">
            <BentoCard
              src="/videos/feature-4.mp4"
              title={
                <>
                  az<b>u</b>le
                </>
              }
              description="An immersive experience that brings your content to life with stunning visuals and engaging interactions."
              isComingSoon={true}
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-600 p-5">
              <h1 className="bento-title special-font max-w-64 text-black">
                M<b>o</b>re co<b>m</b>ing so<b>o</b>n!
              </h1>
              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
            <BentoCard src="/videos/feature-5.mp4" isComingSoon={false} />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
