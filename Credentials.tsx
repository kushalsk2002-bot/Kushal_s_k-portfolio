"use client";

import { motion } from "framer-motion";
import { Award, Trophy } from "lucide-react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { certifications, achievements } from "@/data/content";

export function Credentials() {
  return (
    <section id="credentials" className="py-20 md:py-28 ledger-rule">
      <Container>
        <SectionHeading code="06" title="Certifications & Achievements" />

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <Award size={18} className="text-ember" />
              <h3 className="font-mono text-xs uppercase tracking-widest2 text-ink-faint dark:text-nightink-faint">
                Certifications
              </h3>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="flex items-center justify-between gap-4 rounded-xl border border-line-light dark:border-line-dark bg-paper-card dark:bg-nightpaper-card px-4 py-3"
                >
                  <span className="text-sm font-medium text-ink dark:text-nightink">{cert.name}</span>
                  <span className="font-mono text-xs text-sage dark:text-sage-soft uppercase tracking-wide">
                    {cert.issuer}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <Trophy size={18} className="text-ember" />
              <h3 className="font-mono text-xs uppercase tracking-widest2 text-ink-faint dark:text-nightink-faint">
                Achievements
              </h3>
            </div>
            <div className="space-y-3">
              {achievements.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="rounded-xl border border-line-light dark:border-line-dark bg-paper-card dark:bg-nightpaper-card px-4 py-3"
                >
                  <div className="font-display font-semibold text-base text-ink dark:text-nightink">
                    {item.title}
                  </div>
                  <div className="text-sm text-ink-soft dark:text-nightink-soft mt-0.5">{item.detail}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
