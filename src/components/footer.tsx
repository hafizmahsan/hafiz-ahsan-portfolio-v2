"use client";

import { ArrowUp, Linkedin, Mail } from "lucide-react";

import { profile } from "@/data/profile";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          {/* Identity */}
          <div>
            <a
              href="#top"
              className="group inline-flex items-center gap-3"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/20 bg-primary/[0.05] font-mono text-[10px] font-semibold text-primary transition-colors duration-300 group-hover:border-primary/35 group-hover:bg-primary/[0.09]">
                HM
              </span>

              <div>
                <p className="text-sm font-semibold tracking-tight text-foreground">
                  {profile.name}
                </p>

                <p className="mt-0.5 font-mono text-[7px] uppercase tracking-[0.16em] text-foreground-subtle">
                  RPA · Automation · Architecture
                </p>
              </div>
            </a>

            <p className="mt-5 max-w-md text-xs leading-6 text-foreground-subtle">
              Building intelligent automation solutions and translating
              complex business processes into scalable technology.
            </p>
          </div>

          {/* Navigation + social */}
          <div className="flex flex-col gap-5 lg:items-end">
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <a
                href="#about"
                className="text-[10px] text-foreground-subtle transition-colors hover:text-primary"
              >
                About
              </a>

              <a
                href="#skills"
                className="text-[10px] text-foreground-subtle transition-colors hover:text-primary"
              >
                Capabilities
              </a>

              <a
                href="#experience"
                className="text-[10px] text-foreground-subtle transition-colors hover:text-primary"
              >
                Experience
              </a>

              <a
                href="#projects"
                className="text-[10px] text-foreground-subtle transition-colors hover:text-primary"
              >
                Projects
              </a>

              <a
                href="#contact"
                className="text-[10px] text-foreground-subtle transition-colors hover:text-primary"
              >
                Contact
              </a>
            </div>

            <div className="flex items-center gap-2">
              {profile.contact.email && (
                <a
                  href={`mailto:${profile.contact.email}`}
                  aria-label="Email"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-white/[0.02] text-foreground-subtle transition-all duration-300 hover:border-primary/20 hover:bg-primary/[0.04] hover:text-primary"
                >
                  <Mail size={13} />
                </a>
              )}

              {profile.contact.linkedin && (
                <a
                  href={profile.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-white/[0.02] text-foreground-subtle transition-all duration-300 hover:border-primary/20 hover:bg-primary/[0.04] hover:text-primary"
                >
                  <Linkedin size={13} />
                </a>
              )}

              <a
                href="#top"
                aria-label="Back to top"
                className="ml-1 flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-white/[0.02] text-foreground-subtle transition-all duration-300 hover:border-primary/20 hover:bg-primary/[0.04] hover:text-primary"
              >
                <ArrowUp size={13} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-9 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-foreground-subtle">
            © {currentYear} {profile.name}
          </p>

          <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-foreground-subtle">
            Designed · Engineered · Automated
          </p>
        </div>
      </div>
    </footer>
  );
}
