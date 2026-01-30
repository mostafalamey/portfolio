import React from "react";

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
  return (
    <section id="insights" className="dl-section">
      <div className="dl-container">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="dl-eyebrow">Latest</p>
            <h2 className="dl-title mt-3">Notes and insights</h2>
            <p className="dl-lead">
              Short, evergreen writing—kept visual-first and skimmable.
            </p>
          </div>
          <a
            href="#"
            className="text-xs uppercase tracking-[0.16em] text-fg-muted transition hover:text-fg"
          >
            View all
          </a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.title}
              className="dl-card dl-card-hover overflow-hidden"
            >
              <div className="relative aspect-[16/10]">
                <img
                  src={p.img}
                  alt=""
                  className="h-full w-full object-cover object-center"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 dl-scrim-soft opacity-65" />
              </div>
              <div className="p-6">
                <p className="dl-eyebrow">{p.date}</p>
                <h3 className="mt-3 text-lg font-semibold text-fg">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-2">
                  {p.excerpt}
                </p>
                <div className="mt-6">
                  <a
                    href="#"
                    className="text-xs uppercase tracking-[0.16em] text-accent transition hover:text-accent-2"
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
