"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative border-b border-border py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl">
          <motion.p
            className="font-mono text-[8px] uppercase tracking-[0.2em] text-primary"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            04 / Selected work
          </motion.p>

          <motion.h2
            className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.06 }}
          >
            Automation built around measurable business needs.
          </motion.h2>

          <motion.p
            className="mt-5 max-w-2xl text-sm leading-7 text-foreground-subtle sm:text-base sm:leading-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            Selected examples of enterprise automation, integration and
            architecture work. Details are intentionally presented at a
            non-confidential level.
          </motion.p>
        </div>

        {/* Project grid */}
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 hover:bg-card-hover sm:p-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.65,
                delay: Math.min(index * 0.07, 0.25),
              }}
            >
              {/* Accent */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-primary via-primary/40 to-transparent transition-transform duration-500 group-hover:scale-x-100"
              />

              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-primary">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.025em] text-foreground">
                    {project.title}
                  </h3>

                  {project.client && (
                    <p className="mt-1 text-xs text-foreground-subtle">
                      {project.client}
                    </p>
                  )}
                </div>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border font-mono text-[8px] text-foreground-subtle transition-colors duration-300 group-hover:border-primary/20 group-hover:text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="mt-6 text-sm leading-7 text-foreground-muted">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6">
                <p className="font-mono text-[7px] uppercase tracking-[0.15em] text-foreground-subtle">
                  Technology
                </p>

                <div className="mt-2 flex flex-wrap gap-1.5">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-border bg-white/[0.02] px-2 py-1 font-mono text-[8px] text-foreground-subtle"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* Impact */}
              {project.impact && (
                <div className="mt-6 border-l border-primary/25 pl-4">
                  <p className="font-mono text-[7px] uppercase tracking-[0.15em] text-primary">
                    Impact
                  </p>

                  <p className="mt-2 text-xs leading-6 text-foreground-subtle">
                    {project.impact}
                  </p>
                </div>
              )}

              {/* Highlights */}
              {project.highlights.length > 0 && (
                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex gap-2 rounded-lg border border-border bg-white/[0.012] px-3 py-2.5"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/70"
                      />

                      <span className="text-xs leading-5 text-foreground-subtle">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Optional link */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-medium text-foreground-muted transition-colors hover:text-primary"
                >
                  View project
                  <ExternalLink size={12} />
                </a>
              )}

              {/* Bottom action */}
              <div className="mt-7 flex items-center justify-between border-t border-border pt-5">
                <span className="font-mono text-[7px] uppercase tracking-[0.14em] text-foreground-subtle">
                  Case study available on request
                </span>

                <a
                  href="#contact"
                  aria-label={`Discuss ${project.title}`}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground-subtle transition-all duration-300 hover:border-primary/25 hover:bg-primary/[0.05] hover:text-primary"
                >
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
