"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, MapPin } from "lucide-react";

import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
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
            03 / Experience
          </motion.p>

          <motion.h2
            className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.06 }}
          >
            From RPA development to solution architecture.
          </motion.h2>

          <motion.p
            className="mt-5 max-w-2xl text-sm leading-7 text-foreground-subtle sm:text-base sm:leading-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            A progression from hands-on automation delivery into consulting,
            technical leadership and enterprise solution design.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="relative mt-14">
          {/* Timeline line */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-[11px] top-0 w-px bg-border sm:left-[15px]"
          />

          <div className="space-y-10">
            {experience.map((item, index) => (
              <motion.article
                key={`${item.company}-${item.period}`}
                className="relative pl-10 sm:pl-12"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.65,
                  delay: Math.min(index * 0.08, 0.3),
                }}
              >
                {/* Timeline node */}
                <span
                  aria-hidden="true"
                  className="absolute left-[6px] top-1.5 flex h-3 w-3 items-center justify-center rounded-full border border-primary/40 bg-background sm:left-[10px]"
                >
                  <span className="h-1 w-1 rounded-full bg-primary" />
                </span>

                <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                        <span className="inline-flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-primary">
                          <BriefcaseBusiness size={11} />
                          {item.period}
                        </span>

                        {item.location && (
                          <span className="inline-flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.12em] text-foreground-subtle">
                            <MapPin size={10} />
                            {item.location}
                          </span>
                        )}
                      </div>

                      <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-primary/85">
                        {item.company}
                      </p>
                    </div>

                    <span className="hidden font-mono text-[8px] uppercase tracking-[0.15em] text-foreground-subtle lg:block">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mt-5 max-w-3xl text-sm leading-7 text-foreground-muted">
                    {item.description}
                  </p>

                  {item.highlights && item.highlights.length > 0 && (
                    <div className="mt-6 grid gap-2 sm:grid-cols-2">
                      {item.highlights.map((highlight) => (
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
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Closing link */}
        <motion.div
          className="mt-10 flex justify-end"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 text-xs font-medium text-foreground-muted transition-colors hover:text-primary"
          >
            See selected projects

            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
