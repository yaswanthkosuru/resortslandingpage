import React from "react";

import { motion } from "motion/react";

const variants = (duration: number, delay: number) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration,
      delay: delay,
      staggerChildren: 0.3,
    },
  },
});

const BasicAnimate = ({
  children,
  duration,
  delay,
}: {
  duration: number;
  delay: number;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants(duration, delay)}
    >
      {children}
    </motion.div>
  );
};

export default BasicAnimate;
