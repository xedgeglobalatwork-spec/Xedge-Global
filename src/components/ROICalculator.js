"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

function computeCT(profit) {
  if (profit <= 50000) return profit * 0.19;
  if (profit >= 250000) return profit * 0.25;
  const marginalRelief = (250000 - profit) * (3 / 200);
  return profit * 0.25 - marginalRelief;
}

function formatGBP(n) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function ROICalculator({ config }) {
  const [value, setValue] = useState(config.default);

  const result = useMemo(() => {
    if (config.compute === "ctBanding") return computeCT(value);
    if (config.compute === "flatPercent") return value * config.percent;
    if (config.compute === "cfoSavings") {
      const fullTimeCost = 130000;
      const fractionalCost = Math.max(24000, value * 0.012);
      return Math.max(fullTimeCost - fractionalCost, 0);
    }
    return 0;
  }, [value, config]);

  const pct = ((value - config.min) / (config.max - config.min)) * 100;

  return (
    <div className="rounded-2xl border border-border-light bg-bg-soft p-7 md:p-8">
      <h4 className="mb-1 text-base font-bold text-slate-dark">{config.label}</h4>
      <p className="mb-6 text-xs text-slate-light">
        Drag the slider to see an indicative estimate.
      </p>

      <div className="mb-3 flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-body">{config.inputLabel}</span>
        <span className="text-sm font-bold text-purple">
          {config.prefix}
          {value.toLocaleString()}
        </span>
      </div>
      <input
        type="range"
        min={config.min}
        max={config.max}
        step={config.step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        style={{
          background: `linear-gradient(to right, var(--purple-accent) ${pct}%, var(--border-light) ${pct}%)`,
        }}
        aria-label={config.inputLabel}
      />

      <motion.div
        key={result}
        initial={{ opacity: 0.4, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-7 rounded-xl bg-navy-midnight p-6 text-center"
      >
        <div className="mb-1 text-xs text-white/50">{config.resultLabel}</div>
        <div className="text-3xl font-extrabold text-white">{formatGBP(result)}</div>
      </motion.div>
    </div>
  );
}
