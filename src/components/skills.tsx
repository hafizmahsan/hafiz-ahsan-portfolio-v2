"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Braces,
  CloudCog,
  Database,
  GitBranch,
  Layers3,
  Workflow,
} from "lucide-react";

import { skills } from "@/data/skills";

const categoryIcons = [
  Bot,
  Workflow,
  Layers3,
  CloudCog,
  Database,
  GitBranch,
  Braces,
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative border-t border-border py-24 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-primary">
            02 · Capabilities
          </p>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Tools are the implementation layer.
            <br />
            <span className="text-foreground-muted">
              Architecture is the advantage.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-foreground-subtle sm:text-base sm:leading-8">
            A practical technology stack built around enterprise automation,
            process engineering, integration and scalable solution delivery.
          </p>
        </motion.div>

        {/* Capability grid */}
        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => {
            const Icon =
              categoryIcons[index % categoryIcons.length];

            return (
              <motion.article
                key={group.category}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/15 hover:bg-card-hover"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* Accent glow */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/[0.045] blur-3xl transition-all duration-500 group-hover:bg-primary/[0.09]" />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white/[0.02] text-primary transition-all duration-300 group-hover:border-primary/20 group-hover:bg-primary/[0.05]">
                      <Icon size={17} strokeWidth={1.6} />
                    </div>

                    <span className="font-mono text-[8px] tracking-[0.15em] text-foreground-subtle">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-6 text-sm font-semibold text-foreground">
                    {group.category}
                  </h3>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-border bg-white/[0.02] px-2.5 py-1.5 font-mono text-[9px] text-foreground-muted transition-colors duration-300 group-hover:border-border-strong group-hover:text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          className="mt-4 rounded-2xl border border-primary/10 bg-primary/[0.025] p-6 sm:p-8"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.65,
            delay: 0.15,
          }}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-primary">
                Engineering principle
              </p>

              <p className="mt-2 text-sm text-foreground-muted">
                Select the technology based on the problem — not the other way
                around.
              </p>
            </div>

            <a
              href="#experience"
              className="shrink-0 text-xs font-medium text-primary transition-colors hover:text-primary-bright"
            >
              See how it has been applied →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
