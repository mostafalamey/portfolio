import React from "react";
import Button from "./Button";

const Contact = () => {
  return (
    <section id="contact" className="dl-section">
      <div className="dl-container">
        <div className="text-center">
          <p className="dl-eyebrow">Clients</p>
          <h2 className="dl-title mt-3">What people say</h2>
          <p className="dl-lead mx-auto">
            Two-card testimonials on a calm surface—easy to scan, easy to trust.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            {
              quote:
                "The outcome felt considered at every step—clear decisions, refined details, and a confident final result.",
              name: "Client A",
              role: "Private project",
            },
            {
              quote:
                "The process was structured and calm. The team communicated clearly and delivered a cohesive visual language.",
              name: "Client B",
              role: "Collaboration",
            },
          ].map((t) => (
            <figure key={t.name} className="dl-card dl-card-hover p-8">
              <blockquote className="text-sm leading-relaxed text-fg-2">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full border border-ink-600/60 bg-ink-800" />
                <div className="text-start">
                  <p className="text-sm font-semibold text-fg">{t.name}</p>
                  <p className="text-xs text-fg-muted">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl border border-ink-600/60 bg-ink-800">
          <div className="relative">
            <img
              src="/img/stones.png"
              alt=""
              className="h-[420px] w-full object-cover object-center opacity-70"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 dl-scrim-strong" />

            <div className="absolute inset-0 flex items-center">
              <div className="dl-container">
                <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
                  <div className="lg:col-span-5">
                    <p className="dl-eyebrow">Get in touch</p>
                    <h3 className="mt-3 text-3xl font-semibold text-fg sm:text-4xl">
                      Let’s build something
                      <span className="text-accent"> exceptional</span>.
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-fg-2">
                      Send a message and we’ll respond with next steps.
                    </p>
                  </div>

                  <div className="lg:col-span-7">
                    <form
                      className="dl-card p-6"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="block">
                          <span className="dl-eyebrow">Name</span>
                          <input
                            className="mt-2 w-full rounded-xl border border-ink-600/60 bg-ink-900/40 px-4 py-3 text-sm text-fg placeholder:text-fg-subtle focus:border-accent focus:outline-none focus:ring-4 focus:ring-[rgba(200,155,60,0.22)]"
                            placeholder="Your name"
                            autoComplete="name"
                          />
                        </label>
                        <label className="block">
                          <span className="dl-eyebrow">Email</span>
                          <input
                            type="email"
                            className="mt-2 w-full rounded-xl border border-ink-600/60 bg-ink-900/40 px-4 py-3 text-sm text-fg placeholder:text-fg-subtle focus:border-accent focus:outline-none focus:ring-4 focus:ring-[rgba(200,155,60,0.22)]"
                            placeholder="you@domain.com"
                            autoComplete="email"
                          />
                        </label>
                      </div>

                      <label className="mt-4 block">
                        <span className="dl-eyebrow">Message</span>
                        <textarea
                          rows={4}
                          className="mt-2 w-full resize-none rounded-xl border border-ink-600/60 bg-ink-900/40 px-4 py-3 text-sm text-fg placeholder:text-fg-subtle focus:border-accent focus:outline-none focus:ring-4 focus:ring-[rgba(200,155,60,0.22)]"
                          placeholder="Tell us what you’re building"
                        />
                      </label>

                      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-xs text-fg-muted">
                          Response time: typically within 1–2 business days.
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
