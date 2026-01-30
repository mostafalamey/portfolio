import React, { useEffect, useMemo, useRef, useState } from "react";
import Button from "./Button";

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
    title: "Cinematic imagery. Measured typography.",
    subtitle:
      "Layered surfaces, soft borders, and deliberate contrast—built to make work feel premium.",
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
  const reducedMotion = useRef(false);

  const next = () => setActive((i) => (i + 1) % slides.length);

  useEffect(() => {
    if (typeof window === "undefined") return;
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
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
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i === active ? "false" : "true"}
          >
            <img
              src={s.img}
              alt=""
              className="h-full w-full object-cover object-center"
              loading={i === 0 ? "eager" : "lazy"}
              decoding="async"
            />
            <div className="dl-scrim-strong absolute inset-0" />
          </div>
        ))}
      </div>

      <div className="relative z-10">
        <div className="dl-container pt-32 sm:pt-36">
          <div className="mx-auto max-w-3xl text-center">
            <p className="dl-eyebrow text-shadow-soft">{current.eyebrow}</p>
            <h1 className="mt-4 display-font text-4xl font-semibold leading-tight text-fg text-shadow-soft-lg sm:text-5xl md:text-6xl">
              {current.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-fg-2 sm:text-lg">
              {current.subtitle}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
              className="mt-10 flex items-center justify-center gap-2"
              aria-label="Hero slides"
            >
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`h-2 w-2 rounded-full transition ${
                    i === active ? "bg-fg" : "bg-white/25 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="dl-container pb-10 pt-12">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { k: "25+", v: "Years shaping craft" },
              { k: "90+", v: "Completed studies" },
              { k: "50+", v: "Delivered outcomes" },
            ].map((item) => (
              <div
                key={item.k}
                className="dl-card dl-card-hover p-6 text-start"
              >
                <p className="display-font text-2xl font-semibold text-accent">
                  {item.k}
                </p>
                <p className="mt-2 text-sm text-fg-muted">{item.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHero;
