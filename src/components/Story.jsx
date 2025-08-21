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
    <section className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">
          the multiverse awaits
        </p>
        <div className="relative size-full">
          <AnimatedTitle
            title="the Story of<br /> a hidden realms"
            sectionId="story"
            containerClass="mt-5 pointer-events-none
          mix-blend-difference relative z-10 text-center"
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
                  alt="entrance"
                  className="object-contain"
                />
              </div>
            </div>
            <RoundedCorners />
          </div>
        </div>
        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              Where realms converge, lies Zentry and the boundless pillar.
              Discover its secrets and shape your destiny amidst infinite
              possibilities.
            </p>
            <Button
              id="realm-button"
              title="Enter the Realm"
              containerClass="mt-5"
            ></Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
