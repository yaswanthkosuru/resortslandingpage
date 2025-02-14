"use client";
import React from "react";
import { motion, stagger, useAnimate, Variants } from "motion/react";
import sleep from "@/utils/sleep";
import { colours } from "@/utils/constants";

const itemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: () => ({
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  }),
};

const Preloader = () => {
  const name = "yaswanthresidency";
  const [scope, animate] = useAnimate();

  const names = name.split("").map((char, index) => (
    <motion.span
      variants={itemVariants}
      className={`text-${index}`}
      key={index}
      custom={Math.random() * 1}
    >
      {char}
    </motion.span>
  ));

  return (
    <motion.div
      ref={scope}
      className="bg-secondary h-screen  overflow-hidden flex justify-center items-center"
    >
      <motion.span
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        onAnimationComplete={async () => {
          console.log("Animation complete");
          await sleep(500);
          if (scope.current === null) return;
          animate(
            scope.current,
            { backgroundColor: `${colours.darkgreen}` },
            { duration: 1, type: "tween" }
          );
          animate(
            scope.current.querySelectorAll("span"),
            { color: "white" },
            { duration: 1, type: "tween" }
          );
          await sleep(200);
          await animate(
            scope.current.querySelectorAll("span"),
            { opacity: 0 },
            {
              duration: 1,
              type: "tween",
              delay: stagger(0.1, { from: "last" }),
            }
          );
          await animate(scope.current, { opacity: 0 }, { duration: 1 });
        }}
        className="text-2xl flex justify-center items-center gap-2"
      >
        {names}
      </motion.span>
    </motion.div>
  );
};

export default Preloader;
