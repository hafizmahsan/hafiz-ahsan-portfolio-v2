"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Bot,
  Boxes,
  Code2,
  Workflow,
} from "lucide-react";

import { profile } from "@/data/profile";

const focusAreas = [
  {
    icon: Bot,
    label: "RPA & Automation",
    description:
      "Designing reliable automation solutions that remove repetitive work and improve operational efficiency.",
  },
  {
    icon: Workflow,
    label: "Process Engineering",
    description:
      "Turning complex business processes into structured, measurable and automation-ready workflows.",
  },
  {
    icon: Boxes,
    label: "Solution Architecture",
    description:
      "Designing scalable automation ecosystems with maintainability, security and enterprise integration in mind.",
  },
  {
    icon: Code2,
    label: "Technical Delivery",
    description:
      "Bridging architecture and implementation through hands-on development, troubleshooting and delivery.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative border-t border-border py-24 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section heading */}
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
              01 · About
            </p>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Engineering automation with business context.
            </h2>
          </div>

          <div className="max-w-3xl">
            <p className="text-base leading-8 text-foreground-muted sm:text-lg sm:leading-9">
              {profile.name} is an IT professional with more than six years of
              experience across RPA development, consulting, solution
              architecture and enterprise technology delivery.
            </p>

            <p className="mt-5 text-sm leading-7 text-foreground-subtle sm:text-base sm:leading-8">
              His career has evolved from hands-on automation development into
              designing and delivering enterprise-scale solutions for
              organizations across multiple industries. The focus is not simply
              on automating tasks, but on understanding the process,
              identifying the right technology and building solutions that can
              operate reliably at scale.
            </p>
          </div>
        </motion.div>

        {/* Focus cards */}
        <div className="mt-16 grid gap-3 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {focusAreas.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.label}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all duration-500 hover:-translate-y-1 hover:border-primary/15 hover:bg-card-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/[0.04] blur-2xl transition-opacity duration-500 group-hover:bg-primary/[0.08]" />

                <div className="relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white/[0.02] text-primary transition-colors duration-300 group-hover:border-primary/20 group-hover:bg-primary/[0.05]">
                    <Icon size={17} strokeWidth={1.7} />
                  </div>

                  <p className="mt-6 font-mono text-[8px] uppercase tracking-[0.16em] text-foreground-subtle">
                    0{index + 1}
                  </p>

                  <h3 className="mt-2 text-sm font-semibold text-foreground">
                    {item.label}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-foreground-subtle">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Career statement */}
        <motion.div
          className="mt-4 overflow-hidden rounded-2xl border border-border bg-white/[0.015]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
        >
          <div className="grid lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="p-6 sm:p-8">
              <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-primary">
                Professional approach
              </p>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-foreground-muted sm:text-base sm:leading-8">
                From development and troubleshooting to consulting and
                architecture, the goal is consistent: build automation that
                creates measurable value while remaining understandable,
                maintainable and ready for the next stage of growth.
              </p>
            </div>

            <a
              href="#experience"
              className="group flex items-center gap-3 border-t border-border px-6 py-5 text-xs font-medium text-foreground-muted transition-colors hover:text-primary lg:border-l lg:border-t-0 lg:px-8"
            >
              Explore the journey

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
