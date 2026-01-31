import React, { useEffect, useMemo, useRef, useState } from "react";
import Button from "./Button";
import useScrollReveal from "../hooks/useScrollReveal";

const slides = [
  {
    img: "/img/gallery-1.png",
    eyebrow: "Featured",
    title: "Design spaces with quiet confidence",
    subtitle:
      "A dark editorial canvas with warm accents, crafted for visual storytelling and precision.",
  },
  {
    img: "/img/gallery-3.png",
    eyebrow: "Portfolio",
    title: "Cinematic detailes. Measured beauty.",
    subtitle:
      "Layered surfaces, soft borders, and deliberate contrast - built to make work feel premium.",
  },
  {
    img: "/img/gallery-5.png",
    eyebrow: "Process",
    title: "From concept to detail",
    subtitle:
      "A calm interface with subtle motion, clear hierarchy, and strong, consistent components.",
  },
];

const NewHero = () => {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const reducedMotion = useRef(false);
  const statsRef = useScrollReveal();

  const next = () => setActive((i) => (i + 1) % slides.length);

  useEffect(() => {
    if (typeof window === "undefined") return;
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Trigger entrance animation after mount
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (reducedMotion.current) return;
    if (isPaused) return;
    const id = window.setInterval(next, 9000);
    return () => window.clearInterval(id);
  }, [isPaused]);

  const current = useMemo(() => slides[active], [active]);

  return (
    <section
      id="home"
      className="dl-force-dark relative min-h-[92vh] w-screen overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute inset-0">
        {slides.map((s, i) => (
          <div
            key={s.img}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i === active ? "false" : "true"}
          >
            <img
              src={s.img}
              alt=""
              className="h-full w-full object-cover object-center dl-kenburns"
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
            />
            <div className="dl-scrim-strong absolute inset-0" />
          </div>
        ))}
      </div>

      <div className="relative z-10">
        <div className="dl-container pt-40 sm:pt-48">
          <div className="mx-auto max-w-6xl text-center">
            <p
              className={`dl-eyebrow text-shadow-soft transition-all duration-700 ease-out ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              {current.eyebrow}
            </p>
            <h1
              className={`mt-5 display-font text-6xl font-semibold leading-[0.90] text-fg text-shadow-soft-lg md:text-6xl lg:text-8xl transition-all duration-1000 ease-out ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              {current.title}
            </h1>
            <p
              className={`mx-auto mt-8 max-w-2xl text-xs leading-relaxed text-fg-2 sm:text-sm transition-all duration-700 ease-out ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              {current.subtitle}
            </p>

            <div
              className={`mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row transition-all duration-700 ease-out ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <Button
                title="View selected work"
                variant="primary"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              />
              <Button
                title="Start a conversation"
                variant="ghost"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              />
            </div>

            <div
              className={`mt-14 flex items-center justify-center gap-3 transition-all duration-700 ease-out ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "1000ms" }}
              aria-label="Hero slides"
            >
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-[var(--radius-sm)] transition-all duration-500 ${
                    i === active
                      ? "bg-fg w-12"
                      : "bg-white/25 hover:bg-white/40 w-8"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="dl-container pb-16 pt-20" ref={statsRef}>
          <div className="grid gap-5 sm:grid-cols-3" data-reveal-stagger>
            {[
              { k: "25+", v: "Years shaping craft" },
              { k: "90+", v: "Completed studies" },
              { k: "50+", v: "Delivered outcomes" },
            ].map((item) => (
              <div
                key={item.k}
                className="dl-card dl-card-hover dl-tilt p-8 text-start dl-border-glow"
                data-reveal="scale"
              >
                <p className="display-font text-3xl font-semibold dl-text-gradient">
                  {item.k}
                </p>
                <p className="mt-3 text-xs text-fg-muted">{item.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;
