import React from "react";

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
  return (
    <section id="gallery" className="dl-section bg-ink-900/40">
      <div className="dl-container">
        <div className="text-center">
          <p className="dl-eyebrow">Gallery</p>
          <h2 className="dl-title mt-3">Explore work in context</h2>
          <p className="dl-lead mx-auto">
            A dense, image-forward grid designed to stay quiet and premium—no
            noise, just hierarchy.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {images.map((src, idx) => (
            <article
              key={src}
              className="dl-card dl-card-hover group overflow-hidden"
            >
              <div className="relative aspect-[4/3]">
                <img
                  src={src}
                  alt=""
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  loading={idx < 2 ? "eager" : "lazy"}
                  decoding="async"
                />
                <div className="absolute inset-0 dl-scrim-soft opacity-70 transition-opacity duration-500 group-hover:opacity-55" />
              </div>
              <div className="p-4">
                <p className="dl-eyebrow">Study</p>
                <p className="mt-2 text-sm font-semibold text-fg">
                  Composition {String(idx + 1).padStart(2, "0")}
                </p>
                <p className="mt-1 text-sm text-fg-muted">
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
