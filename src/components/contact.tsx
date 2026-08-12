"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.035] blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-20">
          {/* Main message */}
          <div>
            <motion.p
              className="font-mono text-[8px] uppercase tracking-[0.2em] text-primary"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
            >
              05 / Contact
            </motion.p>

            <motion.h2
              className="mt-4 max-w-3xl text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-foreground sm:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.75, delay: 0.06 }}
            >
              Have an automation problem worth solving?
            </motion.h2>

            <motion.p
              className="mt-6 max-w-2xl text-sm leading-7 text-foreground-muted sm:text-base sm:leading-8"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.12 }}
            >
              Whether you're exploring an RPA initiative, improving an
              existing automation estate or looking for solution architecture
              guidance, let's start with the problem and work backwards to
              the right technology.
            </motion.p>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.18 }}
            >
              {profile.contact.email !== "your.email@example.com" ? (
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-xs font-semibold text-slate-950 transition-all duration-300 hover:bg-primary-bright hover:shadow-[0_0_40px_rgba(34,211,238,0.18)]"
                >
                  Send an email

                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              ) : (
                <span className="inline-flex cursor-default items-center gap-2 rounded-full border border-border bg-white/[0.02] px-5 py-3 text-xs text-foreground-subtle">
                  Email available soon
                </span>
              )}
            </motion.div>
          </div>

          {/* Contact details */}
          <motion.div
            className="rounded-2xl border border-border bg-card p-5 sm:p-6"
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, delay: 0.15 }}
          >
            <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-primary">
              Contact details
            </p>

            <div className="mt-5 space-y-2">
              <div className="flex items-center gap-3 rounded-xl border border-border bg-white/[0.015] p-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/15 bg-primary/[0.04] text-primary">
                  <MapPin size={14} />
                </span>

                <div>
                  <p className="font-mono text-[7px] uppercase tracking-[0.13em] text-foreground-subtle">
                    Location
                  </p>

                  <p className="mt-1 text-sm text-foreground">
                    {profile.contact.location}
                  </p>
                </div>
              </div>

              {profile.contact.email !== "your.email@example.com" && (
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="flex items-center gap-3 rounded-xl border border-border bg-white/[0.015] p-4 transition-colors duration-300 hover:border-primary/20"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/15 bg-primary/[0.04] text-primary">
                    <Mail size={14} />
                  </span>

                  <div className="min-w-0">
                    <p className="font-mono text-[7px] uppercase tracking-[0.13em] text-foreground-subtle">
                      Email
                    </p>

                    <p className="mt-1 truncate text-sm text-foreground">
                      {profile.contact.email}
                    </p>
                  </div>
                </a>
              )}

              {profile.contact.linkedin !==
                "https://www.linkedin.com/in/your-linkedin-profile/" && (
                <a
                  href={profile.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-border bg-white/[0.015] p-4 transition-colors duration-300 hover:border-primary/20"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-primary/15 bg-primary/[0.04] text-primary">
                    <Linkedin size={14} />
                  </span>

                  <div>
                    <p className="font-mono text-[7px] uppercase tracking-[0.13em] text-foreground-subtle">
                      LinkedIn
                    </p>

                    <p className="mt-1 text-sm text-foreground">
                      Professional profile
                    </p>
                  </div>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
