"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Layers3,
  Sparkles,
} from "lucide-react";

import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative border-t border-border py-24 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="grid gap-8 lg:grid-cols-[0.45fr_1fr] lg:gap-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-primary">
              04 · Selected Work
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Automation built around real problems.
            </h2>
          </div>

          <p className="max-w-3xl text-sm leading-7 text-foreground-muted sm:text-base sm:leading-8">
            A selection of automation, integration and technology initiatives
            demonstrating how business processes can be transformed into
            reliable digital workflows.
          </p>
        </motion.div>

        {/* Project list */}
        <div className="mt-14 space-y-4 lg:mt-20">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:border-primary/15 hover:bg-card-hover"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.6,
                delay: index * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Background accent */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/[0.025] blur-3xl transition-all duration-700 group-hover:bg-primary/[0.07]"
              />

              <div className="relative grid lg:grid-cols-[0.8fr_1.2fr]">
                {/* Project identity */}
                <div className="border-b border-border p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/15 bg-primary/[0.045] text-primary">
                      {index === 0 ? (
                        <Sparkles size={18} strokeWidth={1.6} />
                      ) : (
                        <Layers3 size={18} strokeWidth={1.6} />
                      )}
                    </div>

                    <span className="font-mono text-[8px] tracking-[0.18em] text-foreground-subtle">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mt-8 font-mono text-[8px] uppercase tracking-[0.16em] text-primary">
                    {project.category}
                  </p>

                  <h3 className="mt-2 max-w-md text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                    {project.title}
                  </h3>

                  {project.client && (
                    <p className="mt-3 text-[10px] text-foreground-subtle">
                      Client ·{" "}
                      <span className="text-foreground-muted">
                        {project.client}
                      </span>
                    </p>
                  )}

                  {/* Technology tags */}
                  {project.technologies &&
                    project.technologies.length > 0 && (
                      <div className="mt-7 flex flex-wrap gap-2">
                        {project.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-lg border border-border bg-white/[0.02] px-2.5 py-1.5 font-mono text-[8px] text-foreground-subtle"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    )}

                  {/* External project link */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link mt-8 inline-flex items-center gap-2 text-[10px] font-medium text-primary transition-colors hover:text-primary-bright"
                    >
                      View project

                      <ExternalLink
                        size={12}
                        className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      />
                    </a>
                  )}
                </div>

                {/* Project details */}
                <div className="p-6 sm:p-8 lg:p-10">
                  <div>
                    <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-foreground-subtle">
                      Overview
                    </p>

                    <p className="mt-3 max-w-3xl text-sm leading-7 text-foreground-muted">
                      {project.description}
                    </p>
                  </div>

                  {project.impact && (
                    <div className="mt-8 rounded-2xl border border-primary/10 bg-primary/[0.025] p-5">
                      <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-primary">
                        Impact
                      </p>

                      <p className="mt-2 text-sm leading-6 text-foreground">
                        {project.impact}
                      </p>
                    </div>
                  )}

                  {project.highlights &&
                    project.highlights.length > 0 && (
                      <div className="mt-8">
                        <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-foreground-subtle">
                          Delivery highlights
                        </p>

                        <div className="mt-4 grid gap-2 sm:grid-cols-2">
                          {project.highlights.map((highlight) => (
                            <div
                              key={highlight}
                              className="rounded-xl border border-border bg-white/[0.015] px-3.5 py-3 text-[10px] leading-5 text-foreground-subtle"
                            >
                              <span className="mr-2 text-primary">+</span>
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                  <div className="mt-8 flex items-center justify-between border-t border-border pt-5">
                    <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-foreground-subtle">
                      Case study {String(index + 1).padStart(2, "0")}
                    </span>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-[10px] font-medium text-foreground-muted transition-colors hover:text-primary"
                    >
                      Discuss a similar challenge

                      <ArrowUpRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Closing CTA */}
        <motion.div
          className="mt-5 rounded-3xl border border-primary/10 bg-primary/[0.025] p-7 sm:p-9"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.65,
          }}
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-primary">
                Have a process worth automating?
              </p>

              <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
                Let's turn the problem into an automation strategy.
              </h3>
            </div>

            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-xs font-semibold text-slate-950 transition-all duration-300 hover:bg-primary-bright hover:shadow-[0_0_35px_rgba(34,211,238,0.16)]"
            >
              Start a conversation
              <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
