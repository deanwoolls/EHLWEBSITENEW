import { useState } from "react";
import { LucideIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  backgroundColor: string;
  backContent: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  backgroundColor,
  backContent,
}: ServiceCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className="h-64 cursor-pointer"
      style={{ perspective: 1200 }}
      onClick={() => setFlipped(!flipped)}
      whileHover={!flipped ? { scale: 1.03, y: -4 } : {}}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-xl flex flex-col items-center justify-center text-white shadow-xl"
          style={{ backgroundColor, backfaceVisibility: "hidden" }}
        >
          <motion.div
            initial={false}
            whileHover={{ rotate: [0, -8, 8, 0] }}
            transition={{ duration: 0.4 }}
            className="mb-4"
          >
            <Icon size={36} />
          </motion.div>
          <h3 className="text-xl font-bold text-center px-4">{title}</h3>
          <p className="text-xs mt-4 opacity-50 uppercase tracking-widest">Tap to learn more</p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-xl flex flex-col items-center justify-center text-white shadow-xl px-6"
          style={{
            backgroundColor: "#1a1a2e",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderTop: "3px solid #f5c033",
          }}
        >
          <Icon size={24} className="mb-3 opacity-60" style={{ color: "#f5c033" }} />
          <h4 className="text-sm font-bold mb-2 text-center" style={{ color: "#f5c033" }}>{title}</h4>
          <p className="text-xs leading-relaxed text-center text-white/80">{backContent}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
