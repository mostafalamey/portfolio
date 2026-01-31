import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";

const images = [
  "/img/gallery-1.png",
  "/img/gallery-2.png",
  "/img/gallery-3.png",
  "/img/gallery-4.png",
  "/img/gallery-5.png",
  "/img/gallery-7.png",
  "/img/gallery-8.png",
  "/img/entrance.png",
];

const Gallery = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="gallery" className="dl-section bg-ink-900/30" ref={sectionRef}>
      <div className="dl-container">
        <div className="text-center">
          <p className="dl-eyebrow" data-reveal>
            Gallery
          </p>
          <h2 className="dl-title mt-4" data-reveal="up">
            Explore work in context
          </h2>
          <p className="dl-lead mx-auto" data-reveal data-reveal-delay="100">
            A dense, image-forward grid designed to stay quiet and premium—no
            noise, just hierarchy.
          </p>
        </div>

        <div
          className="mt-20 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4"
          data-reveal-stagger="slow"
        >
          {images.map((src, idx) => (
            <article
              key={src}
              className="dl-card dl-card-hover group overflow-hidden dl-tilt"
              data-reveal="scale"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={src}
                  alt=""
                  className="h-full w-full object-cover object-center dl-img-zoom"
                  loading={idx < 2 ? "eager" : "lazy"}
                  decoding="async"
                />
                <div className="absolute inset-0 dl-scrim-soft dl-scrim-hover opacity-70" />
              </div>
              <div className="p-5">
                <p className="dl-eyebrow">Study</p>
                <p className="mt-3 text-sm font-semibold text-fg">
                  Composition {String(idx + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-xs text-fg-muted">
                  Light, material, and proportion.
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
