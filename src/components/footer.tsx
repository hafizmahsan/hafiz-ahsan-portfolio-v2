"use client";

import { ArrowUp, Linkedin, Mail } from "lucide-react";

import { profile } from "@/data/profile";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Identity */}
          <div>
            <a
              href="#top"
              className="text-sm font-semibold tracking-tight text-foreground transition-colors hover:text-primary"
            >
              {profile.name}
            </a>

            <p className="mt-1 font-mono text-[7px] uppercase tracking-[0.14em] text-foreground-subtle">
              RPA · Automation · Solution Architecture
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-2">
            {profile.contact.email !== "your.email@example.com" && (
              <a
                href={`mailto:${profile.contact.email}`}
                aria-label="Send email"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-foreground-subtle transition-all duration-300 hover:border-primary/20 hover:bg-primary/[0.04] hover:text-primary"
              >
                <Mail size={13} />
              </a>
            )}

            {profile.contact.linkedin !==
              "https://www.linkedin.com/in/your-linkedin-profile/" && (
              <a
                href={profile.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-foreground-subtle transition-all duration-300 hover:border-primary/20 hover:bg-primary/[0.04] hover:text-primary"
              >
                <Linkedin size={13} />
              </a>
            )}

            <a
              href="#top"
              aria-label="Back to top"
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-foreground-subtle transition-all duration-300 hover:border-primary/20 hover:bg-primary/[0.04] hover:text-primary"
            >
              <ArrowUp size={13} />
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[7px] uppercase tracking-[0.12em] text-foreground-subtle">
            © {currentYear} {profile.name}. All rights reserved.
          </p>

          <p className="font-mono text-[7px] uppercase tracking-[0.12em] text-foreground-subtle">
            Built with Next.js · TypeScript · Three.js
          </p>
        </div>
      </div>
    </footer>
  );
}
