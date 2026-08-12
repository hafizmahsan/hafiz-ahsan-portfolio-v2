import dynamic from "next/dynamic";
import { profile } from "@/data/profile";

const PortfolioScene = dynamic(
  () =>
    import("@/components/scene/portfolio-scene").then(
      (mod) => mod.PortfolioScene,
    ),
  {
    ssr: false,
    loading: () => (
      <div
        className="h-full w-full"
        aria-hidden="true"
      />
    ),
  },
);

export function Hero() {
  const { hero, stats } = profile;

  return (
    <section
      id="home"
      className="ambient-glow relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Technical background */}
      <div className="grid-background absolute inset-0 opacity-50" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_72%)]" />

      {/* 3D scene */}
      <div
        className="pointer-events-none absolute right-[-8%] top-1/2 hidden h-[46rem] w-[46rem] -translate-y-1/2 lg:block xl:right-[-4%]"
        aria-hidden="true"
      >
        <PortfolioScene />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-32 lg:px-8">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="reveal mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />

            <span className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-primary">
              {hero.eyebrow}
            </span>
          </div>

          {/* Heading */}
          <h1 className="reveal reveal-delay-1 font-display text-5xl font-semibold leading-[0.95] tracking-[-0.045em] text-foreground sm:text-7xl lg:text-[6.5rem]">
            {hero.title}
            <br />
            <span className="text-gradient">{hero.titleAccent}</span>
          </h1>

          {/* Introduction */}
          <p className="reveal reveal-delay-2 mt-8 max-w-2xl text-base leading-7 text-foreground-muted sm:text-lg sm:leading-8">
            {hero.description}
          </p>

          {/* Actions */}
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

        {/* Professional statistics */}
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

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 text-foreground-subtle sm:flex">
        <span className="font-mono text-[9px] uppercase tracking-[0.2em]">
          Scroll
        </span>

        <span className="h-10 w-px bg-gradient-to-b from-primary/70 to-transparent" />
      </div>
    </section>
  );
}
