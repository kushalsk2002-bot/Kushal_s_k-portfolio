"use client";

import { motion } from "framer-motion";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { experience } from "@/data/content";

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 ledger-rule">
      <Container>
        <SectionHeading
          code="02"
          title="Experience"
          description="A running ledger of roles, responsibilities, and the results recorded against each."
        />

        <div className="mt-16 relative">
          {/* vertical line */}
          <div className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-px bg-line-light dark:bg-line-dark" />

          <div className="space-y-16">
            {experience.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="relative pl-8 md:pl-12"
              >
                {/* dot */}
                <div
                  className={`absolute left-0 top-1.5 w-4 h-4 md:w-6 md:h-6 rounded-full border-2 flex items-center justify-center ${
                    job.current
                      ? "border-ember bg-ember/10"
                      : "border-line-light dark:border-line-dark bg-paper dark:bg-nightpaper"
                  }`}
                >
                  {job.current && <span className="w-2 h-2 rounded-full bg-ember" />}
                </div>

                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-display font-semibold text-2xl md:text-3xl text-ink dark:text-nightink">
                    {job.role}
                  </h3>
                  <span className="font-mono text-xs uppercase tracking-widest2 text-ember">
                    {job.duration}
                  </span>
                </div>
                <p className="font-mono text-sm uppercase tracking-wide text-sage dark:text-sage-soft mb-6">
                  {job.company}
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-mono text-xs uppercase tracking-widest2 text-ink-faint dark:text-nightink-faint mb-3">
                      Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {job.responsibilities.map((item) => (
                        <li
                          key={item}
                          className="text-sm md:text-base text-ink-soft dark:text-nightink-soft leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-ember"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {job.achievements.length > 0 && (
                    <div className="rounded-2xl border border-line-light dark:border-line-dark bg-paper-card dark:bg-nightpaper-card p-5">
                      <h4 className="font-mono text-xs uppercase tracking-widest2 text-ember mb-3">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2.5">
                        {job.achievements.map((item) => (
                          <li
                            key={item}
                            className="text-sm md:text-base text-ink dark:text-nightink leading-relaxed font-medium pl-4 relative before:content-['✓'] before:absolute before:left-0 before:text-sage dark:before:text-sage-soft"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
