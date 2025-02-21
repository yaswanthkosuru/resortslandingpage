import { motion } from "motion/react";
import React from "react";

interface MaskedTextProps {
  text: string;
  /** Optionally allow text wrapping instead of forcing a single line */
  allowWrap?: boolean;
  /** Additional classes for styling */
  className?: string;
}

const MaskedText: React.FC<MaskedTextProps> = ({
  text,
  allowWrap = false,
  className = "",
}) => {
  // Normalize whitespace: collapse multiple spaces/newlines into a single space.
  const normalizedText = text.replace(/\s+/g, " ").trim();

  return (
    <span
      className={`inline-flex overflow-hidden ${
        allowWrap ? "" : "whitespace-nowrap"
      } ${className}`}
    >
      {normalizedText.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ clipPath: "inset(100% 0 0 0)" }}
          whileInView={{ clipPath: "inset(0% 0 0 0)" }}
          transition={{ duration: 0.5 }}
          // viewport={{ once: true }}
          className="inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </span>
  );
};

export default MaskedText;
