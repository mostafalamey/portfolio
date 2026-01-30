import React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const social = [
    { href: "#", icon: <FaTwitter />, label: "Twitter" },
    { href: "#", icon: <FaLinkedin />, label: "LinkedIn" },
    { href: "#", icon: <FaInstagram />, label: "Instagram" },
    { href: "#", icon: <FaFacebook />, label: "Facebook" },
    { href: "#", icon: <FaYoutube />, label: "YouTube" },
  ];

  return (
    <footer className="border-t border-ink-600/60 bg-ink-950">
      <div className="dl-container py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <img src="/img/logo.png" alt="Logo" className="h-9 w-9" />
              <p className="text-sm font-semibold text-fg">Portfolio</p>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-fg-muted">
              A dark editorial system with restrained gold accents, designed for
              premium visual storytelling.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-600/60 bg-white/5 text-fg-muted transition hover:bg-white/10 hover:text-fg"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:col-span-5">
            <div>
              <p className="dl-eyebrow">Navigate</p>
              <div className="mt-4 flex flex-col gap-2">
                {[
                  { label: "Home", href: "#home" },
                  { label: "Work", href: "#projects" },
                  { label: "Approach", href: "#approach" },
                  { label: "Insights", href: "#insights" },
                ].map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="text-sm text-fg-2 transition hover:text-fg"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="dl-eyebrow">Links</p>
              <div className="mt-4 flex flex-col gap-2">
                {[
                  { label: "Privacy", href: "#" },
                  { label: "Terms", href: "#" },
                  { label: "Cookies", href: "#" },
                  { label: "Accessibility", href: "#" },
                ].map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="text-sm text-fg-2 transition hover:text-fg"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="dl-eyebrow">Newsletter</p>
            <p className="mt-4 text-sm text-fg-muted">
              Occasional updates. No spam.
            </p>
            <form className="mt-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex gap-2">
                <input
                  type="email"
                  className="h-11 w-full rounded-xl border border-ink-600/60 bg-ink-900/40 px-4 text-sm text-fg placeholder:text-fg-subtle focus:border-accent focus:outline-none focus:ring-4 focus:ring-[rgba(200,155,60,0.22)]"
                  placeholder="Email address"
                  autoComplete="email"
                />
                <button
                  type="submit"
                  className="dl-btn-primary h-11 px-4"
                  aria-label="Subscribe"
                >
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-ink-600/60 pt-6 text-xs text-fg-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
          <p>Built with a calm, editorial design system.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
