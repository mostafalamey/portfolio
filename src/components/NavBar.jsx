import React, { useEffect, useMemo, useRef, useState } from "react";
import { useWindowScroll } from "react-use";
import Button from "./Button";
import gsap from "gsap";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#projects" },
  { label: "Approach", href: "#approach" },
  { label: "Insights", href: "#insights" },
  { label: "Contact", href: "#contact" },
];

const NavBar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof document === "undefined") return "dark";
    return document.documentElement.dataset.theme || "dark";
  });

  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();

  const isScrolled = useMemo(() => currentScrollY > 8, [currentScrollY]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // ignore storage errors
    }
  }, [theme]);

  useEffect(() => {
    // Hide on scroll down, show on scroll up (subtle, premium feel)
    if (currentScrollY <= 0) {
      setIsNavVisible(true);
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      opacity: isNavVisible ? 1 : 0,
      y: isNavVisible ? 0 : -100,
      duration: 0.2,
    });
  }, [isNavVisible]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  const scrollTo = (href) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6"
    >
      <header
        className={`dl-glass mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl px-4 shadow-[0_10px_28px_rgba(0,0,0,0.18)] transition-colors sm:px-6 ${
          isScrolled ? "bg-[var(--nav-bg-scrolled)]" : "bg-[var(--nav-bg)]"
        }`}
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#home");
          }}
          className="flex items-center gap-3"
        >
          <img src="/img/logo.png" alt="Logo" className="h-9 w-9" />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(item.href);
              }}
              className="text-xs uppercase tracking-[0.16em] text-fg-muted transition hover:text-fg"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-ink-600/60 bg-[var(--overlay-weak)] text-fg transition hover:bg-[var(--overlay-strong)]"
            aria-label={
              theme === "dark"
                ? "Switch to light theme"
                : "Switch to dark theme"
            }
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>

          <div className="hidden sm:block">
            <Button
              id="nav-cta"
              title="Request a consult"
              variant="primary"
              onClick={() => scrollTo("#contact")}
            />
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((v) => !v)}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-ink-600/60 bg-[var(--overlay-weak)] text-fg transition hover:bg-[var(--overlay-strong)] md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="mx-auto mt-3 max-w-6xl px-1 md:hidden">
          <div className="dl-card p-3">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(item.href);
                  }}
                  className="rounded-xl px-4 py-3 text-sm text-fg-2 transition hover:bg-[var(--overlay-weak)] hover:text-fg"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2">
                <Button
                  title="Request a consult"
                  variant="primary"
                  containerClass="w-full"
                  onClick={() => scrollTo("#contact")}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
