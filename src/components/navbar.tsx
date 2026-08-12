"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { profile } from "@/data/profile";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Capabilities", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = navigation
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const current = visibleSections[0];

        if (current?.target?.id) {
          setActiveSection(`#${current.target.id}`);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
        <nav
          className={`relative flex h-14 items-center justify-between rounded-2xl border px-3 transition-all duration-500 sm:px-4 ${
            scrolled
              ? "border-border-strong bg-background/80 shadow-2xl shadow-black/20 backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
          aria-label="Primary navigation"
        >
          {/* Brand */}
          <a
            href="#top"
            onClick={closeMobile}
            className="group flex items-center gap-3"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-primary/20 bg-primary/[0.06] font-mono text-[10px] font-semibold text-primary transition-colors duration-300 group-hover:border-primary/35 group-hover:bg-primary/[0.1]">
              HM
            </span>

            <div className="hidden sm:block">
              <p className="text-xs font-semibold tracking-tight text-foreground">
                {profile.name}
              </p>

              <p className="font-mono text-[7px] uppercase tracking-[0.14em] text-foreground-subtle">
                RPA · Architecture
              </p>
            </div>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => {
              const active = activeSection === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-xl px-3 py-2 text-[10px] font-medium transition-colors duration-300 ${
                    active
                      ? "text-primary"
                      : "text-foreground-subtle hover:text-foreground"
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute bottom-1 left-1/2 h-px -translate-x-1/2 bg-primary transition-all duration-300 ${
                      active ? "w-3/5 opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-2 text-[9px] font-medium text-primary transition-all duration-300 hover:border-primary/35 hover:bg-primary/[0.1] md:block"
          >
            Let's talk
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-white/[0.02] text-foreground-muted transition-colors hover:border-primary/20 hover:text-primary md:hidden"
          >
            {mobileOpen ? <X size={17} /> : <Menu size={17} />}
          </button>

          {/* Mobile menu */}
          <div
            className={`absolute left-0 right-0 top-[calc(100%+8px)] origin-top rounded-2xl border border-border bg-background/95 p-2 shadow-2xl shadow-black/30 backdrop-blur-xl transition-all duration-300 md:hidden ${
              mobileOpen
                ? "pointer-events-auto scale-100 opacity-100"
                : "pointer-events-none scale-[0.98] opacity-0"
            }`}
          >
            {navigation.map((item) => {
              const active = activeSection === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMobile}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-xs transition-colors ${
                    active
                      ? "bg-primary/[0.06] text-primary"
                      : "text-foreground-muted hover:bg-white/[0.03] hover:text-foreground"
                  }`}
                >
                  <span>{item.label}</span>

                  {active && (
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  )}
                </a>
              );
            })}

            <a
              href="#contact"
              onClick={closeMobile}
              className="mt-1 flex items-center justify-center rounded-xl bg-primary px-4 py-3 text-xs font-semibold text-slate-950"
            >
              Let's talk
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
