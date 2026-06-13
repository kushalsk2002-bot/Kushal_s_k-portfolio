"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import { roasData } from "@/data/content";

export function RoasCpaChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <LineChart data={roasData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="currentColor" opacity={0.1} vertical={false} />
        <XAxis
          dataKey="month"
          tick={{ fontSize: 11, fontFamily: "var(--font-jetbrains)", fill: "currentColor" }}
          tickLine={false}
          axisLine={{ stroke: "currentColor", opacity: 0.15 }}
        />
        <YAxis
          yAxisId="left"
          tick={{ fontSize: 11, fontFamily: "var(--font-jetbrains)", fill: "currentColor" }}
          tickLine={false}
          axisLine={false}
          width={40}
          domain={[1, 2]}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          tick={{ fontSize: 11, fontFamily: "var(--font-jetbrains)", fill: "currentColor" }}
          tickLine={false}
          axisLine={false}
          width={50}
          tickFormatter={(v) => `₹${v}`}
        />
        <Tooltip
          contentStyle={{
            background: "#FBF8F2",
            border: "1px solid #D9D0BF",
            borderRadius: 8,
            fontSize: 12,
            fontFamily: "var(--font-jetbrains)",
          }}
        />
        <Legend wrapperStyle={{ fontSize: 11, fontFamily: "var(--font-jetbrains)" }} />
        <Line
          yAxisId="left"
          type="monotone"
          dataKey="roas"
          name="ROAS"
          stroke="#C75B39"
          strokeWidth={2}
          dot={{ r: 3 }}
        />
        <Line
          yAxisId="right"
          type="monotone"
          dataKey="cpa"
          name="CPA (₹)"
          stroke="#7A8B7F"
          strokeWidth={2}
          dot={{ r: 3 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
