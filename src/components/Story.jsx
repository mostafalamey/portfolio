import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import useScrollReveal from "../hooks/useScrollReveal";

const Story = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef(null);
  const sectionRef = useScrollReveal();

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <section
      id="services"
      className="dl-section bg-ink-900/30 dl-sketch-f"
      ref={sectionRef}
    >
      <div className="dl-container relative z-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="dl-eyebrow" data-reveal>
              Process
            </p>
            <h2 className="dl-title mt-4" data-reveal="up">
              From direction to delivery
            </h2>
            <p className="dl-lead" data-reveal data-reveal-delay="100">
              A split layout with a strong media tile and a quiet copy column.
              Motion stays subtle: gentle fades, small lifts.
            </p>

            <div
              className="mt-10 flex flex-col gap-4 sm:flex-row"
              data-reveal
              data-reveal-delay="200"
            >
              <Button
                id="open-reel"
                title="Watch a short reel"
                variant="primary"
                onClick={() => setIsOpen(true)}
              />
              <Button
                title="See the framework"
                variant="ghost"
                onClick={() =>
                  document
                    .getElementById("approach")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div
              className="dl-card dl-card-hover group relative overflow-hidden dl-image-glow dl-tilt"
              data-reveal="scale"
              data-reveal-delay="150"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src="/img/about.png"
                  alt=""
                  className="h-full w-full object-cover object-center dl-img-zoom"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 dl-scrim-soft dl-scrim-hover opacity-70" />
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="absolute inset-0 flex items-center justify-center"
                aria-label="Play video"
              >
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-[var(--radius-sm)] border border-white/20 bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/20 group-hover:scale-110 dl-pulse">
                  <img src="/img/play.svg" alt="" className="h-5 w-5" />
                </span>
              </button>

              <div className="dl-on-media absolute inset-x-0 bottom-0 p-8">
                <p className="dl-eyebrow">Featured</p>
                <p className="mt-3 text-lg font-semibold text-fg">
                  A controlled media tile
                </p>
                <p className="mt-2 text-xs text-fg-muted">
                  Rounded corners, soft border, and a readable scrim.
                </p>
              </div>
            </div>
          </div>
        </div>

        {isOpen && (
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label="Video modal"
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-6"
            onMouseDown={(e) => {
              if (e.target === e.currentTarget) setIsOpen(false);
            }}
          >
            <div className="w-full max-w-4xl overflow-hidden rounded-[var(--radius-lg)] border border-ink-600/60 bg-ink-900 shadow-[0_20px_48px_rgba(0,0,0,0.50)]">
              <div className="flex items-center justify-between border-b border-ink-600/50 px-5 py-4">
                <p className="text-sm font-semibold text-fg">Short reel</p>
                <button
                  type="button"
                  className="inline-flex min-h-[40px] min-w-[40px] items-center justify-center rounded-[var(--radius-sm)] border border-ink-600/50 bg-white/5 text-fg transition hover:bg-white/10"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
              <div className="bg-black">
                <video
                  src="/videos/feature-1.mp4"
                  controls
                  autoPlay
                  playsInline
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Story;
