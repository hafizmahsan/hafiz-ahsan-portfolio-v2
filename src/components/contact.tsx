import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border px-6 py-24 lg:px-8 lg:py-40"
    >
      {/* Technical background */}
      <div className="grid-background absolute inset-0 opacity-30" />

      <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.04] blur-[100px]" />

      {/* Content */}
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
          04 / Contact
        </p>

        <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.03em] text-foreground sm:text-6xl">
          Have a complex problem?
          <br />
          <span className="text-gradient">Let&apos;s automate it.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-foreground-muted">
          Whether you&apos;re looking for an automation consultant, solution
          architect or someone who can turn a difficult process into a scalable
          system, let&apos;s start a conversation.
        </p>

        {/* Primary CTA */}
        <a
          href={`mailto:${profile.contact.email}`}
          className="mt-10 inline-flex rounded-full bg-primary px-7 py-4 text-sm font-semibold text-slate-950 transition-all hover:bg-primary-bright hover:shadow-[0_0_45px_rgba(34,211,238,0.22)]"
        >
          Start a conversation
        </a>

        {/* Contact details */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <a
            href={`mailto:${profile.contact.email}`}
            className="text-sm text-foreground-subtle transition-colors hover:text-primary"
          >
            {profile.contact.email}
          </a>

          <span
            className="hidden h-1 w-1 rounded-full bg-border-strong sm:block"
            aria-hidden="true"
          />

          <span className="text-sm text-foreground-subtle">
            {profile.location}
          </span>
        </div>

        {/* Social links */}
        <div className="mt-8 flex justify-center gap-3">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border bg-white/[0.02] px-4 py-2 text-xs text-foreground-muted transition-all hover:border-border-strong hover:text-foreground"
          >
            GitHub
          </a>

          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-border bg-white/[0.02] px-4 py-2 text-xs text-foreground-muted transition-all hover:border-border-strong hover:text-foreground"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
