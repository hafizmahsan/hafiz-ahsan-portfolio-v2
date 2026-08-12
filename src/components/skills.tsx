"use client";

import { motion } from "framer-motion";
import {
  Blocks,
  Braces,
  Cloud,
  Code2,
  Database,
  GitBranch,
} from "lucide-react";

import { skills } from "@/data/skills";

const icons = [Blocks, Braces, Cloud, Code2, Database, GitBranch, Code2];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative border-b border-border py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-2xl">
          <motion.p
            className="font-mono text-[8px] uppercase tracking-[0.2em] text-primary"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            02 / Capabilities
          </motion.p>

          <motion.h2
            className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.06 }}
          >
            Technical depth across the automation lifecycle.
          </motion.h2>

          <motion.p
            className="mt-5 text-sm leading-7 text-foreground-subtle sm:text-base sm:leading-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            From process discovery and solution architecture to development,
            integration and production support.
          </motion.p>
        </div>

        {/* Skill groups */}
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.article
                key={group.category}
                className="group rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-card-hover"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.55,
                  delay: Math.min(index * 0.05, 0.25),
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/15 bg-primary/[0.04] text-primary transition-colors duration-300 group-hover:border-primary/25 group-hover:bg-primary/[0.07]">
                    <Icon size={15} />
                  </div>

                  <span className="font-mono text-[7px] tracking-[0.14em] text-foreground-subtle">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-5 text-sm font-semibold tracking-tight text-foreground">
                  {group.category}
                </h3>

                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-border bg-white/[0.02] px-2 py-1 font-mono text-[8px] text-foreground-subtle transition-colors duration-300 group-hover:border-border-strong group-hover:text-foreground-muted"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
