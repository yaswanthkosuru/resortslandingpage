"use client";
import { motion } from "motion/react";
import { div } from "motion/react-client";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <motion.div
        initial={{ clipPath: "inset(0 0 0% 0)" }}
        animate={{ clipPath: "inset(0 0 100% 0)" }}
        transition={{ duration: 0.5, ease: "backIn" }}
        className="bg-primary top-0 bottom-0 left-0 right-0 fixed z-50"
      ></motion.div>
      {children}
    </div>
  );
}
