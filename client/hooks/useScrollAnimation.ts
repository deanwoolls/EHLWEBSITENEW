import { useRef } from "react";
import { useInView } from "framer-motion";

export function useScrollAnimation(margin = "-80px") {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin } as Parameters<typeof useInView>[1]);
  return { ref, inView };
}
