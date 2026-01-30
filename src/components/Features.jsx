const Features = () => {
  return (
    <section id="projects" className="dl-section">
      <div className="dl-container">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="dl-eyebrow">Work</p>
            <h2 className="dl-title mt-3">Selected projects</h2>
            <p className="dl-lead">
              A grid that prioritizes imagery, balanced by consistent overlay
              patterns and small, readable meta.
            </p>
          </div>
          <a
            href="#gallery"
            className="text-xs uppercase tracking-[0.16em] text-fg-muted transition hover:text-fg"
          >
            Explore gallery
          </a>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <article className="dl-card dl-card-hover group overflow-hidden lg:col-span-7">
            <div className="relative aspect-[16/10]">
              <img
                src="/img/gallery-1.png"
                alt=""
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 dl-scrim-soft opacity-75" />
              <div className="dl-on-media absolute inset-x-0 bottom-0 p-6">
                <p className="dl-eyebrow">Signature</p>
                <h3 className="mt-2 text-2xl font-semibold text-fg">
                  A bold concept, rendered quietly
                </h3>
                <p className="mt-2 max-w-xl text-sm text-fg-2">
                  A premium hero-card treatment with predictable typography and
                  a subtle scrim.
                </p>
              </div>
            </div>
          </article>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {[
              {
                img: "/img/gallery-3.png",
                eyebrow: "Study",
                title: "Material-led composition",
                desc: "Warm accent, restrained copy, strong hierarchy.",
              },
              {
                img: "/img/gallery-4.png",
                eyebrow: "Series",
                title: "Layered surfaces",
                desc: "Cards + borders create depth without noise.",
              },
            ].map((c) => (
              <article
                key={c.title}
                className="dl-card dl-card-hover group overflow-hidden"
              >
                <div className="relative aspect-[16/10]">
                  <img
                    src={c.img}
                    alt=""
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 dl-scrim-soft opacity-75" />
                  <div className="dl-on-media absolute inset-x-0 bottom-0 p-6">
                    <p className="dl-eyebrow">{c.eyebrow}</p>
                    <h3 className="mt-2 text-lg font-semibold text-fg">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-sm text-fg-muted">{c.desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              img: "/img/gallery-2.png",
              eyebrow: "Collection",
              title: "Cohesive set",
              desc: "A consistent card recipe across pages.",
            },
            {
              img: "/img/gallery-5.png",
              eyebrow: "Detail",
              title: "Tight hierarchy",
              desc: "Overlines + titles + body at readable sizes.",
            },
            {
              img: "/img/entrance.png",
              eyebrow: "Concept",
              title: "Texture & pattern",
              desc: "Optional low-opacity background texture band.",
            },
          ].map((c) => (
            <article
              key={c.title}
              className="dl-card dl-card-hover group overflow-hidden"
            >
              <div className="relative aspect-[4/3]">
                <img
                  src={c.img}
                  alt=""
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 dl-scrim-soft opacity-70" />
              </div>
              <div className="p-6">
                <p className="dl-eyebrow">{c.eyebrow}</p>
                <h3 className="mt-2 text-lg font-semibold text-fg">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {c.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
