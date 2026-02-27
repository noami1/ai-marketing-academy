"use client";

import { useEffect, useState } from "react";

const words = ["execute.", "innovate.", "scale.", "lead."];

export default function WordCycle() {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrev(index);
      setIndex((i) => (i + 1) % words.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <span
      className="relative inline-flex overflow-hidden align-bottom"
      style={{ height: "1.12em" }}
    >
      {/* invisible sizer for width */}
      <span className="invisible">innovate.</span>
      {words.map((word, i) => {
        const isActive = i === index;
        const isLeaving = i === prev;
        return (
          <span
            key={word}
            className={[
              "absolute left-0 top-0 transition-all duration-600",
              isActive && "translate-y-0 opacity-100",
              isLeaving && "-translate-y-full opacity-0",
              !isActive && !isLeaving && "translate-y-full opacity-0",
            ]
              .filter(Boolean)
              .join(" ")}
            style={{
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {word}
          </span>
        );
      })}
    </span>
  );
}
