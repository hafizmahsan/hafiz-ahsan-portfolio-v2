const stats = [
  {
    value: "6+",
    label: "Years in IT",
  },
  {
    value: "RPA",
    label: "Core Expertise",
  },
  {
    value: "SA",
    label: "Solution Architecture",
  },
  {
    value: "24/7",
    label: "Enterprise Mindset",
  },
];

const expertise = [
  "Robotic Process Automation",
  "Solution Architecture",
  "Enterprise Automation",
  "Process Optimization",
  "API & System Integration",
  "Digital Transformation",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <a
            href="#home"
            className="font-display text-lg font-semibold tracking-tight"
            aria-label="Hafiz Ahsan home"
          >
            HA<span className="text-primary">.</span>
          </a>

          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Main navigation"
          >
            <a
              href="#about"
              className="text-sm text-foreground-muted transition-colors hover:text-foreground"
            >
              About
            </a>

            <a
              href="#experience"
              className="text-sm text-foreground-muted transition-colors hover:text-foreground"
            >
              Experience
            </a>

            <a
              href="#work"
              className="text-sm text-foreground-muted transition-colors hover:text-foreground"
            >
              Work
            </a>

            <a
              href="#contact"
              className="text-sm text-foreground-muted transition-colors hover:text-foreground"
            >
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full border border-primary/30 bg-primary/5 px-5 py-2.5 text-sm font-medium text-primary transition-all hover:border-primary/60 hover:bg-primary/10 md:block"
          >
            Let's talk
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="ambient-glow relative flex min-h-screen items-center"
      >
        <div className="grid-background absolute inset-0 opacity-50" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_72%)]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-8">
          <div className="max-w-4xl">
            <div className="reveal mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />

              <span className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-primary">
                Automation · Architecture · Engineering
              </span>
            </div>

            <h1 className="reveal reveal-delay-1 font-display text-5xl font-semibold leading-[0.95] tracking-[-0.045em] text-foreground sm:text-7xl lg:text-[6.5rem]">
              Building systems
              <br />
              that{" "}
              <span className="text-gradient">
                work smarter.
              </span>
            </h1>

            <p className="reveal reveal-delay-2 mt-8 max-w-2xl text-base leading-7 text-foreground-muted sm:text-lg sm:leading-8">
              Hafiz Ahsan is a Senior RPA Consultant and Solution Architect
              specializing in enterprise automation, process optimization and
              scalable digital solutions.
            </p>

            <div className="reveal reveal-delay-3 mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-slate-950 transition-all hover:bg-primary-bright hover:shadow-[0_0_35px_rgba(34,211,238,0.22)]"
              >
                Explore my work
                <span
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-border bg-white/[0.02] px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-border-strong hover:bg-white/[0.05]"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="reveal reveal-delay-4 mt-20 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-background/90 px-5 py-6 backdrop-blur-xl sm:px-6"
              >
                <p className="font-display text-2xl font-semibold tracking-tight text-foreground">
                  {stat.value}
                </p>

                <p className="mt-1 text-xs text-foreground-subtle">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative 3D placeholder */}
        <div
          className="pointer-events-none absolute right-[-12rem] top-1/2 hidden h-[42rem] w-[42rem] -translate-y-1/2 lg:block"
          aria-hidden="true"
        >
          <div className="absolute inset-[15%] animate-pulse-glow rounded-full border border-primary/10 bg-primary/[0.025] blur-[1px]" />

          <div className="absolute inset-[25%] animate-float rounded-full border border-secondary/20 bg-gradient-to-br from-primary/[0.08] to-secondary/[0.05] shadow-[0_0_100px_rgba(34,211,238,0.08)]" />

          <div className="absolute inset-[38%] rounded-full bg-primary/20 blur-[50px]" />

          <div className="absolute inset-[39%] rounded-full border border-primary/30 bg-background/60 backdrop-blur-md" />
        </div>
      </section>

      {/* About preview */}
      <section
        id="about"
        className="relative border-t border-border bg-background-elevated"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-32">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
              01 / About
            </p>

            <h2 className="mt-5 max-w-md font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              From automation to architecture.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-foreground-muted">
              Over the course of my career, I have worked across enterprise
              environments where automation is more than simply removing
              repetitive tasks. The goal is to design dependable systems that
              connect people, processes and technology.
            </p>

            <p className="mt-6 text-base leading-7 text-foreground-subtle">
              My experience spans RPA development, solution design, enterprise
              integrations, process analysis and delivery for large
              organizations.
            </p>

            <div className="mt-10 flex flex-wrap gap-2">
              {expertise.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-white/[0.02] px-4 py-2 text-xs text-foreground-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience placeholder */}
      <section
        id="experience"
        className="relative border-t border-border px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
            02 / Experience
          </p>

          <div className="mt-6 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Six years of solving complex problems with automation.
            </h2>

            <span className="font-mono text-xs text-foreground-subtle">
              2020 — PRESENT
            </span>
          </div>

          <div className="mt-16 border-t border-border">
            <div className="flex flex-col gap-4 border-b border-border py-8 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-lg font-medium text-foreground">
                  Senior RPA Consultant
                </p>
                <p className="mt-1 text-sm text-foreground-subtle">
                  Tawuniya · Technology / Muroon
                </p>
              </div>

              <span className="font-mono text-xs text-primary">
                2026 — PRESENT
              </span>
            </div>

            <div className="flex flex-col gap-4 border-b border-border py-8 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-lg font-medium text-foreground">
                  Senior RPA Developer & Solution Architect
                </p>
                <p className="mt-1 text-sm text-foreground-subtle">
                  TechVista Systems · Etisalat engagement
                </p>
              </div>

              <span className="font-mono text-xs text-foreground-subtle">
                PREVIOUS
              </span>
            </div>

            <div className="flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-lg font-medium text-foreground">
                  RPA Consultant / Developer
                </p>
                <p className="mt-1 text-sm text-foreground-subtle">
                  Systems Limited · Visionet Systems
                </p>
              </div>

              <span className="font-mono text-xs text-foreground-subtle">
                2020 — 2024
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Work placeholder */}
      <section
        id="work"
        className="border-t border-border bg-background-elevated px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
            03 / Selected Work
          </p>

          <h2 className="mt-5 max-w-3xl font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Automation projects built around real business problems.
          </h2>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            <article className="glass group rounded-3xl p-7 transition-transform duration-500 hover:-translate-y-1 sm:p-9">
              <span className="font-mono text-xs text-primary">
                PROJECT / 001
              </span>

              <h3 className="mt-12 font-display text-2xl font-semibold text-foreground">
                Enterprise Process Automation
              </h3>

              <p className="mt-4 text-sm leading-6 text-foreground-muted">
                A scalable automation initiative focused on reducing manual
                operations, improving processing consistency and creating
                measurable business value.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {["RPA", "Architecture", "Integration"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/[0.04] px-3 py-1.5 text-xs text-foreground-subtle"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>

            <article className="glass group rounded-3xl p-7 transition-transform duration-500 hover:-translate-y-1 sm:p-9">
              <span className="font-mono text-xs text-secondary">
                PROJECT / 002
              </span>

              <h3 className="mt-12 font-display text-2xl font-semibold text-foreground">
                Intelligent Automation Platform
              </h3>

              <p className="mt-4 text-sm leading-6 text-foreground-muted">
                A conceptual enterprise automation platform connecting
                processes, APIs, applications and human decision points into
                a more efficient digital workflow.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {["Automation", "APIs", "Solution Design"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/[0.04] px-3 py-1.5 text-xs text-foreground-subtle"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative overflow-hidden border-t border-border px-6 py-24 lg:px-8 lg:py-40"
      >
        <div className="grid-background absolute inset-0 opacity-30" />

        <div className="relative mx-auto max-w-4xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
            04 / Contact
          </p>

          <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.03em] text-foreground sm:text-6xl">
            Have a complex problem?
            <br />
            <span className="text-gradient">Let's automate it.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-foreground-muted">
            Whether you're looking for an automation consultant, solution
            architect or someone who can turn a difficult process into a
            scalable system, let's start a conversation.
          </p>

          <a
            href="mailto:hello@example.com"
            className="mt-10 inline-flex rounded-full bg-primary px-7 py-4 text-sm font-semibold text-slate-950 transition-all hover:bg-primary-bright hover:shadow-[0_0_45px_rgba(34,211,238,0.22)]"
          >
            Start a conversation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-xs text-foreground-subtle sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Hafiz Ahsan. All rights reserved.
          </p>

          <p className="font-mono">
            AUTOMATION · ARCHITECTURE · ENGINEERING
          </p>
        </div>
      </footer>
    </main>
  );
}
