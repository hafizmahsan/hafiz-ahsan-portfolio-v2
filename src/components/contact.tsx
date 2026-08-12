"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  AtSign,
  BriefcaseBusiness,
  CheckCircle2,
  Linkedin,
  MapPin,
  MessageSquare,
} from "lucide-react";

import { profile } from "@/data/profile";

const contactOptions = [
  {
    icon: BriefcaseBusiness,
    title: "Consulting & opportunities",
    description:
      "Enterprise RPA, automation consulting, solution architecture and technical delivery.",
  },
  {
    icon: MessageSquare,
    title: "Discuss a challenge",
    description:
      "Have a repetitive or complex process that could benefit from automation?",
  },
  {
    icon: Linkedin,
    title: "Professional network",
    description:
      "Connect professionally and follow updates, projects and technology work.",
  },
];

export function Contact() {
  const email = profile.contact.email;
  const linkedin = profile.contact.linkedin;

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border py-24 sm:py-28 lg:py-36"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.035] blur-[130px]"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Main intro */}
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-primary">
            05 · Contact
          </p>

          <h2 className="mt-5 max-w-4xl text-[clamp(2.4rem,6vw,5.5rem)] font-semibold leading-[0.95] tracking-[-0.05em] text-foreground">
            Have a problem worth{" "}
            <span className="bg-gradient-to-r from-primary to-cyan-100 bg-clip-text text-transparent">
              automating?
            </span>
          </h2>

          <p className="mt-7 max-w-2xl text-sm leading-7 text-foreground-muted sm:text-base sm:leading-8">
            Whether you're looking for an experienced RPA professional,
            exploring an automation initiative or simply want to discuss a
            technical challenge, let's start a conversation.
          </p>
        </motion.div>

        {/* Contact grid */}
        <div className="mt-12 grid gap-3 lg:grid-cols-[1.15fr_0.85fr] lg:mt-16">
          {/* Primary contact card */}
          <motion.div
            className="relative overflow-hidden rounded-3xl border border-primary/15 bg-primary/[0.025] p-6 sm:p-8 lg:p-10"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.65,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/[0.06] blur-3xl"
            />

            <div className="relative">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/15 bg-primary/[0.06] text-primary">
                <AtSign size={18} strokeWidth={1.6} />
              </div>

              <p className="mt-8 font-mono text-[8px] uppercase tracking-[0.18em] text-primary">
                Preferred contact
              </p>

              <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                Let's connect.
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-7 text-foreground-subtle">
                Email is the simplest way to get in touch. For professional
                networking, you can also connect through LinkedIn.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {email && (
                  <a
                    href={`mailto:${email}`}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-xs font-semibold text-slate-950 transition-all duration-300 hover:bg-primary-bright hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]"
                  >
                    Email me
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                )}

                {linkedin && (
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white/[0.02] px-5 py-3 text-xs font-medium text-foreground-muted transition-all duration-300 hover:border-primary/20 hover:bg-primary/[0.04] hover:text-foreground"
                  >
                    LinkedIn
                    <Linkedin size={13} />
                  </a>
                )}
              </div>

              {/* Availability */}
              <div className="mt-10 flex items-center gap-2.5 border-t border-border pt-5">
                <CheckCircle2
                  size={14}
                  className="text-emerald-400"
                />

                <span className="text-[10px] text-foreground-subtle">
                  Open to relevant professional conversations
                </span>
              </div>
            </div>
          </motion.div>

          {/* Contact information */}
          <div className="grid gap-3">
            {contactOptions.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  className="group rounded-2xl border border-border bg-card p-5 transition-all duration-500 hover:border-primary/10 hover:bg-card-hover sm:p-6"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                >
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-white/[0.02] text-primary transition-colors duration-300 group-hover:border-primary/20 group-hover:bg-primary/[0.05]">
                      <Icon size={16} strokeWidth={1.6} />
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-foreground">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs leading-6 text-foreground-subtle">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Location / identity */}
        <motion.div
          className="mt-4 flex flex-col gap-4 rounded-2xl border border-border bg-white/[0.015] px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.55,
          }}
        >
          <div className="flex items-center gap-2 text-[10px] text-foreground-subtle">
            <MapPin size={13} className="text-primary" />
            <span>{profile.contact.location}</span>
          </div>

          <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-foreground-subtle">
            Automation · Architecture · Technology
          </p>
        </motion.div>
      </div>
    </section>
  );
}
