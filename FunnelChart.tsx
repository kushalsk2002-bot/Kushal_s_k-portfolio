"use client";

import { motion } from "framer-motion";
import { funnelData } from "@/data/content";

export function FunnelChart() {
  return (
    <div className="space-y-3 py-2">
      {funnelData.map((stage, i) => (
        <div key={stage.stage} className="flex items-center gap-4">
          <div className="w-32 md:w-40 shrink-0 text-right">
            <span className="font-mono text-xs uppercase tracking-wide text-ink-faint dark:text-nightink-faint">
              {stage.stage}
            </span>
          </div>
          <div className="flex-1 h-8 bg-line-light/40 dark:bg-line-dark/40 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${stage.value}%` }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="h-full rounded-full flex items-center justify-end px-3"
              style={{
                background: `linear-gradient(90deg, #7A8B7F, #C75B39)`,
              }}
            >
              <span className="font-mono text-xs text-paper font-medium whitespace-nowrap tnum">
                {stage.label}
              </span>
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );
}
