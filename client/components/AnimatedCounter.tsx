import { useEffect, useRef } from "react";
import type React from "react";
import { useInView, useMotionValue, useTransform, animate, motion } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  className?: string;
  style?: React.CSSProperties;
}

function parseNumber(raw: string): { prefix: string; number: number; suffix: string } {
  const match = raw.match(/^([^0-9]*)([0-9][0-9,.]*)([^0-9]*)$/);
  if (!match) return { prefix: "", number: 0, suffix: raw };
  const num = parseFloat(match[2].replace(/,/g, ""));
  return { prefix: match[1], number: isNaN(num) ? 0 : num, suffix: match[3] };
}

export default function AnimatedCounter({ value, className = "", style }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" } as Parameters<typeof useInView>[1]);
  const { prefix, number, suffix } = parseNumber(value);
  const motionValue = useMotionValue(0);

  const formatted = useTransform(motionValue, (v) => {
    if (number >= 1_000_000) return (v / 1_000_000).toFixed(1) + "M";
    if (number >= 1_000) return Math.round(v).toLocaleString();
    return Math.round(v).toString();
  });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionValue, number, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [inView, number, motionValue]);

  if (number === 0) {
    return <span ref={ref} className={className} style={style}>{value}</span>;
  }

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}
      <motion.span>{formatted}</motion.span>
      {suffix}
    </span>
  );
}
