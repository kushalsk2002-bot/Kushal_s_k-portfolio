"use client";

import { motion } from "framer-motion";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { aboutParagraphs, aboutFacts } from "@/data/content";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 ledger-rule">
      <Container>
        <SectionHeading
          code="01"
          title="About"
          description="A short ledger of how Kushal approaches performance marketing — and what he's building toward."
        />

        <div className="mt-12 grid md:grid-cols-[1.6fr_1fr] gap-12 md:gap-16">
          <div className="space-y-5">
            {aboutParagraphs.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="text-base md:text-lg leading-relaxed text-ink-soft dark:text-nightink-soft"
              >
                {para}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-line-light dark:border-line-dark bg-paper-card dark:bg-nightpaper-card overflow-hidden self-start"
          >
            <div className="px-5 py-3 ledger-rule-b font-mono text-xs uppercase tracking-widest2 text-ember">
              Profile Ledger
            </div>
            <dl>
              {aboutFacts.map((fact, i) => (
                <div
                  key={fact.label}
                  className={`flex items-start justify-between gap-4 px-5 py-4 ${
                    i !== aboutFacts.length - 1 ? "ledger-rule-b" : ""
                  }`}
                >
                  <dt className="font-mono text-xs uppercase tracking-wide text-ink-faint dark:text-nightink-faint shrink-0">
                    {fact.label}
                  </dt>
                  <dd className="text-sm text-right text-ink dark:text-nightink font-medium">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
