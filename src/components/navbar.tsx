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
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:h-[72px] lg:px-8"
      >
        {/* Brand */}
        <a
          href="#top"
          onClick={closeMenu}
          className="group flex items-center gap-2.5"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-primary/20 bg-primary/[0.045] font-mono text-[9px] font-semibold text-primary transition-colors duration-300 group-hover:border-primary/35 group-hover:bg-primary/[0.08]">
            HM
          </span>

          <div className="hidden sm:block">
            <p className="text-xs font-semibold tracking-tight text-foreground">
              {profile.name}
            </p>

            <p className="font-mono text-[7px] uppercase tracking-[0.13em] text-foreground-subtle">
              RPA · Architecture
            </p>
          </div>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-2 text-[10px] font-medium text-foreground-subtle transition-colors duration-300 hover:text-foreground"
            >
              {item.label}

              <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 hover:scale-x-100" />
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full border border-primary/20 bg-primary/[0.045] px-4 py-2 text-[9px] font-semibold text-primary transition-all duration-300 hover:border-primary/35 hover:bg-primary/[0.08]"
          >
            Let's talk
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-white/[0.02] text-foreground-muted transition-all duration-300 hover:border-primary/20 hover:bg-primary/[0.04] hover:text-primary md:hidden"
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          open
            ? "max-h-[420px] opacity-100"
            : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 py-4 sm:px-6">
          <div className="flex flex-col">
            {navigation.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`flex items-center justify-between py-4 text-sm text-foreground-muted transition-colors hover:text-primary ${
                  index !== navigation.length - 1
                    ? "border-b border-border"
                    : ""
                }`}
              >
                <span>{item.label}</span>

                <span className="font-mono text-[8px] text-foreground-subtle">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-xs font-semibold text-slate-950"
            >
              Let's talk
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
