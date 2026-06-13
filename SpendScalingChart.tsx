"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { spendScalingData } from "@/data/content";

export function SpendScalingChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <AreaChart data={spendScalingData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
        <defs>
          <linearGradient id="spendGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#C75B39" stopOpacity={0.35} />
            <stop offset="100%" stopColor="#C75B39" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="currentColor" opacity={0.1} vertical={false} />
        <XAxis
          dataKey="day"
          tick={{ fontSize: 11, fontFamily: "var(--font-jetbrains)", fill: "currentColor" }}
          tickLine={false}
          axisLine={{ stroke: "currentColor", opacity: 0.15 }}
        />
        <YAxis
          tick={{ fontSize: 11, fontFamily: "var(--font-jetbrains)", fill: "currentColor" }}
          tickLine={false}
          axisLine={false}
          tickFormatter={(v) => `₹${v}L`}
          width={50}
        />
        <Tooltip
          contentStyle={{
            background: "var(--tooltip-bg, #FBF8F2)",
            border: "1px solid #D9D0BF",
            borderRadius: 8,
            fontSize: 12,
            fontFamily: "var(--font-jetbrains)",
          }}
          formatter={(value: number, name: string) =>
            name === "spend" ? [`₹${value}L`, "Ad Spend"] : [value.toLocaleString("en-IN"), "Conversions"]
          }
        />
        <Area
          type="monotone"
          dataKey="spend"
          stroke="#C75B39"
          strokeWidth={2}
          fill="url(#spendGradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
