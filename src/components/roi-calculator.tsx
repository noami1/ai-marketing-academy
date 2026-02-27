"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Counter from "@/components/counter";

export default function RoiCalculator() {
  const [teamSize, setTeamSize] = useState(5);
  const [hoursPerWeek, setHoursPerWeek] = useState(20);
  const [hourlyRate, setHourlyRate] = useState(75);
  const [showResults, setShowResults] = useState(false);

  const results = useMemo(() => {
    const weeklyHours = teamSize * hoursPerWeek;
    const savedPercent = 0.35; // 35% time savings with AI
    const savedHoursWeekly = Math.round(weeklyHours * savedPercent);
    const savedHoursYearly = savedHoursWeekly * 52;
    const savedCostYearly = savedHoursYearly * hourlyRate;
    const productivityGain = Math.round(savedPercent * 100);

    return {
      savedHoursWeekly,
      savedHoursYearly,
      savedCostYearly,
      productivityGain,
    };
  }, [teamSize, hoursPerWeek, hourlyRate]);

  return (
    <div className="rounded-2xl border border-border bg-bg-primary p-6 md:p-8">
      <AnimatePresence mode="wait">
        {!showResults ? (
          <motion.div
            key="inputs"
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
          >
            <h3 className="font-heading text-xl font-bold tracking-tight text-text-primary">
              Calculate Your AI ROI
            </h3>
            <p className="mt-1 text-sm text-text-muted">
              See how much time and money your team could save with AI marketing
              tools.
            </p>

            <div className="mt-8 space-y-8">
              {/* Team size slider */}
              <div>
                <div className="mb-2 flex items-baseline justify-between">
                  <label className="font-heading text-xs font-semibold uppercase tracking-widest text-text-muted">
                    Marketing team size
                  </label>
                  <span className="font-heading text-lg font-bold text-text-primary">
                    {teamSize}
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={50}
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="slider-input w-full"
                />
                <div className="mt-1 flex justify-between text-[10px] text-text-muted">
                  <span>1 person</span>
                  <span>50 people</span>
                </div>
              </div>

              {/* Hours per week slider */}
              <div>
                <div className="mb-2 flex items-baseline justify-between">
                  <label className="font-heading text-xs font-semibold uppercase tracking-widest text-text-muted">
                    Hours on content per person/week
                  </label>
                  <span className="font-heading text-lg font-bold text-text-primary">
                    {hoursPerWeek}h
                  </span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={40}
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="slider-input w-full"
                />
                <div className="mt-1 flex justify-between text-[10px] text-text-muted">
                  <span>5 hours</span>
                  <span>40 hours</span>
                </div>
              </div>

              {/* Hourly rate slider */}
              <div>
                <div className="mb-2 flex items-baseline justify-between">
                  <label className="font-heading text-xs font-semibold uppercase tracking-widest text-text-muted">
                    Average hourly cost
                  </label>
                  <span className="font-heading text-lg font-bold text-text-primary">
                    ${hourlyRate}
                  </span>
                </div>
                <input
                  type="range"
                  min={25}
                  max={200}
                  step={5}
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="slider-input w-full"
                />
                <div className="mt-1 flex justify-between text-[10px] text-text-muted">
                  <span>$25/hr</span>
                  <span>$200/hr</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowResults(true)}
              className="mt-8 w-full rounded-full bg-accent py-4 font-heading text-sm font-semibold text-text-inverse transition-all hover:bg-accent-hover active:scale-[0.98]"
            >
              Calculate My Savings →
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-6 flex items-center justify-between">
              <h3 className="font-heading text-xl font-bold tracking-tight text-text-primary">
                Your Estimated AI Savings
              </h3>
              <button
                onClick={() => setShowResults(false)}
                className="font-heading text-xs font-medium text-text-muted transition-colors hover:text-text-primary"
              >
                ← Recalculate
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-xl bg-bg-inverse p-5 text-center"
              >
                <div className="font-heading text-3xl font-bold text-text-inverse md:text-4xl">
                  $<Counter target={results.savedCostYearly} duration={1.5} />
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-widest text-text-muted">
                  Saved per year
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-xl bg-bg-tertiary p-5 text-center"
              >
                <div className="font-heading text-3xl font-bold text-text-primary md:text-4xl">
                  <Counter target={results.savedHoursYearly} duration={1.5} />
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-widest text-text-muted">
                  Hours saved per year
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-xl bg-bg-tertiary p-5 text-center"
              >
                <div className="font-heading text-3xl font-bold text-text-primary md:text-4xl">
                  <Counter target={results.savedHoursWeekly} duration={1} />h
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-widest text-text-muted">
                  Saved per week
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-xl bg-bg-tertiary p-5 text-center"
              >
                <div className="font-heading text-3xl font-bold text-text-primary md:text-4xl">
                  <Counter target={results.productivityGain} duration={1} />%
                </div>
                <div className="mt-1 text-xs font-medium uppercase tracking-widest text-text-muted">
                  Productivity gain
                </div>
              </motion.div>
            </div>

            <div className="mt-6 rounded-xl border border-border-subtle bg-bg-secondary p-4 text-center">
              <p className="text-sm text-text-secondary">
                Based on industry benchmarks, AI marketing tools save teams an
                average of <strong className="text-text-primary">35%</strong> of
                their content production time.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
