"use client";
import React, { useEffect } from "react";
import { motion, Variants, useAnimation } from "motion/react";
import sleep from "@/utils/sleep";

const letterAnimationVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      staggerChildren: 0.05,
    },
  },

  textColorChange: {
    color: "white",
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const backgroundAnimationVariants = {
  backgroundColorChange: {
    backgroundColor: "#2B3530",
  },
};

const AnimatedPreloader = () => {
  const displayText = "yaswanthresidency";
  const textAnimationControls = useAnimation();
  const backgroundAnimationControls = useAnimation();

  useEffect(() => {
    let isMounted = true;

    async function runAnimationSequence() {
      if (!isMounted) return;
      await textAnimationControls.start("visible");
      await sleep(500);
      if (!isMounted) return;
      await textAnimationControls.start("textColorChange");
      await backgroundAnimationControls.start("backgroundColorChange");
      await sleep(500);
      if (!isMounted) return;
      await textAnimationControls.start("exit");
    }

    runAnimationSequence();

    return () => {
      isMounted = false;
    };
  }, [backgroundAnimationControls, textAnimationControls]);

  const animatedLetters = displayText.split("").map((char, index) => (
    <motion.span
      variants={letterAnimationVariants}
      className={`text-${index} font-extralight`}
      key={index}
      custom={index}
    >
      {char}
    </motion.span>
  ));

  return (
    <motion.div
      variants={backgroundAnimationVariants}
      initial="hidden"
      animate={backgroundAnimationControls}
      className="bg-[#CED1BF] h-screen overflow-hidden flex justify-center items-center"
    >
      <motion.span
        variants={letterAnimationVariants}
        initial="hidden"
        animate={textAnimationControls}
        className="text-2xl flex justify-center items-center gap-2"
      >
        {animatedLetters}
      </motion.span>
    </motion.div>
  );
};

export default AnimatedPreloader;
