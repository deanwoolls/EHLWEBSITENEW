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
        src="https://cdn.builder.io/o/assets%2Fe5a5727af6f64ca390a031056c6f518e%2F51d90f82b79148bc9c0e89353a35eb3e?alt=media&token=d1831b1c-eb5e-43ed-b1f1-c56829600487&apiKey=e5a5727af6f64ca390a031056c6f518e"
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
          background: "linear-gradient(to right, rgba(0,46,93,0.45) 0%, rgba(0,46,93,0.25) 60%, rgba(0,0,0,0.05) 100%)",
        }}
      />

      {/* Animated content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="section-container w-full">
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
        <span className="text-white/50 text-xs uppercase tracking-widest">{t("scroll")}</span>
        <motion.div
          className="w-0.5 h-8 bg-white/30 rounded"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}
