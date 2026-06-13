"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";
import { Container } from "./Container";
import { profile } from "@/data/content";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-line-light dark:border-line-dark bg-paper-card dark:bg-nightpaper-card p-8 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-ember/10 dark:bg-ember/[0.08] rounded-full blur-3xl pointer-events-none" />

          <span className="ledger-code">§ 08 — Contact</span>
          <h2 className="font-display font-semibold text-display-md text-ink dark:text-nightink mt-4 mb-6 max-w-2xl mx-auto">
            Let&apos;s discuss growth marketing opportunities
          </h2>
          <p className="text-ink-soft dark:text-nightink-soft max-w-xl mx-auto mb-10 text-base md:text-lg">
            Open to performance marketing and growth roles in Germany, Singapore, UAE, and beyond.
            Reach out directly via email or LinkedIn.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-ink dark:bg-nightink text-paper dark:text-nightpaper font-mono text-xs uppercase tracking-widest2 rounded-full hover:bg-ember transition-colors"
            >
              <Mail size={14} />
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-line-light dark:border-line-dark font-mono text-xs uppercase tracking-widest2 rounded-full hover:border-ember hover:text-ember transition-colors"
            >
              <Linkedin size={14} />
              LinkedIn
              <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>

        <footer className="mt-16 pt-8 ledger-rule flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs uppercase tracking-widest2 text-ink-faint dark:text-nightink-faint">
            © 2026 {profile.name} — {profile.location}
          </p>
          <p className="font-mono text-xs uppercase tracking-widest2 text-ink-faint dark:text-nightink-faint">
            {profile.role}
          </p>
        </footer>
      </Container>
    </section>
  );
}
