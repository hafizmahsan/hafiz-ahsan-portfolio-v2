import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs text-foreground-subtle">
            © {year} {profile.name}. All rights reserved.
          </p>

          <p className="mt-1 text-[10px] text-foreground-subtle/60">
            Designed & engineered with automation, architecture and curiosity.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#home"
            className="text-[10px] uppercase tracking-[0.16em] text-foreground-subtle transition-colors hover:text-primary"
          >
            Back to top ↑
          </a>

          <span
            className="h-1 w-1 rounded-full bg-primary/50"
            aria-hidden="true"
          />

          <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-foreground-subtle/60">
            Automation · Architecture · Engineering
          </span>
        </div>
      </div>
    </footer>
  );
}
