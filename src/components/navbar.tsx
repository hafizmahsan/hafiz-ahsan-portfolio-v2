"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Menu,
  UserRound,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { profile } from "@/data/profile";

const navItems = [
  {
    label: "About",
    href: "#about",
    icon: UserRound,
  },
  {
    label: "Experience",
    href: "#experience",
    icon: BriefcaseBusiness,
  },
  {
    label: "Work",
    href: "#work",
    icon: Code2,
  },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
        <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between rounded-full border border-border bg-background/75 px-4 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-5">
          {/* Brand */}
          <a
            href="#home"
            onClick={closeMenu}
            className="group flex items-center gap-3"
            aria-label={`${profile.name} - home`}
          >
            <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-primary/30 bg-primary/[0.08]">
              <span className="absolute h-3 w-3 rounded-full bg-primary shadow-[0_0_18px_rgba(34,211,238,0.8)]" />

              <span className="absolute h-6 w-6 rounded-full border border-primary/20" />
            </span>

            <span className="hidden text-sm font-semibold tracking-tight text-foreground sm:block">
              {profile.name}
            </span>

            <span className="hidden font-mono text-[9px] uppercase tracking-[0.16em] text-foreground-subtle lg:block">
              RPA · Architecture
            </span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-xs font-medium text-foreground-muted transition-colors hover:bg-white/[0.04] hover:text-foreground"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              className="ml-2 inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-slate-950 transition-all hover:bg-primary-bright hover:shadow-[0_0_25px_rgba(34,211,238,0.18)]"
            >
              Let&apos;s talk
              <ArrowUpRight size={13} strokeWidth={2.2} />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white/[0.03] text-foreground transition-colors hover:border-border-strong hover:text-primary md:hidden"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 45, opacity: 0 }}
                >
                  <X size={18} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }}
                >
                  <Menu size={18} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </header>

      {/* Mobile navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            className="fixed inset-0 z-40 bg-background/95 px-4 pb-6 pt-24 backdrop-blur-2xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="mx-auto flex h-full max-w-md flex-col"
              initial={{ y: -18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="mb-6 border-b border-border pb-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                  Navigation
                </p>

                <p className="mt-2 text-sm text-foreground-subtle">
                  Explore the work, experience and capabilities.
                </p>
              </div>

              <div className="space-y-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="group flex items-center justify-between rounded-2xl border border-border bg-white/[0.02] px-4 py-4 transition-colors hover:border-border-strong hover:bg-white/[0.04]"
                      initial={{ x: -12, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{
                        delay: 0.05 + index * 0.05,
                      }}
                    >
                      <span className="flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-background text-primary">
                          <Icon size={16} />
                        </span>

                        <span className="text-sm font-medium text-foreground">
                          {item.label}
                        </span>
                      </span>

                      <ArrowUpRight
                        size={16}
                        className="text-foreground-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                      />
                    </motion.a>
                  );
                })}
              </div>

              <div className="mt-auto">
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary px-5 py-4 text-sm font-semibold text-slate-950 transition-all hover:bg-primary-bright"
                >
                  Start a conversation
                  <ArrowUpRight size={16} />
                </a>

                <p className="mt-4 text-center font-mono text-[9px] uppercase tracking-[0.18em] text-foreground-subtle">
                  {profile.location}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
