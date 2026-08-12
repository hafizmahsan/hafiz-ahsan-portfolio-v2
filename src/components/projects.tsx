"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Layers3,
  Sparkles,
} from "lucide-react";

import { projects } from "@/data/projects";

const reveal = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(
    () => [
      "All",
      ...Array.from(new Set(projects.map((project) => project.category))),
    ],
    [],
  );

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter(
      (project) => project.category === activeCategory,
    );
  }, [activeCategory]);

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section
      id="projects"
      className="relative border-t border-border py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
        >
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />

              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
                Selected work
              </span>
            </div>

            <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl lg:text-5xl">
              Automation built around real problems.
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-foreground-muted sm:text-base sm:leading-8">
              A selection of enterprise automation, architecture and
              consulting initiatives. Project details can be expanded as the
              portfolio evolves.
            </p>
          </div>

          <div className="hidden items-center gap-2 rounded-full border border-border bg-white/[0.02] px-3.5 py-2 sm:flex">
            <Sparkles size={13} className="text-primary" />

            <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-foreground-subtle">
              {featuredProjects.length} featured projects
            </span>
          </div>
        </motion.div>

        {/* Featured project */}
        {activeCategory === "All" && featuredProjects.length > 0 && (
          <motion.div
            className="mt-14 overflow-hidden rounded-3xl border border-primary/10 bg-white/[0.025] lg:mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={reveal}
          >
            <div className="relative grid lg:grid-cols-[1.2fr_0.8fr]">
              {/* Visual panel */}
              <div className="relative min-h-[360px] overflow-hidden border-b border-border lg:border-b-0 lg:border-r">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(34,211,238,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.8) 1px, transparent 1px)",
                    backgroundSize: "42px 42px",
                  }}
                />

                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.08] blur-[90px]"
                />

                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="relative w-full max-w-md">
                    {/* Fake architecture visualization */}
                    <div className="rounded-3xl border border-primary/15 bg-background/80 p-5 shadow-2xl shadow-cyan-950/20 backdrop-blur-sm">
                      <div className="flex items-center justify-between border-b border-border pb-4">
                        <div className="flex items-center gap-2">
                          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/[0.08] text-primary">
                            <Layers3 size={14} />
                          </div>

                          <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-foreground-muted">
                            Automation system
                          </span>
                        </div>

                        <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
                      </div>

                      <div className="grid grid-cols-3 gap-2 py-6">
                        {[
                          "Input",
                          "Process",
                          "Output",
                          "Validate",
                          "Automate",
                          "Monitor",
                        ].map((node, index) => (
                          <motion.div
                            key={node}
                            className="rounded-xl border border-border bg-white/[0.025] px-2 py-4 text-center"
                            animate={{
                              borderColor:
                                index % 2 === 0
                                  ? [
                                      "rgba(255,255,255,0.08)",
                                      "rgba(34,211,238,0.25)",
                                      "rgba(255,255,255,0.08)",
                                    ]
                                  : undefined,
                            }}
                            transition={{
                              duration: 3,
                              repeat: Infinity,
                              delay: index * 0.3,
                            }}
                          >
                            <span className="text-[9px] text-foreground-muted">
                              {node}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between border-t border-border pt-4">
                        <span className="font-mono text-[8px] uppercase tracking-[0.12em] text-foreground-subtle">
                          Enterprise workflow
                        </span>

                        <span className="font-mono text-[8px] text-primary">
                          ACTIVE
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Featured content */}
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-primary/20 bg-primary/[0.06] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-primary">
                    Featured
                  </span>

                  <span className="font-mono text-[9px] text-foreground-subtle">
                    {featuredProjects[0].year}
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-semibold tracking-[-0.035em] text-foreground sm:text-3xl">
                  {featuredProjects[0].title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-foreground-muted">
                  {featuredProjects[0].description}
                </p>

                <div className="mt-7 grid grid-cols-3 gap-2">
                  {featuredProjects[0].impact.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-border bg-background/50 p-3"
                    >
                      <p className="text-sm font-semibold text-primary">
                        {metric.value}
                      </p>

                      <p className="mt-1 text-[9px] leading-4 text-foreground-subtle">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {featuredProjects[0].technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-border px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-[0.08em] text-foreground-subtle"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    const element = document.getElementById(
                      `project-${featuredProjects[0].id}`,
                    );

                    element?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }}
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-2.5 text-[10px] font-medium text-primary transition-colors hover:bg-primary/[0.1]"
                >
                  Explore project
                  <ArrowUpRight size={13} />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Filters */}
        <div className="mt-12 flex gap-2 overflow-x-auto pb-2 scrollbar-none lg:mt-16">
          {categories.map((category) => {
            const active = category === activeCategory;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-full border px-4 py-2 font-mono text-[9px] uppercase tracking-[0.12em] transition-all duration-300 ${
                  active
                    ? "border-primary/30 bg-primary/[0.08] text-primary"
                    : "border-border bg-white/[0.02] text-foreground-subtle hover:border-primary/15 hover:text-foreground-muted"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Project grid */}
        <motion.div
          layout
          className="mt-5 grid gap-5 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                id={`project-${project.id}`}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.03,
                }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-white/[0.02] p-6 transition-colors duration-500 hover:border-primary/15 hover:bg-white/[0.035] sm:p-8"
              >
                <div
                  aria-hidden="true"
                  className="absolute right-0 top-0 h-36 w-36 translate-x-1/3 -translate-y-1/3 rounded-full bg-violet-500/[0.04] blur-3xl transition-all duration-500 group-hover:bg-violet-500/[0.08]"
                />

                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-primary">
                      {project.category}
                    </span>

                    <span className="font-mono text-[9px] text-foreground-subtle">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold tracking-[-0.025em] text-foreground">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-xs leading-6 text-foreground-muted">
                    {project.description}
                  </p>

                  {/* Role */}
                  <div className="mt-6 rounded-2xl border border-border bg-background/40 p-3.5">
                    <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-foreground-subtle">
                      Role
                    </p>

                    <p className="mt-1.5 text-[11px] text-foreground-muted">
                      {project.role}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-[0.08em] text-foreground-subtle"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="mt-7 flex items-center justify-between border-t border-border pt-5">
                    <span className="text-[10px] text-foreground-subtle">
                      Case study ready
                    </span>

                    <div className="flex items-center gap-3">
                      {project.links?.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} GitHub`}
                          className="text-foreground-subtle transition-colors hover:text-primary"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}

                      <span className="flex items-center gap-1.5 text-[10px] font-medium text-primary">
                        View
                        <ArrowUpRight
                          size={13}
                          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="mt-5 rounded-3xl border border-dashed border-border p-12 text-center">
            <p className="text-sm text-foreground-muted">
              No projects found in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
