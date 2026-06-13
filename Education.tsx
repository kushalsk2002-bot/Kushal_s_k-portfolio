"use client";

import { motion } from "framer-motion";
import { GraduationCap, FlaskConical } from "lucide-react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { education, research } from "@/data/content";

export function Education() {
  return (
    <section id="education" className="py-20 md:py-28 ledger-rule">
      <Container>
        <SectionHeading code="05" title="Education & Research" />

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <GraduationCap size={18} className="text-ember" />
              <h3 className="font-mono text-xs uppercase tracking-widest2 text-ink-faint dark:text-nightink-faint">
                Education
              </h3>
            </div>
            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="rounded-2xl border border-line-light dark:border-line-dark bg-paper-card dark:bg-nightpaper-card p-5"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h4 className="font-display font-semibold text-lg text-ink dark:text-nightink">
                      {edu.degree}
                    </h4>
                    <span className="font-mono text-xs text-ember">{edu.duration}</span>
                  </div>
                  <p className="text-sm text-ink-soft dark:text-nightink-soft">{edu.school}</p>
                  <p className="font-mono text-xs text-sage dark:text-sage-soft mt-2">{edu.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Research */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <FlaskConical size={18} className="text-ember" />
              <h3 className="font-mono text-xs uppercase tracking-widest2 text-ink-faint dark:text-nightink-faint">
                Research & Projects
              </h3>
            </div>
            <div className="rounded-2xl border border-line-light dark:border-line-dark bg-paper-card dark:bg-nightpaper-card p-5 h-full">
              <h4 className="font-display font-semibold text-lg text-ink dark:text-nightink mb-3">
                {research.title}
              </h4>
              <ul className="space-y-2">
                {research.highlights.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-ink-soft dark:text-nightink-soft leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-ember"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
