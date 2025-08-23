import { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import RoundedCorners from "./RoundedCorners";
import Button from "./Button";
import { gsap } from "gsap";

const Story = () => {
  const frameRef = useRef(null);

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (!element) return;

    gsap.to(element, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.3,
      ease: "power1.out",
    });
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const deltaX = x - centerX;
    const deltaY = y - centerY;

    const rotateX = (deltaY / centerY) * -10; // 10 degrees max tilt
    const rotateY = (deltaX / centerX) * 10; // 10 degrees max tilt

    gsap.to(element, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.3,
      transformPerspective: 500,
      ease: "power1.out",
    });
  };

  return (
    <section
      id="services"
      className="min-h-dvh w-screen bg-stone-1000 text-stone-800"
    >
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-accent text-sm uppercase md:text-[10px] text-stone-600">
          our design philosophy
        </p>
        <div className="relative size-full">
          <AnimatedTitle
            title="The Story of<br /> Timeless Design"
            sectionId="story"
            containerClass="mt-5 pointer-events-none
          mix-blend-difference relative z-10 text-center !text-stone-200"
          />
          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  src="/img/entrance.webp"
                  alt="architectural design"
                  className="object-contain"
                />
              </div>
            </div>
            <RoundedCorners />
          </div>
        </div>
        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-body text-stone-600 md:text-start">
              Where innovation meets tradition, we create architectural
              masterpieces. Discover our approach to designing spaces that
              inspire and endure through generations.
            </p>
            <Button
              id="story-button"
              title="Learn Our Story"
              containerClass="mt-5 bg-sage-500 hover:bg-sage-600 transition-colors"
            ></Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
