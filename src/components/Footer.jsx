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
    <footer className="border-t border-ink-600/40 bg-ink-950">
      <div className="dl-container py-20">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <img
                src="/img/logo-elegant.png"
                alt="Logo"
                className="h-10 w-auto"
              />
            </div>
            <p className="mt-6 max-w-sm text-xs leading-relaxed text-fg-muted">
              A dark editorial system with restrained gold accents, designed for
              premium visual storytelling.
            </p>
            <div className="mt-8 flex items-center gap-3">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] border border-ink-600/40 bg-transparent text-fg-muted transition-all duration-300 hover:border-accent/50 hover:text-accent hover:-translate-y-1"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 md:col-span-5">
            <div>
              <p className="dl-eyebrow">Navigate</p>
              <div className="mt-5 flex flex-col gap-3">
                {[
                  { label: "Home", href: "#home" },
                  { label: "Work", href: "#projects" },
                  { label: "Approach", href: "#approach" },
                  { label: "Insights", href: "#insights" },
                ].map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="text-xs text-fg-muted transition-all duration-300 hover:text-fg hover:translate-x-1 dl-link-hover"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="dl-eyebrow">Links</p>
              <div className="mt-5 flex flex-col gap-3">
                {[
                  { label: "Privacy", href: "#" },
                  { label: "Terms", href: "#" },
                  { label: "Cookies", href: "#" },
                  { label: "Accessibility", href: "#" },
                ].map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="text-xs text-fg-muted transition-all duration-300 hover:text-fg hover:translate-x-1 dl-link-hover"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="dl-eyebrow">Newsletter</p>
            <p className="mt-5 text-xs text-fg-muted">
              Occasional updates. No spam.
            </p>
            <form className="mt-5" onSubmit={(e) => e.preventDefault()}>
              <div className="flex gap-3">
                <input
                  type="email"
                  className="h-11 w-full rounded-[var(--radius-sm)] border border-ink-600/50 bg-ink-900/40 px-4 text-sm text-fg placeholder:text-fg-subtle focus:border-accent focus:outline-none focus:ring-4 focus:ring-[rgba(200,155,60,0.22)]"
                  placeholder="Email address"
                  autoComplete="email"
                />
                <button
                  type="submit"
                  className="dl-btn-primary h-11 px-5"
                  aria-label="Subscribe"
                >
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-ink-600/40 pt-8 text-[10px] text-fg-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
          <p>Built with a calm, editorial design system.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
