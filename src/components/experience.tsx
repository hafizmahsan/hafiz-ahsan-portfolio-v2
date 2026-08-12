"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  CalendarDays,
  MapPin,
} from "lucide-react";

import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
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
              03 · Experience
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Six years of moving from automation delivery to architecture.
            </h2>
          </div>

          <p className="max-w-3xl text-sm leading-7 text-foreground-muted sm:text-base sm:leading-8">
            A career shaped by hands-on development, consulting, enterprise
            delivery and increasingly strategic responsibility across
            automation and technology initiatives.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-16 lg:mt-20">
          {/* Vertical line */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[15px] top-0 w-px bg-gradient-to-b from-primary/30 via-border to-transparent sm:left-[19px]"
          />

          <div className="space-y-4">
            {experience.map((role, index) => (
              <motion.article
                key={`${role.company}-${role.title}-${role.period}`}
                className="relative pl-10 sm:pl-12"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* Timeline node */}
                <div className="absolute left-[8px] top-7 flex h-4 w-4 items-center justify-center rounded-full border border-primary/20 bg-background sm:left-[12px]">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      index === 0
                        ? "bg-primary shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                        : "bg-foreground-subtle"
                    }`}
                  />
                </div>

                <div
                  className={`group relative overflow-hidden rounded-2xl border p-5 transition-all duration-500 sm:p-6 lg:p-7 ${
                    index === 0
                      ? "border-primary/15 bg-primary/[0.025]"
                      : "border-border bg-card hover:border-primary/10 hover:bg-card-hover"
                  }`}
                >
                  {/* Current-role glow */}
                  {index === 0 && (
                    <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 translate-x-1/4 -translate-y-1/4 rounded-full bg-primary/[0.05] blur-3xl" />
                  )}

                  <div className="relative">
                    {/* Top row */}
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-base font-semibold text-foreground sm:text-lg">
                            {role.title}
                          </h3>

                          {index === 0 && (
                            <span className="rounded-full border border-emerald-400/15 bg-emerald-400/[0.05] px-2 py-1 font-mono text-[7px] uppercase tracking-[0.12em] text-emerald-300">
                              Current
                            </span>
                          )}
                        </div>

                        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] text-foreground-subtle">
                          <span className="inline-flex items-center gap-1.5">
                            <Building2 size={12} className="text-primary" />
                            {role.company}
                          </span>

                          {role.location && (
                            <span className="inline-flex items-center gap-1.5">
                              <MapPin size={12} />
                              {role.location}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="inline-flex shrink-0 items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-foreground-subtle">
                        <CalendarDays size={11} />
                        {role.period}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="relative mt-6 max-w-4xl text-xs leading-6 text-foreground-muted sm:text-sm sm:leading-7">
                      {role.description}
                    </p>

                    {/* Highlights */}
                    {role.highlights && role.highlights.length > 0 && (
                      <div className="relative mt-6 grid gap-2 sm:grid-cols-2">
                        {role.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="rounded-xl border border-border bg-white/[0.015] px-3.5 py-3 text-[10px] leading-5 text-foreground-subtle transition-colors duration-300 group-hover:border-border-strong"
                          >
                            <span className="mr-2 text-primary">+</span>
                            {highlight}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Career progression */}
        <motion.div
          className="mt-12 rounded-2xl border border-border bg-white/[0.015] p-6 sm:p-8"
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
                Career trajectory
              </p>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-foreground-muted">
                Developer → Consultant → Senior Consultant → Solution
                Architecture
              </p>
            </div>

            <a
              href="#projects"
              className="group inline-flex shrink-0 items-center gap-2 text-xs font-medium text-primary transition-colors hover:text-primary-bright"
            >
              See selected work

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
