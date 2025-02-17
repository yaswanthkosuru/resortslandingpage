import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function PinnedElement({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  // Move element up as user scrolls down
  const y = useTransform(scrollYProgress, [0, 0.5], ["0%", "-50%"]);

  return (
    <motion.div
      ref={ref}
      style={{
        transform: "translate(-50%, -50%)",
        y,
      }}
    >
      {children}
    </motion.div>
  );
}
