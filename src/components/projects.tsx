import { projects } from "@/data/projects";

const accentStyles = {
  cyan: {
    text: "text-primary",
    border: "group-hover:border-primary/30",
    glow: "bg-primary/10",
    line: "bg-primary",
  },
  violet: {
    text: "text-secondary",
    border: "group-hover:border-secondary/30",
    glow: "bg-secondary/10",
    line: "bg-secondary",
  },
  emerald: {
    text: "text-emerald-400",
    border: "group-hover:border-emerald-400/30",
    glow: "bg-emerald-400/10",
    line: "bg-emerald-400",
  },
  amber: {
    text: "text-amber-400",
    border: "group-hover:border-amber-400/30",
    glow: "bg-amber-400/10",
    line: "bg-amber-400",
  },
} as const;

function ProjectVisual({
  accent,
  pattern,
}: {
  accent: keyof typeof accentStyles;
  pattern: string;
}) {
  const styles = accentStyles[accent];

  return (
    <div className="relative h-56 overflow-hidden rounded-2xl border border-border bg-background">
      {/* Ambient glow */}
      <div
        className={`absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full ${styles.glow} blur-3xl`}
      />

      {/* Grid */}
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:32px_32px]" />

      {/* Pattern: network */}
      {pattern === "network" && (
        <div className="absolute inset-0">
          <span
            className={`absolute left-[20%] top-[25%] h-2 w-2 rounded-full ${styles.line} shadow-[0_0_16px_currentColor]`}
          />
          <span
            className={`absolute left-[50%] top-[45%] h-3 w-3 rounded-full ${styles.line} shadow-[0_0_20px_currentColor]`}
          />
          <span
            className={`absolute right-[20%] top-[30%] h-2 w-2 rounded-full ${styles.line} shadow-[0_0_16px_currentColor]`}
          />
          <span
            className={`absolute bottom-[25%] left-[35%] h-2 w-2 rounded-full ${styles.line}`}
          />
          <span
            className={`absolute bottom-[20%] right-[30%] h-2 w-2 rounded-full ${styles.line}`}
          />

          <div className="absolute left-[21%] top-[27%] h-px w-[31%] rotate-[20deg] bg-white/20" />
          <div className="absolute left-[51%] top-[46%] h-px w-[25%] -rotate-[24deg] bg-white/20" />
          <div className="absolute left-[36%] top-[46%] h-px w-[17%] rotate-[120deg] bg-white/15" />
          <div className="absolute left-[52%] top-[48%] h-px w-[22%] rotate-[35deg] bg-white/15" />
        </div>
      )}

      {/* Pattern: orbital */}
      {pattern === "orbital" && (
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
          <div className="absolute left-1/2 top-1/2 h-44 w-20 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[50%] border border-white/10" />
          <div className="absolute left-1/2 top-1/2 h-44 w-20 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-[50%] border border-white/10" />

          <div
            className={`absolute left-[calc(50%+42px)] top-[calc(50%-42px)] h-2.5 w-2.5 rounded-full ${styles.line} shadow-[0_0_18px_currentColor]`}
          />

          <div
            className={`absolute left-[calc(50%-55px)] top-[calc(50%+30px)] h-2 w-2 rounded-full ${styles.line}`}
          />
        </div>
      )}

      {/* Pattern: flow */}
      {pattern === "flow" && (
        <div className="absolute inset-0">
          <div className="absolute left-[15%] top-[30%] h-px w-[70%] rotate-[12deg] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="absolute left-[10%] top-[50%] h-px w-[80%] -rotate-[8deg] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute left-[20%] top-[65%] h-px w-[60%] rotate-[5deg] bg-gradient-to-r from-transparent via-white/15 to-transparent" />

          <div
            className={`absolute left-[28%] top-[42%] h-2 w-2 rounded-full ${styles.line} shadow-[0_0_16px_currentColor]`}
          />
          <div
            className={`absolute left-[58%] top-[48%] h-3 w-3 rounded-full ${styles.line} shadow-[0_0_20px_currentColor]`}
          />
          <div
            className={`absolute right-[22%] top-[36%] h-2 w-2 rounded-full ${styles.line}`}
          />
        </div>
      )}

      {/* Pattern: grid */}
      {pattern === "grid" && (
        <div className="absolute inset-8 grid grid-cols-6 grid-rows-4 gap-2">
          {Array.from({ length: 24 }).map((_, index) => (
            <span
              key={index}
              className={`rounded-sm border border-white/[0.04] ${
                index % 5 === 0 ? `${styles.glow} border-white/10` : ""
              }`}
            />
          ))}
        </div>
      )}

      {/* Project number */}
      <div className="absolute bottom-4 left-5 font-mono text-[9px] uppercase tracking-[0.2em] text-foreground-subtle">
        SYSTEM / VISUAL
      </div>
    </div>
  );
}

export function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section
      id="work"
      className="border-t border-border bg-background-elevated px-6 py-24 lg:px-8 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
              03 / Selected Work
            </p>

            <h2 className="mt-5 max-w-3xl font-display text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Automation projects built around real business problems.
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-6 text-foreground-subtle lg:text-right">
            A selection of enterprise automation, architecture and technology
            concepts.
          </p>
        </div>

        {/* Featured projects */}
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {featuredProjects.map((project, index) => {
            const styles = accentStyles[project.visual.accent];

            return (
              <article
                key={project.id}
                className={`group rounded-3xl border border-border bg-white/[0.015] p-4 transition-all duration-500 hover:-translate-y-1 ${styles.border} sm:p-5`}
              >
                <ProjectVisual
                  accent={project.visual.accent}
                  pattern={project.visual.pattern}
                />

                <div className="p-3 pt-6 sm:p-4 sm:pt-7">
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={`font-mono text-[10px] uppercase tracking-[0.18em] ${styles.text}`}
                    >
                      Project / {String(index + 1).padStart(3, "0")}
                    </span>

                    <span className="font-mono text-[10px] text-foreground-subtle">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-foreground">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-foreground-muted">
                    {project.shortDescription}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-white/[0.04] px-3 py-1.5 text-[10px] text-foreground-subtle"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center justify-between border-t border-border pt-5">
                    <span className="text-xs text-foreground-subtle">
                      {project.status}
                    </span>

                    <span
                      className={`text-xs font-medium ${styles.text} transition-transform duration-300 group-hover:translate-x-1`}
                    >
                      View case study →
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* More work */}
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {projects
            .filter((project) => !project.featured)
            .map((project) => {
              const styles = accentStyles[project.visual.accent];

              return (
                <article
                  key={project.id}
                  className={`group rounded-2xl border border-border bg-white/[0.01] p-6 transition-all duration-300 ${styles.border} hover:bg-white/[0.025]`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-mono text-[9px] uppercase tracking-[0.18em] ${styles.text}`}
                    >
                      {project.category}
                    </span>

                    <span className="font-mono text-[9px] text-foreground-subtle">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="mt-8 font-display text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-xs leading-5 text-foreground-subtle">
                    {project.shortDescription}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-white/[0.035] px-2.5 py-1 text-[9px] text-foreground-subtle"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
        </div>
      </div>
    </section>
  );
}
