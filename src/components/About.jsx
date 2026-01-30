const About = () => {
  return (
    <section id="approach" className="dl-section">
      <div className="dl-container">
        <div className="dl-card p-8 sm:p-10">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-5">
              <p className="dl-eyebrow">Approach</p>
              <h2 className="mt-4 display-font text-4xl font-semibold leading-tight text-fg sm:text-5xl">
                Built on clarity,
                <span className="text-accent"> refined</span> by detail.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-fg-2 sm:text-base">
                A dark editorial framework that lets imagery lead, while
                typography and spacing provide structure.
              </p>
            </div>

            <div className="md:col-span-7">
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { k: "01", v: "Intent" },
                  { k: "02", v: "Craft" },
                  { k: "03", v: "Delivery" },
                ].map((item) => (
                  <div
                    key={item.k}
                    className="rounded-2xl border border-ink-600/60 bg-ink-800/60 p-6"
                  >
                    <p className="dl-eyebrow">Step {item.k}</p>
                    <p className="mt-2 text-base font-semibold text-fg">
                      {item.v}
                    </p>
                    <p className="mt-2 text-sm text-fg-muted">
                      A concise, repeatable structure.
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-ink-600/60 bg-ink-900/40 p-6">
                  <p className="display-font text-3xl font-semibold text-accent">
                    25+
                  </p>
                  <p className="mt-2 text-sm text-fg-muted">
                    Years of combined experience
                  </p>
                </div>
                <div className="rounded-2xl border border-ink-600/60 bg-ink-900/40 p-6">
                  <p className="display-font text-3xl font-semibold text-accent">
                    100+
                  </p>
                  <p className="mt-2 text-sm text-fg-muted">
                    Delivered outputs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Materiality", desc: "Warm, tactile, and intentional." },
            { title: "Proportion", desc: "Balanced composition and rhythm." },
            { title: "Light", desc: "Contrast that reveals detail." },
            { title: "Craft", desc: "Measured decisions, consistent output." },
          ].map((item) => (
            <div key={item.title} className="dl-card dl-card-hover p-6">
              <p className="text-sm font-semibold text-fg">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted">
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
