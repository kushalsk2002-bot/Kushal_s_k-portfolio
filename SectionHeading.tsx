"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  code: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({ code, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={align === "center" ? "text-center" : ""}
    >
      <div className="flex items-center gap-3 mb-4 justify-start">
        {align === "center" && <div className="flex-1 h-px bg-line-light dark:bg-line-dark hidden md:block" />}
        <span className="ledger-code">{`§ ${code}`}</span>
        <span className="ledger-code opacity-40">— PMK / 2026</span>
        {align === "center" && <div className="flex-1 h-px bg-line-light dark:bg-line-dark hidden md:block" />}
      </div>
      <h2 className="font-display font-semibold text-display-md text-ink dark:text-nightink">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-ink-soft dark:text-nightink-soft text-base md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
