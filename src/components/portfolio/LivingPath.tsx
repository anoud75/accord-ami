import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Props {
  variant?: "hero" | "divider" | "vertical";
  className?: string;
  color?: string;
}

const LivingPath = ({ variant = "divider", className = "", color = "hsl(var(--teal))" }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  if (variant === "hero") {
    return (
      <div ref={ref} className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden>
        <svg viewBox="0 0 1200 600" fill="none" className="w-full h-full" preserveAspectRatio="none">
          <motion.path
            d="M -50 480 C 200 480, 280 200, 520 220 S 880 460, 1100 200 S 1300 80, 1400 120"
            stroke={color}
            strokeOpacity="0.55"
            strokeWidth="1.5"
            style={{ pathLength }}
          />
          <motion.path
            d="M -50 520 C 240 520, 360 320, 600 320 S 920 520, 1150 280"
            stroke="hsl(var(--coral))"
            strokeOpacity="0.35"
            strokeWidth="1"
            style={{ pathLength }}
          />
          <motion.path
            d="M -50 440 C 180 440, 320 140, 580 160 S 940 380, 1180 140"
            stroke="hsl(var(--lavender))"
            strokeOpacity="0.3"
            strokeWidth="1"
            style={{ pathLength }}
          />
          {[180, 360, 540, 720, 900].map((x, i) => (
            <motion.circle
              key={x}
              cx={x}
              cy={220 + Math.sin(i) * 60}
              r="2.5"
              fill={color}
              fillOpacity="0.4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
            />
          ))}
        </svg>
      </div>
    );
  }

  if (variant === "vertical") {
    return (
      <div ref={ref} className={`pointer-events-none ${className}`} aria-hidden>
        <svg viewBox="0 0 60 800" fill="none" className="h-full w-full" preserveAspectRatio="none">
          <motion.path
            d="M 30 0 C 10 150, 50 250, 30 400 S 10 650, 30 800"
            stroke={color}
            strokeOpacity="0.4"
            strokeWidth="1"
            style={{ pathLength }}
          />
        </svg>
      </div>
    );
  }

  return (
    <div ref={ref} className={`pointer-events-none w-full ${className}`} aria-hidden>
      <svg viewBox="0 0 1200 80" fill="none" className="w-full h-20" preserveAspectRatio="none">
        <motion.path
          d="M 0 40 C 200 10, 400 70, 600 40 S 1000 10, 1200 40"
          stroke={color}
          strokeOpacity="0.45"
          strokeWidth="1.2"
          style={{ pathLength }}
        />
      </svg>
    </div>
  );
};

export default LivingPath;
