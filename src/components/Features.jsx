import useScrollReveal from "../hooks/useScrollReveal";

const Features = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="projects" className="dl-section dl-sketch-f" ref={sectionRef}>
      <div className="dl-container relative z-10">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="dl-eyebrow" data-reveal>
              Work
            </p>
            <h2 className="dl-title mt-4" data-reveal="up">
              Selected projects
            </h2>
            <p className="dl-lead" data-reveal data-reveal-delay="100">
              A grid that prioritizes imagery, balanced by consistent overlay
              patterns and small, readable meta.
            </p>
          </div>
          <a
            href="#gallery"
            className="text-[10px] uppercase tracking-[0.2em] text-fg-muted transition hover:text-fg dl-link-hover"
            data-reveal
          >
            Explore gallery
          </a>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-12" data-reveal-stagger>
          <article
            className="dl-card dl-card-hover group overflow-hidden lg:col-span-7 dl-image-glow dl-tilt"
            data-reveal="scale"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src="/img/gallery-1.png"
                alt=""
                className="h-full w-full object-cover object-center dl-img-zoom"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 dl-scrim-soft dl-scrim-hover opacity-75" />
              <div className="dl-on-media absolute inset-x-0 bottom-0 p-8">
                <p className="dl-eyebrow">Signature</p>
                <h3 className="mt-3 text-2xl font-semibold text-fg sm:text-3xl">
                  A bold concept, rendered quietly
                </h3>
                <p className="mt-3 max-w-xl text-xs text-fg-2">
                  A premium hero-card treatment with predictable typography and
                  a subtle scrim.
                </p>
              </div>
            </div>
          </article>

          <div
            className="grid gap-8 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1"
            data-reveal-stagger
          >
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
            ].map((c, idx) => (
              <article
                key={c.title}
                className="dl-card dl-card-hover group overflow-hidden"
                data-reveal="scale"
                data-reveal-delay={idx * 120}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={c.img}
                    alt=""
                    className="h-full w-full object-cover object-center dl-img-zoom"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 dl-scrim-soft dl-scrim-hover opacity-75" />
                  <div className="dl-on-media absolute inset-x-0 bottom-0 p-7">
                    <p className="dl-eyebrow">{c.eyebrow}</p>
                    <h3 className="mt-3 text-lg font-semibold text-fg">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-xs text-fg-muted">{c.desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div
          className="mt-20 grid gap-8 md:grid-cols-3"
          data-reveal-stagger="slow"
        >
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
          ].map((c, idx) => (
            <article
              key={c.title}
              className="dl-card dl-card-hover group overflow-hidden dl-tilt"
              data-reveal="scale"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={c.img}
                  alt=""
                  className="h-full w-full object-cover object-center dl-img-zoom"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 dl-scrim-soft dl-scrim-hover opacity-70" />
              </div>
              <div className="p-8">
                <p className="dl-eyebrow">{c.eyebrow}</p>
                <h3 className="mt-3 text-lg font-semibold text-fg">
                  {c.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-fg-muted">
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
