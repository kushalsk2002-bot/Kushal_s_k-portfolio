"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { testimonials } from "@/data/content";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 ledger-rule">
      <Container>
        <SectionHeading
          code="07"
          title="Testimonials"
          description="Reserved for notes from clients and managers — to be added."
        />

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-2xl border border-dashed border-line-light dark:border-line-dark bg-paper-card/50 dark:bg-nightpaper-card/50 p-6"
            >
              <Quote size={20} className="text-ember mb-4" />
              <p className="text-sm md:text-base text-ink-faint dark:text-nightink-faint italic leading-relaxed mb-4">
                {t.quote}
              </p>
              <div className="font-mono text-xs uppercase tracking-wide text-ink-soft dark:text-nightink-soft">
                {t.name} — {t.role}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
