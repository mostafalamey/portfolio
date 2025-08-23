import AnimatedTitle from "./AnimatedTitle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  // GSAP animation for the About section
  useGSAP(() => {
    // Animation for the clip mask
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: "0",
      duration: 1,
      ease: "power1.inOut",
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="text-sm uppercase md:text-[10px] font-accent text-stone-600">
          About Our Studio
        </h2>
        <AnimatedTitle
          title="Craf<b>t</b>ing Spaces that <br /> Insp<b>i</b>re and Transform"
          containerClass="mt-5 !text-stone-800 text-center"
        />
        <div className="about-subtext">
          <p>
            We believe architecture shapes the way we live, work, and connect.
          </p>
          <p>
            Our designs blend innovation with sustainability and timeless
            beauty.
          </p>
        </div>
      </div>
      <div id="clip" className="h-dvh w-screen">
        <div className="mask-clip-path about-image">
          <img
            src="/img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
