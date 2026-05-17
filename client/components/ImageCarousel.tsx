import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

export default function ImageCarousel() {
  const { t } = useLanguage();

  return (
    <div className="relative w-full overflow-hidden" style={{ height: "100svh", minHeight: 520 }}>
      {/* Background video */}
      <video
        src="https://cdn.builder.io/o/assets%2Fe5a5727af6f64ca390a031056c6f518e%2F51a213f0855345f587beaa659a5ac29e?alt=media&token=3e966c50-54f9-4290-89de-fb936b8f9b50&apiKey=e5a5727af6f64ca390a031056c6f518e"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, rgba(0,46,93,0.85) 0%, rgba(0,46,93,0.55) 60%, rgba(0,0,0,0.2) 100%)",
        }}
      />

      {/* Animated content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="section-container w-full">
          <motion.div
            className="max-w-2xl"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {/* Tag line */}
            <motion.p
              variants={fadeIn}
              className="text-lime-400 font-semibold uppercase tracking-widest text-sm mb-4"
            >
              ISO 9001:2025 · Level 1 BBBEE · 4 Decades of Excellence
            </motion.p>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl font-black text-white leading-tight mb-6"
              style={{ letterSpacing: "-0.02em" }}
            >
              Engineering
              <br />
              <span style={{ color: "#f5c033" }}>the Future</span>
              <br />
              of Africa
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-lg"
            >
              {t("missionStatement").slice(0, 180)}…
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded text-sm transition-all hover:opacity-90"
                style={{ backgroundColor: "#f5c033", color: "#002e5d" }}
              >
                {t("getInTouch")} <ChevronRight size={18} />
              </Link>
              <a
                href="/#services"
                className="inline-flex items-center gap-2 px-8 py-4 font-bold rounded text-sm border-2 border-white/40 text-white hover:border-lime-400 hover:text-lime-400 transition-all"
              >
                {t("services")}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(to right, #f5c033, #84cc16, #002e5d)" }}
        initial={{ scaleX: 0, transformOrigin: "left" }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.2, duration: 0.9, ease: "easeOut" }}
      />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          className="w-0.5 h-8 bg-white/30 rounded"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}
