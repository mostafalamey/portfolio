import useScrollReveal from "../hooks/useScrollReveal";

const About = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="approach" className="dl-section dl-sketch-v" ref={sectionRef}>
      <div className="dl-container relative z-10">
        <div className="dl-card p-10 sm:p-14" data-reveal="scale">
          <div className="grid gap-14 md:grid-cols-12 md:items-center">
            <div className="md:col-span-5">
              <p className="dl-eyebrow" data-reveal>
                Approach
              </p>
              <h2
                className="mt-5 display-font text-5xl font-semibold leading-[1.02] text-fg sm:text-6xl md:text-7xl"
                data-reveal="up"
              >
                Built on clarity,
                <span className="text-accent"> refined</span> by detail.
              </h2>
              <p
                className="mt-6 text-xs leading-relaxed text-fg-muted sm:text-sm"
                data-reveal
                data-reveal-delay="150"
              >
                A dark editorial framework that lets imagery lead, while
                typography and spacing provide structure.
              </p>
            </div>

            <div className="md:col-span-7">
              <div className="grid gap-5 sm:grid-cols-3" data-reveal-stagger>
                {[
                  { k: "01", v: "Intent" },
                  { k: "02", v: "Craft" },
                  { k: "03", v: "Delivery" },
                ].map((item) => (
                  <div
                    key={item.k}
                    className="rounded-[var(--radius-md)] border border-ink-600/50 bg-ink-800/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30"
                    data-reveal
                  >
                    <p className="dl-eyebrow">Step {item.k}</p>
                    <p className="mt-3 text-base font-semibold text-fg">
                      {item.v}
                    </p>
                    <p className="mt-3 text-xs text-fg-muted">
                      A concise, repeatable structure.
                    </p>
                  </div>
                ))}
              </div>

              <div
                className="mt-10 grid gap-5 sm:grid-cols-2"
                data-reveal-stagger
              >
                <div
                  className="rounded-[var(--radius-md)] border border-ink-600/50 bg-ink-900/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 dl-border-glow"
                  data-reveal
                >
                  <p className="display-font text-4xl font-semibold dl-text-gradient">
                    25+
                  </p>
                  <p className="mt-3 text-xs text-fg-muted">
                    Years of combined experience
                  </p>
                </div>
                <div
                  className="rounded-[var(--radius-md)] border border-ink-600/50 bg-ink-900/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 dl-border-glow"
                  data-reveal
                >
                  <p className="display-font text-4xl font-semibold dl-text-gradient">
                    100+
                  </p>
                  <p className="mt-3 text-xs text-fg-muted">
                    Delivered outputs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          data-reveal-stagger="slow"
        >
          {[
            { title: "Materiality", desc: "Warm, tactile, and intentional." },
            { title: "Proportion", desc: "Balanced composition and rhythm." },
            { title: "Light", desc: "Contrast that reveals detail." },
            { title: "Craft", desc: "Measured decisions, consistent output." },
          ].map((item) => (
            <div
              key={item.title}
              className="dl-card dl-card-hover p-8 dl-tilt"
              data-reveal
            >
              <p className="text-sm font-semibold text-fg">{item.title}</p>
              <p className="mt-3 text-xs leading-relaxed text-fg-muted">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
