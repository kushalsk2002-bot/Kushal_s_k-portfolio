"use client";

import { motion } from "framer-motion";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { skillGroups } from "@/data/content";

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 ledger-rule">
      <Container>
        <SectionHeading
          code="03"
          title="Skills & Tools"
          description="The instruments used to run, measure, and scale paid media accounts."
        />

        <div className="mt-12 grid md:grid-cols-3 gap-6 md:gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-2xl border border-line-light dark:border-line-dark bg-paper-card dark:bg-nightpaper-card p-6"
            >
              <div className="flex items-center gap-2 mb-5">
                <span className="font-mono text-xs text-ember tracking-widest2">{group.code}</span>
                <h3 className="font-display font-semibold text-xl text-ink dark:text-nightink">
                  {group.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-3 py-1.5 rounded-full border border-line-light dark:border-line-dark text-ink-soft dark:text-nightink-soft hover:border-ember hover:text-ember transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
