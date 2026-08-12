"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, MapPin } from "lucide-react";

import { profile } from "@/data/profile";

export function About() {
  return (
    <section
      id="about"
      className="relative border-b border-border py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-primary">
              01 / About
            </p>

            <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
              Engineering automation around real business problems.
            </h2>

            <div className="mt-6 h-px w-16 bg-primary/50" />
          </motion.div>

          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.08 }}
            >
              <p className="max-w-3xl text-base leading-8 text-foreground-muted sm:text-lg sm:leading-9">
                {profile.about}
              </p>
            </motion.div>

            {/* Profile details */}
            <motion.div
              className="mt-10 grid gap-3 sm:grid-cols-2"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.16 }}
            >
              <div className="rounded-2xl border border-border bg-card p-5 transition-colors duration-300 hover:border-border-strong">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/15 bg-primary/[0.04] text-primary">
                    <BriefcaseBusiness size={15} />
                  </span>

                  <div>
                    <p className="font-mono text-[7px] uppercase tracking-[0.15em] text-foreground-subtle">
                      Focus
                    </p>

                    <p className="mt-1 text-sm font-medium text-foreground">
                      {profile.shortTitle}
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5 transition-colors duration-300 hover:border-border-strong">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/15 bg-primary/[0.04] text-primary">
                    <MapPin size={15} />
                  </span>

                  <div>
                    <p className="font-mono text-[7px] uppercase tracking-[0.15em] text-foreground-subtle">
                      Based in
                    </p>

                    <p className="mt-1 text-sm font-medium text-foreground">
                      {profile.contact.location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Approach */}
            <motion.div
              className="mt-10 rounded-2xl border border-border bg-gradient-to-br from-primary/[0.045] to-transparent p-6 sm:p-7"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.24 }}
            >
              <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-primary">
                Working principle
              </p>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-foreground-muted">
                I approach automation from both sides of the problem:
                understanding the business process first, then designing the
                technology around it. The objective is not simply to automate a
                task, but to create a solution that is reliable, maintainable
                and useful at enterprise scale.
              </p>

              <a
                href="#experience"
                className="group mt-6 inline-flex items-center gap-2 text-xs font-medium text-foreground transition-colors hover:text-primary"
              >
                Explore my experience

                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
