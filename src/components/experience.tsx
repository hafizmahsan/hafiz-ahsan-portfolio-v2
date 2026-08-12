"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  CalendarDays,
  MapPin,
} from "lucide-react";

import { experience } from "@/data/experience";

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

export function Experience() {
  return (
    <section
      id="experience"
      className="relative border-t border-border py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
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
              Experience
            </span>
          </div>

          <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl lg:text-5xl">
            Six years of evolving with automation.
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-foreground-muted sm:text-base sm:leading-8">
            From enterprise IT and RPA development to consulting and solution
            architecture, each stage of my career has expanded the way I
            approach automation problems.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-16 lg:mt-24">
          {/* Central line — desktop */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[22px] top-0 hidden w-px bg-gradient-to-b from-primary/50 via-border to-transparent md:block"
          />

          <div className="space-y-8">
            {experience.map((item, index) => (
              <motion.article
                key={item.id}
                className="relative md:pl-16"
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.12,
                }}
                variants={reveal}
                transition={{
                  delay: Math.min(index * 0.04, 0.2),
                }}
              >
                {/* Timeline marker */}
                <div
                  aria-hidden="true"
                  className="absolute left-[15px] top-8 hidden h-[15px] w-[15px] items-center justify-center rounded-full border border-primary/40 bg-background md:flex"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_rgba(34,211,238,0.7)]" />
                </div>

                {/* Card */}
                <div className="group relative overflow-hidden rounded-3xl border border-border bg-white/[0.02] transition-colors duration-500 hover:border-primary/15 hover:bg-white/[0.035]">
                  {/* Current role accent */}
                  {index === 0 && (
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />
                  )}

                  <div className="grid lg:grid-cols-[0.32fr_0.68fr]">
                    {/* Meta */}
                    <div className="border-b border-border p-6 lg:border-b-0 lg:border-r lg:p-8">
                      <div className="flex items-center justify-between lg:block">
                        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
                          {item.period}
                        </span>

                        {index === 0 && (
                          <span className="rounded-full border border-primary/20 bg-primary/[0.06] px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-primary lg:mt-4 lg:inline-flex">
                            Current
                          </span>
                        )}
                      </div>

                      <div className="mt-6 space-y-3">
                        <div className="flex items-start gap-2.5">
                          <Building2
                            size={14}
                            strokeWidth={1.6}
                            className="mt-0.5 shrink-0 text-foreground-subtle"
                          />

                          <span className="text-xs leading-5 text-foreground-muted">
                            {item.company}
                          </span>
                        </div>

                        <div className="flex items-start gap-2.5">
                          <MapPin
                            size={14}
                            strokeWidth={1.6}
                            className="mt-0.5 shrink-0 text-foreground-subtle"
                          />

                          <span className="text-xs leading-5 text-foreground-muted">
                            {item.location}
                          </span>
                        </div>

                        <div className="flex items-start gap-2.5">
                          <CalendarDays
                            size={14}
                            strokeWidth={1.6}
                            className="mt-0.5 shrink-0 text-foreground-subtle"
                          />

                          <span className="text-xs leading-5 text-foreground-muted">
                            {item.type}
                          </span>
                        </div>
                      </div>

                      {item.relationship && (
                        <div className="mt-6 rounded-2xl border border-border bg-background/50 p-3.5">
                          <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-foreground-subtle">
                            Engagement
                          </p>

                          <p className="mt-1.5 text-[11px] leading-5 text-foreground-muted">
                            {item.relationship}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8 lg:p-10">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="text-xl font-semibold tracking-[-0.025em] text-foreground sm:text-2xl">
                            {item.role}
                          </h3>

                          <p className="mt-2 text-sm font-medium text-primary">
                            {item.company}
                          </p>
                        </div>

                        <span className="hidden rounded-full border border-border bg-background px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-foreground-subtle sm:block">
                          {item.startDate} → {item.endDate}
                        </span>
                      </div>

                      <p className="mt-6 max-w-3xl text-sm leading-7 text-foreground-muted">
                        {item.description}
                      </p>

                      {/* Achievements */}
                      <div className="mt-8">
                        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-foreground-subtle">
                          Key contributions
                        </p>

                        <div className="mt-4 grid gap-3 sm:grid-cols-2">
                          {item.achievements.map((achievement) => (
                            <div
                              key={achievement}
                              className="flex gap-3 rounded-2xl border border-border bg-background/40 p-3.5"
                            >
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />

                              <span className="text-xs leading-5 text-foreground-muted">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mt-8 flex flex-wrap gap-2">
                        {item.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-border px-2.5 py-1.5 font-mono text-[8px] uppercase tracking-[0.08em] text-foreground-subtle transition-colors group-hover:border-primary/15 group-hover:text-foreground-muted"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>

                      <div className="mt-8 flex items-center gap-2 text-[10px] text-foreground-subtle">
                        <span>Career progression</span>

                        <ArrowUpRight
                          size={12}
                          strokeWidth={1.6}
                          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
