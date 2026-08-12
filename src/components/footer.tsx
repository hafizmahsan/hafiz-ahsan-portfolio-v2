"use client";

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

import { profile } from "@/data/profile";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Identity */}
          <div>
            <a
              href="#top"
              className="group inline-flex items-center gap-3"
              aria-label="Back to top"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-primary/20 bg-primary/[0.06] font-mono text-[11px] font-semibold text-primary">
                HM
              </span>

              <div>
                <p className="text-xs font-semibold tracking-tight text-foreground">
                  {profile.name}
                </p>

                <p className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.16em] text-foreground-subtle">
                  RPA Consultant · Solution Architect
                </p>
              </div>
            </a>
          </div>

          {/* Navigation */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-x-5 gap-y-3"
          >
            {[
              ["About", "#about"],
              ["Capabilities", "#skills"],
              ["Experience", "#experience"],
              ["Projects", "#projects"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-[10px] text-foreground-subtle transition-colors hover:text-primary"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Social / contact */}
          <div className="flex items-center gap-2">
            {profile.socials.github && (
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-white/[0.02] text-foreground-subtle transition-all duration-300 hover:border-primary/20 hover:bg-primary/[0.05] hover:text-primary"
              >
                <Github size={15} strokeWidth={1.7} />
              </a>
            )}

            {profile.socials.linkedin && (
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-white/[0.02] text-foreground-subtle transition-all duration-300 hover:border-primary/20 hover:bg-primary/[0.05] hover:text-primary"
              >
                <Linkedin size={15} strokeWidth={1.7} />
              </a>
            )}

            <a
              href={`mailto:${profile.contact.email}`}
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-white/[0.02] text-foreground-subtle transition-all duration-300 hover:border-primary/20 hover:bg-primary/[0.05] hover:text-primary"
            >
              <Mail size={15} strokeWidth={1.7} />
            </a>

            <a
              href="#top"
              aria-label="Back to top"
              className="ml-1 flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-white/[0.02] text-foreground-subtle transition-all duration-300 hover:border-primary/20 hover:bg-primary/[0.05] hover:text-primary"
            >
              <ArrowUp size={15} strokeWidth={1.7} />
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-foreground-subtle">
            © {currentYear} {profile.name}. All rights reserved.
          </p>

          <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-foreground-subtle">
            Built with Next.js · TypeScript · Three.js
          </p>
        </div>
      </div>
    </footer>
  );
}
