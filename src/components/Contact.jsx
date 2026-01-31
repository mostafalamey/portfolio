import React from "react";
import Button from "./Button";
import useScrollReveal from "../hooks/useScrollReveal";

const Contact = () => {
  const sectionRef = useScrollReveal();

  const testimonials = [
    {
      quote:
        "The outcome felt considered at every step - clear decisions, refined details, and a confident final result.",
      name: "Client A",
      role: "Private project",
    },
    {
      quote:
        "The process was structured and calm. The team communicated clearly and delivered a cohesive visual language.",
      name: "Client B",
      role: "Collaboration",
    },
    {
      quote:
        "Refined, understated, and incredibly detailed. The portfolio feels timeless and premium.",
      name: "Client C",
      role: "Residential work",
    },
    {
      quote:
        "Their cadence is deliberate. Each decision builds to a cohesive outcome without noise.",
      name: "Client D",
      role: "Commercial study",
    },
  ];

  const loop = [...testimonials, ...testimonials];

  return (
    <section id="contact" className="dl-section dl-sketch-v" ref={sectionRef}>
      <div className="dl-container relative z-10">
        <div className="text-center">
          <p className="dl-eyebrow" data-reveal>
            Clients
          </p>
          <h2 className="dl-title mt-4" data-reveal="up">
            What people say
          </h2>
          <p className="dl-lead mx-auto" data-reveal data-reveal-delay="100">
            Two-card testimonials on a calm surface - easy to scan, easy to
            trust.
          </p>
        </div>

        <div className="mt-10 dl-marquee" data-reveal aria-label="Testimonials">
          <div className="dl-marquee-track">
            {loop.map((t, idx) => (
              <figure
                key={`${t.name}-${idx}`}
                className="dl-card dl-card-hover p-8 min-w-[260px] max-w-[320px] sm:min-w-[300px] group"
                aria-hidden={idx >= testimonials.length ? "true" : "false"}
              >
                <blockquote className="text-sm leading-relaxed text-fg-2 transition-colors duration-300 group-hover:text-fg">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-[var(--radius-sm)] border border-ink-600/60 bg-ink-800 transition-all duration-300 group-hover:border-accent/50 group-hover:bg-ink-700" />
                  <div className="text-start">
                    <p className="text-sm font-semibold text-fg">{t.name}</p>
                    <p className="text-xs text-fg-muted">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div
          className="mt-20 overflow-hidden rounded-[var(--radius-lg)] border border-ink-600/50 bg-ink-800 group"
          data-reveal="scale"
        >
          <div className="relative">
            <img
              src="/img/stones.png"
              alt=""
              className="h-[420px] w-full object-cover object-center opacity-70 dl-img-zoom"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 dl-scrim-strong dl-scrim-hover" />

            <div className="dl-on-media absolute inset-0 flex items-center">
              <div className="dl-container">
                <div className="grid gap-14 lg:grid-cols-12 lg:items-center">
                  <div className="lg:col-span-5">
                    <p className="dl-eyebrow" data-reveal>
                      Get in touch
                    </p>
                    <h3
                      className="mt-4 text-5xl font-semibold leading-[1.02] text-fg sm:text-6xl"
                      data-reveal="up"
                      data-reveal-delay="100"
                    >
                      Let's build something
                      <span className="text-accent"> exceptional</span>.
                    </h3>
                    <p
                      className="mt-6 text-xs leading-relaxed text-fg-2"
                      data-reveal
                      data-reveal-delay="200"
                    >
                      Send a message and we'll respond with next steps.
                    </p>
                  </div>

                  <div className="lg:col-span-7">
                    <form
                      className="dl-card p-6"
                      data-reveal="scale"
                      data-reveal-delay="150"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="block">
                          <span className="dl-eyebrow">Name</span>
                          <input
                            className="mt-2 w-full rounded-[var(--radius-sm)] border border-ink-600/60 bg-ink-900/40 px-4 py-3 text-sm text-fg placeholder:text-fg-subtle focus:border-accent focus:outline-none focus:ring-4 focus:ring-[rgba(200,155,60,0.22)] transition-all duration-300"
                            placeholder="Your name"
                            autoComplete="name"
                          />
                        </label>
                        <label className="block">
                          <span className="dl-eyebrow">Email</span>
                          <input
                            type="email"
                            className="mt-2 w-full rounded-[var(--radius-sm)] border border-ink-600/60 bg-ink-900/40 px-4 py-3 text-sm text-fg placeholder:text-fg-subtle focus:border-accent focus:outline-none focus:ring-4 focus:ring-[rgba(200,155,60,0.22)] transition-all duration-300"
                            placeholder="you@domain.com"
                            autoComplete="email"
                          />
                        </label>
                      </div>

                      <label className="mt-4 block">
                        <span className="dl-eyebrow">Message</span>
                        <textarea
                          rows={4}
                          className="mt-2 w-full resize-none rounded-[var(--radius-sm)] border border-ink-600/60 bg-ink-900/40 px-4 py-3 text-sm text-fg placeholder:text-fg-subtle focus:border-accent focus:outline-none focus:ring-4 focus:ring-[rgba(200,155,60,0.22)] transition-all duration-300"
                          placeholder="Tell us what you're building"
                        />
                      </label>

                      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-xs text-fg-muted">
                          Response time: typically within 1-2 business days.
                        </p>
                        <Button title="Send message" variant="primary" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
