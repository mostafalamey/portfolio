import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";

const posts = [
  {
    title: "Designing for calm",
    date: "Jan 2026",
    excerpt:
      "How restrained contrast and predictable spacing create confidence and clarity.",
    img: "/img/gallery-2.png",
  },
  {
    title: "Layering surfaces",
    date: "Jan 2026",
    excerpt:
      "Using borders, scrims, and soft elevation to guide attention without shouting.",
    img: "/img/gallery-4.png",
  },
  {
    title: "Typography as structure",
    date: "Jan 2026",
    excerpt:
      "Why strong hierarchy and editorial rhythms make portfolios feel premium.",
    img: "/img/gallery-5.png",
  },
];

const Insights = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="insights" className="dl-section" ref={sectionRef}>
      <div className="dl-container">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="dl-eyebrow" data-reveal>
              Latest
            </p>
            <h2 className="dl-title mt-4" data-reveal="up">
              Notes and insights
            </h2>
            <p className="dl-lead" data-reveal data-reveal-delay="100">
              Short, evergreen writing—kept visual-first and skimmable.
            </p>
          </div>
          <a
            href="#"
            className="text-[10px] uppercase tracking-[0.2em] text-fg-muted transition hover:text-fg dl-link-hover"
            data-reveal
          >
            View all
          </a>
        </div>

        <div
          className="mt-16 grid gap-8 md:grid-cols-3"
          data-reveal-stagger="slow"
        >
          {posts.map((p) => (
            <article
              key={p.title}
              className="dl-card dl-card-hover group overflow-hidden dl-tilt"
              data-reveal="scale"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.img}
                  alt=""
                  className="h-full w-full object-cover object-center dl-img-zoom"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 dl-scrim-soft dl-scrim-hover opacity-65" />
              </div>
              <div className="p-8">
                <p className="dl-eyebrow">{p.date}</p>
                <h3 className="mt-4 text-lg font-semibold text-fg">
                  {p.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-fg-muted">
                  {p.excerpt}
                </p>
                <div className="mt-8">
                  <a
                    href="#"
                    className="text-[10px] uppercase tracking-[0.2em] text-accent transition hover:text-accent-2 dl-link-hover"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
