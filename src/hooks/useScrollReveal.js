import { useEffect, useRef } from "react";

/**
 * Hook that applies scroll-triggered reveal animations to elements
 * with [data-reveal] attribute within the provided ref container.
 */
export function useScrollReveal(options = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      // Show all elements immediately
      container.querySelectorAll("[data-reveal]").forEach((el) => {
        el.classList.add("revealed");
      });
      return;
    }

    const observerOptions = {
      root: null,
      rootMargin: options.rootMargin || "0px 0px -80px 0px",
      threshold: options.threshold || 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = el.dataset.revealDelay || 0;

          setTimeout(() => {
            el.classList.add("revealed");
          }, delay);

          observer.unobserve(el);
        }
      });
    }, observerOptions);

    // Observe all elements with data-reveal
    const elements = container.querySelectorAll("[data-reveal]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [options.rootMargin, options.threshold]);

  return containerRef;
}

export default useScrollReveal;
