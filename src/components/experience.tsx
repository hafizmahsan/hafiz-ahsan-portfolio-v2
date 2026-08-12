import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative border-t border-border px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
              02 / Experience
            </p>

            <h2 className="mt-6 max-w-3xl font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Six years of solving complex problems with automation.
            </h2>
          </div>

          <span className="font-mono text-xs text-foreground-subtle">
            2020 — PRESENT
          </span>
        </div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Timeline line */}
          <div
            className="absolute bottom-0 left-[7px] top-0 w-px bg-gradient-to-b from-primary via-border to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-0">
            {experience.map((item, index) => (
              <article
                key={item.id}
                className="group relative grid gap-6 pb-12 pl-10 last:pb-0 md:grid-cols-[180px_1fr] md:gap-10 md:pl-0"
              >
                {/* Timeline point */}
                <div
                  className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border border-primary/50 bg-background transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:shadow-[0_0_20px_rgba(34,211,238,0.35)] md:left-[180px] md:-translate-x-1/2"
                  aria-hidden="true"
                />

                {/* Date */}
                <div className="md:pt-1">
                  <p className="font-mono text-xs text-primary">
                    {item.period}
                  </p>

                  <p className="mt-2 text-[10px] uppercase tracking-wider text-foreground-subtle">
                    {item.companyType}
                  </p>
                </div>

                {/* Experience card */}
                <div className="rounded-2xl border border-border bg-white/[0.015] p-6 transition-all duration-300 group-hover:border-primary/20 group-hover:bg-primary/[0.02] sm:p-7">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                        {item.role}
                      </h3>

                      <p className="mt-1 text-sm text-primary/80">
                        {item.company}
                      </p>
                    </div>

                    {item.featured && (
                      <span className="w-fit rounded-full border border-primary/20 bg-primary/5 px-3 py-1 font-mono text-[9px] uppercase tracking-wider text-primary">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="mt-5 max-w-3xl text-sm leading-6 text-foreground-muted">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <div className="mt-6 grid gap-2 sm:grid-cols-2">
                    {item.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex gap-2 text-xs leading-5 text-foreground-subtle"
                      >
                        <span
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/70"
                          aria-hidden="true"
                        />

                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-white/[0.04] px-3 py-1.5 text-[10px] text-foreground-subtle"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Progress indicator */}
                <span className="absolute bottom-12 right-0 font-mono text-[9px] text-foreground-subtle/40 md:bottom-12">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
