"use client";

import { motion } from "framer-motion";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { caseStudies } from "@/data/content";
import { SpendScalingChart } from "./charts/SpendScalingChart";
import { RoasCpaChart } from "./charts/RoasCpaChart";
import { FunnelChart } from "./charts/FunnelChart";

function CaseStudyChart({ type }: { type: string }) {
  if (type === "spend") return <SpendScalingChart />;
  if (type === "roas") return <RoasCpaChart />;
  return <FunnelChart />;
}

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 md:py-28 ledger-rule">
      <Container>
        <SectionHeading
          code="04"
          title="Featured Case Studies"
          description="Three entries from the campaign ledger — what the challenge was, what changed, and what the numbers showed afterward."
        />

        <div className="mt-16 space-y-12 md:space-y-16">
          {caseStudies.map((study, i) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-line-light dark:border-line-dark bg-paper-card dark:bg-nightpaper-card overflow-hidden"
            >
              <div className="grid md:grid-cols-2">
                {/* Left: content */}
                <div className="p-6 md:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-xs text-ember tracking-widest2">{study.code}</span>
                    <span className="h-px flex-1 bg-line-light dark:bg-line-dark" />
                    <span className="font-mono text-xs uppercase text-ink-faint dark:text-nightink-faint">
                      {study.industry}
                    </span>
                  </div>

                  <h3 className="font-display font-semibold text-2xl md:text-3xl text-ink dark:text-nightink mb-4">
                    {study.title}
                  </h3>

                  <div className="mb-6">
                    <h4 className="font-mono text-xs uppercase tracking-widest2 text-ink-faint dark:text-nightink-faint mb-2">
                      Challenge
                    </h4>
                    <p className="text-sm md:text-base text-ink-soft dark:text-nightink-soft leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-mono text-xs uppercase tracking-widest2 text-ink-faint dark:text-nightink-faint mb-2">
                      Actions Taken
                    </h4>
                    <ul className="space-y-1.5">
                      {study.actions.map((action) => (
                        <li
                          key={action}
                          className="text-sm text-ink-soft dark:text-nightink-soft leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-ember"
                        >
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: dashboard */}
                <div className="p-6 md:p-10 ledger-rule md:border-t-0 md:border-l border-line-light dark:border-line-dark bg-paper dark:bg-nightpaper">
                  <h4 className="font-mono text-xs uppercase tracking-widest2 text-ember mb-4">
                    Results Dashboard
                  </h4>

                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {study.results.map((result) => (
                      <div
                        key={result.label}
                        className="rounded-xl border border-line-light dark:border-line-dark p-3 text-center"
                      >
                        <div className="font-mono text-sm md:text-lg font-semibold text-ink dark:text-nightink tnum">
                          {result.value}
                        </div>
                        <div className="font-mono text-[10px] uppercase tracking-wide text-ink-faint dark:text-nightink-faint mt-1 leading-tight">
                          {result.label}
                        </div>
                        <div className="font-mono text-[10px] text-sage dark:text-sage-soft mt-0.5">
                          {result.note}
                        </div>
                      </div>
                    ))}
                  </div>

                  <CaseStudyChart type={study.chart} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
