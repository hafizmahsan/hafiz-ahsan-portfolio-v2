"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Mail,
  MessageSquare,
} from "lucide-react";

import { profile } from "@/data/profile";

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

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border py-24 sm:py-32 lg:py-40"
    >
      {/* Ambient lights */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.045] blur-[130px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 -translate-x-1/3 translate-y-1/3 rounded-full bg-violet-500/[0.035] blur-[100px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          className="overflow-hidden rounded-[2rem] border border-primary/10 bg-white/[0.025]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={reveal}
        >
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            {/* Main CTA */}
            <div className="relative p-7 sm:p-10 lg:p-14">
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.035]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              <div className="relative">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-8 bg-primary" />

                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
                    Let's connect
                  </span>
                </div>

                <h2 className="max-w-2xl text-balance text-3xl font-semibold tracking-[-0.045em] text-foreground sm:text-4xl lg:text-6xl">
                  Have an automation problem worth solving?
                </h2>

                <p className="mt-6 max-w-xl text-sm leading-7 text-foreground-muted sm:text-base sm:leading-8">
                  Whether you're exploring an RPA initiative, modernizing an
                  existing automation estate, or looking for someone to bridge
                  business requirements with technical delivery, let's start a
                  conversation.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`mailto:${profile.contact.email}`}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-xs font-semibold text-slate-950 transition-all duration-300 hover:bg-primary-bright hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]"
                  >
                    <Mail size={15} strokeWidth={1.8} />

                    Start a conversation

                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>

                  <a
                    href={`mailto:${profile.contact.email}?subject=Portfolio%20Inquiry`}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white/[0.02] px-5 py-3 text-xs font-medium text-foreground-muted transition-colors hover:border-primary/20 hover:text-foreground"
                  >
                    <MessageSquare size={15} strokeWidth={1.6} />
                    Discuss a project
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
                  <div className="flex items-center gap-2 text-[10px] text-foreground-subtle">
                    <CheckCircle2 size={13} className="text-emerald-400" />
                    Open to professional opportunities
                  </div>

                  <div className="flex items-center gap-2 text-[10px] text-foreground-subtle">
                    <Clock3 size={13} className="text-primary" />
                    Response within 1–2 business days
                  </div>
                </div>
              </div>
            </div>

            {/* Contact details */}
            <div className="border-t border-border bg-background/30 p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-foreground-subtle">
                Contact details
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.14em] text-foreground-subtle">
                    Email
                  </p>

                  <a
                    href={`mailto:${profile.contact.email}`}
                    className="mt-2 inline-flex items-center gap-2 break-all text-sm text-foreground-muted transition-colors hover:text-primary"
                  >
                    {profile.contact.email}
                    <ArrowUpRight size={13} />
                  </a>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.14em] text-foreground-subtle">
                    Location
                  </p>

                  <p className="mt-2 text-sm text-foreground-muted">
                    {profile.contact.location}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.14em] text-foreground-subtle">
                    Availability
                  </p>

                  <p className="mt-2 text-sm text-foreground-muted">
                    {profile.contact.availability}
                  </p>
                </div>
              </div>

              {/* Mini status */}
              <div className="mt-10 rounded-2xl border border-border bg-white/[0.02] p-4">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>

                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-emerald-400">
                    Available for conversation
                  </span>
                </div>

                <p className="mt-3 text-[11px] leading-5 text-foreground-subtle">
                  For consulting, automation architecture, RPA delivery and
                  enterprise technology opportunities.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
