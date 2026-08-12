"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  MapPin,
} from "lucide-react";

import { profile } from "@/data/profile";
import { PortfolioScene } from "@/components/portfolio-scene";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const reveal = {
  hidden: {
    opacity: 0,
    y: 20,
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

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative isolate min-h-[100svh] overflow-hidden"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-[18%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-400/[0.055] blur-[130px]" />

        <div className="absolute right-[-12%] top-[20%] h-[420px] w-[420px] rounded-full bg-violet-500/[0.04] blur-[120px]" />

        <div className="absolute bottom-[-15%] left-[-10%] h-[420px] w-[420px] rounded-full bg-cyan-500/[0.025] blur-[120px]" />
      </div>

      {/* Technical grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
      >
        <div className="grid-background absolute inset-0 [mask-image:linear-gradient(to_bottom,black_10%,transparent_80%)]" />
      </div>

      {/* 3D layer */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-[5]"
      >
        {!reducedMotion && (
          <div className="absolute inset-0 opacity-80">
            <PortfolioScene />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-center px-5 pb-20 pt-28 sm:px-6 sm:pb-24 lg:px-8 lg:pt-32">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1fr_0.8fr] lg:gap-8">
          {/* Copy */}
          <motion.div
            className="relative z-10 max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={reveal}
          >
            {/* Status */}
            <motion.div
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-primary/[0.045] px-3.5 py-2 backdrop-blur-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-foreground-muted">
                Senior RPA Consultant · Solution Architect
              </span>
            </motion.div>

            {/* Eyebrow */}
            <motion.p
              className="mb-5 font-mono text-[10px] uppercase tracking-[0.24em] text-primary"
              initial="hidden"
              animate="visible"
              variants={reveal}
              transition={{
                delay: 0.15,
              }}
            >
              Enterprise automation · RPA · Architecture
            </motion.p>

            {/* Heading */}
            <motion.h1
              className="max-w-4xl text-balance text-[clamp(2.8rem,7vw,6.5rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-foreground"
              initial="hidden"
              animate="visible"
              variants={reveal}
              transition={{
                delay: 0.2,
              }}
            >
              I turn complex processes into{" "}
              <span className="bg-gradient-to-r from-primary via-cyan-200 to-secondary bg-clip-text text-transparent">
                intelligent automation.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="mt-7 max-w-2xl text-sm leading-7 text-foreground-muted sm:mt-8 sm:text-base sm:leading-8"
              initial="hidden"
              animate="visible"
              variants={reveal}
              transition={{
                delay: 0.3,
              }}
            >
              {profile.name} is an experienced IT professional focused on
              enterprise RPA, automation architecture and technology
              solutions — connecting business problems with scalable technical
              delivery.
            </motion.p>

            {/* CTA */}
            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              initial="hidden"
              animate="visible"
              variants={reveal}
              transition={{
                delay: 0.4,
              }}
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-xs font-semibold text-slate-950 transition-all duration-300 hover:bg-primary-bright hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]"
              >
                Explore selected work

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white/[0.02] px-5 py-3 text-xs font-medium text-foreground-muted backdrop-blur-sm transition-all duration-300 hover:border-primary/20 hover:bg-primary/[0.04] hover:text-foreground"
              >
                Let's talk
              </a>
            </motion.div>

            {/* Metadata */}
            <motion.div
              className="mt-10 flex flex-wrap gap-x-7 gap-y-3"
              initial="hidden"
              animate="visible"
              variants={reveal}
              transition={{
                delay: 0.5,
              }}
            >
              <div className="flex items-center gap-2 text-[10px] text-foreground-subtle">
                <BriefcaseBusiness size={13} className="text-primary" />
                <span>6+ years in IT & automation</span>
              </div>

              <div className="flex items-center gap-2 text-[10px] text-foreground-subtle">
                <MapPin size={13} className="text-primary" />
                <span>{profile.contact.location}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* 3D visual anchor */}
          <motion.div
            className="relative hidden h-[520px] lg:block"
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="absolute inset-0">
              {!reducedMotion && <PortfolioScene />}
            </div>

            {/* Floating technical label */}
            <div className="absolute right-0 top-[18%] rounded-2xl border border-primary/10 bg-background/70 px-4 py-3 shadow-2xl shadow-cyan-950/10 backdrop-blur-md">
              <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-foreground-subtle">
                Architecture
              </p>

              <p className="mt-1 text-xs font-medium text-foreground">
                Automation systems
              </p>
            </div>

            <div className="absolute bottom-[16%] left-0 rounded-2xl border border-border bg-background/70 px-4 py-3 shadow-2xl backdrop-blur-md">
              <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-foreground-subtle">
                Focus
              </p>

              <p className="mt-1 text-xs font-medium text-primary">
                RPA · Integration · Scale
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-3 text-foreground-subtle transition-colors hover:text-primary sm:flex"
        animate={
          reducedMotion
            ? undefined
            : {
                y: [0, 6, 0],
              }
        }
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="font-mono text-[8px] uppercase tracking-[0.2em]">
          Scroll
        </span>

        <ArrowDown size={14} strokeWidth={1.4} />
      </motion.a>
    </section>
  );
}
