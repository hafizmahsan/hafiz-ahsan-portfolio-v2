"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Layers3,
  Workflow,
} from "lucide-react";

import { profile } from "@/data/profile";
import { skillGroups } from "@/data/skills";

const reveal = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function About() {
  const primaryCapabilities = skillGroups.slice(0, 3);

  return (
    <section
      id="about"
      className="relative border-t border-border py-24 sm:py-32 lg:py-40"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.035] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section heading */}
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
              About me
            </span>
          </div>

          <h2 className="text-balance text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl lg:text-5xl">
            {profile.about.title}
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-foreground-muted sm:text-base sm:leading-8">
            {profile.about.description}
          </p>
        </motion.div>

        {/* Main content */}
        <div className="mt-14 grid gap-5 lg:grid-cols-[1.15fr_0.85fr] lg:mt-20">
          {/* Left: professional statement */}
          <motion.div
            className="group relative overflow-hidden rounded-3xl border border-border bg-white/[0.02] p-6 sm:p-8 lg:p-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={reveal}
          >
            {/* Decorative grid */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.035]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "36px 36px",
              }}
            />

            <div className="relative">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground-subtle">
                    Profile
                  </p>

                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                    Engineering with an automation-first mindset.
                  </h3>
                </div>

                <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/[0.06] text-primary sm:flex">
                  <BrainCircuit size={20} strokeWidth={1.6} />
                </div>
              </div>

              <p className="mt-6 max-w-2xl text-sm leading-7 text-foreground-muted">
                My work sits at the intersection of business processes,
                automation engineering and enterprise technology. I focus on
                understanding how a process works, identifying where
                automation creates value, and then designing a solution that
                can operate reliably in production.
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-foreground-muted">
                Over the course of my career, I have progressed from
                enterprise IT into RPA development, consulting and solution
                architecture — working across client environments and
                technology organizations.
              </p>

              {/* Highlights */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {profile.about.highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight}
                    className="flex items-start gap-3 rounded-2xl border border-border bg-background/40 p-3.5"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.1 + index * 0.05,
                      duration: 0.4,
                    }}
                  >
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/[0.08]">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    </span>

                    <span className="text-xs leading-5 text-foreground-muted">
                      {highlight}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: stats */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {profile.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group relative overflow-hidden rounded-3xl border border-border bg-white/[0.02] p-6 sm:p-7"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={reveal}
                transition={{
                  delay: index * 0.07,
                }}
              >
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/[0.06] blur-2xl transition-all duration-500 group-hover:bg-primary/[0.1]" />

                <div className="relative">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-foreground-subtle">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <p className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-foreground">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-xs text-foreground-muted">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Capability preview */}
        <motion.div
          className="mt-5 overflow-hidden rounded-3xl border border-border bg-white/[0.02]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={reveal}
        >
          <div className="grid lg:grid-cols-3">
            {primaryCapabilities.map((capability, index) => {
              const icons = [
                Workflow,
                Layers3,
                BrainCircuit,
              ];

              const CapabilityIcon = icons[index];

              return (
                <div
                  key={capability.id}
                  className={`relative p-6 sm:p-8 ${
                    index !== primaryCapabilities.length - 1
                      ? "border-b border-border lg:border-b-0 lg:border-r"
                      : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/[0.06] text-primary">
                      <CapabilityIcon size={18} strokeWidth={1.6} />
                    </div>

                    <span className="font-mono text-[10px] text-foreground-subtle">
                      {capability.category}
                    </span>
                  </div>

                  <h3 className="mt-6 text-base font-semibold text-foreground">
                    {capability.title}
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-foreground-muted">
                    {capability.description}
                  </p>

                  <a
                    href="#skills"
                    className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-medium text-primary transition-colors hover:text-primary-bright"
                  >
                    Explore capabilities
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
