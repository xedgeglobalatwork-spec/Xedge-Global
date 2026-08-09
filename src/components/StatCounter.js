"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function StatCounter({ target, suffix = "", label, light = false }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start;
    let frame;
    const duration = 1800;

    function tick(ts) {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, target]);

  return (
    <div ref={ref}>
      <div className={`text-4xl md:text-5xl font-extrabold ${light ? "text-white" : "text-navy"}`}>
        {display.toLocaleString()}
        {suffix}
      </div>
      {label && (
        <div className={`mt-1 text-sm ${light ? "text-white/60" : "text-slate-light"}`}>
          {label}
        </div>
      )}
    </div>
  );
}
