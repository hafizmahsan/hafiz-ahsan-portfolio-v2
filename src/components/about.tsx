import { profile } from "@/data/profile";
import { skills } from "@/data/skills";

export function About() {
  const featuredSkills = skills.filter((skill) => skill.featured).slice(0, 6);

  return (
    <section
      id="about"
      className="relative border-t border-border bg-background-elevated"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-32">
        {/* Section introduction */}
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
            01 / About
          </p>

          <h2 className="mt-5 max-w-md font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            From automation to architecture.
          </h2>

          <div className="mt-8 hidden h-px w-24 bg-gradient-to-r from-primary to-transparent lg:block" />
        </div>

        {/* Content */}
        <div>
          <p className="text-lg leading-8 text-foreground-muted">
            {profile.about}
          </p>

          <p className="mt-6 text-base leading-7 text-foreground-subtle">
            {profile.philosophy}
          </p>

          {/* Focus areas */}
          <div className="mt-10">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground-subtle">
              Core Focus
            </p>

            <div className="flex flex-wrap gap-2">
              {profile.focusAreas.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-white/[0.02] px-4 py-2 text-xs text-foreground-muted transition-colors hover:border-primary/30 hover:text-primary"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Expertise */}
          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            {featuredSkills.map((skill, index) => (
              <div
                key={skill.id}
                className="group rounded-2xl border border-border bg-white/[0.015] p-5 transition-all duration-300 hover:border-primary/20 hover:bg-primary/[0.025]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-[10px] text-foreground-subtle">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-[10px] uppercase tracking-wider text-primary/70">
                    {skill.level}
                  </span>
                </div>

                <h3 className="mt-5 text-sm font-semibold text-foreground">
                  {skill.name}
                </h3>

                <p className="mt-2 text-xs leading-5 text-foreground-subtle">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
