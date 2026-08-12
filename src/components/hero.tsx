"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";

import { profile } from "@/data/profile";
import { PortfolioScene } from "@/components/portfolio-scene";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden border-b border-border"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(34,211,238,0.055),transparent_34%)]" />

        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      {/* 3D visual */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0"
      >
        <div className="absolute inset-x-0 top-0 h-full opacity-70 sm:opacity-80">
          <PortfolioScene />
        </div>

        {/* Readability gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/45 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-5 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8">
        <div className="grid w-full gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-end">
          {/* Main content */}
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/[0.045] px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.15em] text-primary">
                  <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-primary" />
                  Available for opportunities
                </span>

                <span className="inline-flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.13em] text-foreground-subtle">
                  <MapPin size={11} />
                  {profile.contact.location}
                </span>
              </div>
            </motion.div>

            <motion.p
              className="mt-8 font-mono text-[9px] uppercase tracking-[0.22em] text-primary sm:mt-10"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.18,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              RPA · Automation · Solution Architecture
            </motion.p>

            <motion.h1
              className="mt-4 max-w-4xl text-[clamp(3rem,8vw,7.5rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-foreground"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.24,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {profile.name}
            </motion.h1>

            <motion.h2
              className="mt-5 max-w-2xl text-lg font-medium tracking-tight text-foreground-muted sm:text-xl lg:text-2xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.32,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {profile.title}
            </motion.h2>

            <motion.p
              className="mt-5 max-w-2xl text-sm leading-7 text-foreground-subtle sm:text-base sm:leading-8"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {profile.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.48,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-xs font-semibold text-slate-950 transition-all duration-300 hover:bg-primary-bright hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]"
              >
                Explore selected work

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-border bg-white/[0.02] px-5 py-3 text-xs font-medium text-foreground-muted transition-all duration-300 hover:border-primary/20 hover:bg-primary/[0.04] hover:text-foreground"
              >
                Start a conversation
              </a>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.55,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="ml-auto max-w-sm rounded-2xl border border-border bg-background/55 p-5 backdrop-blur-md">
              <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-primary">
                At a glance
              </p>

              <div className="mt-5 grid grid-cols-2 gap-2">
                {profile.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-border bg-white/[0.015] p-4"
                  >
                    <p className="text-lg font-semibold tracking-tight text-foreground">
                      {stat.value}
                    </p>

                    <p className="mt-1 font-mono text-[7px] uppercase tracking-[0.1em] text-foreground-subtle">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-foreground-subtle transition-colors hover:text-primary"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 1,
        }}
      >
        <span className="font-mono text-[7px] uppercase tracking-[0.2em]">
          Scroll
        </span>

        <ArrowDown size={13} />
      </motion.a>
    </section>
  );
}
