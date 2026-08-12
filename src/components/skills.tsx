"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Check,
  Code2,
  Layers3,
  Network,
  Workflow,
} from "lucide-react";

import { skillGroups, technologyStack } from "@/data/skills";

const icons = [
  Workflow,
  Layers3,
  Network,
  BrainCircuit,
  Code2,
  Check,
];

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

export function Skills() {
  return (
    <section
      id="skills"
      className="relative border-t border-border py-24 sm:py-32 lg:py-40"
    >
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={reveal}
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />

            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
              Capabilities
            </span>
          </div>

          <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl lg:text-5xl">
            The systems I work across.
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-foreground-muted sm:text-base sm:leading-8">
            A combination of automation engineering, solution architecture,
            enterprise integration and consulting experience developed through
            real-world technology environments.
          </p>
        </motion.div>

        {/* Capability matrix */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border lg:mt-20 lg:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.article
                key={group.id}
                className="group relative bg-background p-6 transition-colors duration-500 hover:bg-white/[0.025] sm:p-8"
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                variants={reveal}
                transition={{
                  delay: index * 0.05,
                }}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-0 top-0 h-32 w-32 translate-x-1/3 -translate-y-1/3 rounded-full bg-cyan-400/[0.035] blur-3xl transition-all duration-500 group-hover:bg-cyan-400/[0.07]"
                />

                <div className="relative">
                  {/* Card header */}
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/[0.06] text-primary">
                        <Icon size={19} strokeWidth={1.6} />
                      </div>

                      <div>
                        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground-subtle">
                          {group.category}
                        </span>

                        <h3 className="mt-1 text-base font-semibold tracking-tight text-foreground">
                          {group.title}
                        </h3>
                      </div>
                    </div>

                    <span className="hidden font-mono text-[9px] uppercase tracking-[0.16em] text-foreground-subtle sm:block">
                      Capability
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-6 max-w-xl text-xs leading-6 text-foreground-muted">
                    {group.description}
                  </p>

                  {/* Skills */}
                  <div className="mt-7 space-y-3">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between gap-4 border-b border-border/70 pb-3 last:border-0 last:pb-0"
                      >
                        <span className="text-xs text-foreground-muted">
                          {skill.name}
                        </span>

                        <div className="flex shrink-0 items-center gap-3">
                          {skill.years && (
                            <span className="hidden font-mono text-[9px] text-foreground-subtle sm:block">
                              {skill.years}
                            </span>
                          )}

                          <span
                            className={`rounded-full border px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.12em] ${
                              skill.level === "Expert"
                                ? "border-primary/25 bg-primary/[0.07] text-primary"
                                : skill.level === "Advanced"
                                  ? "border-violet-400/20 bg-violet-400/[0.05] text-violet-300"
                                  : "border-border bg-white/[0.02] text-foreground-subtle"
                            }`}
                          >
                            {skill.level}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Technology stack */}
        <motion.div
          className="mt-5 rounded-3xl border border-border bg-white/[0.02] p-6 sm:p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={reveal}
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-primary">
                Technology focus
              </p>

              <h3 className="mt-2 text-sm font-semibold text-foreground">
                Tools, systems and disciplines
              </h3>
            </div>

            <p className="max-w-md text-xs leading-5 text-foreground-subtle sm:text-right">
              A flexible technology foundation supporting enterprise
              automation and solution delivery.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {technologyStack.map((technology, index) => (
              <motion.span
                key={technology}
                className="rounded-full border border-border bg-background px-3.5 py-2 font-mono text-[9px] uppercase tracking-[0.08em] text-foreground-muted transition-colors hover:border-primary/20 hover:text-primary"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.025,
                  duration: 0.3,
                }}
              >
                {technology}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
