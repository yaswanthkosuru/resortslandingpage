"use client";
import React, { useEffect } from "react";
import { motion, Variants, useAnimation } from "motion/react";
import sleep from "@/utils/sleep";

const letterAnimationVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: (letterIndex: number) => {
    console.log(letterIndex, "letter index");
    if (letterIndex % 2 === 0) {
      return {
        opacity: 1,
        y: [20, 0],
        transition: {
          type: "tween",
          staggerChildren: 0.05,
        },
      };
    }
    return {
      opacity: 1,
      x: [20, 0],
      transition: {
        staggerChildren: 0.05,
        type: "tween", // Different delay for even and odd
      },
    };
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
    async function runAnimationSequence() {
      await textAnimationControls.start("visible");
      await sleep(500);
      await textAnimationControls.start("textColorChange");
      await backgroundAnimationControls.start("backgroundColorChange");
      await sleep(500);
      await textAnimationControls.start("exit");
    }

    runAnimationSequence();
  }, [textAnimationControls, backgroundAnimationControls]);

  const animatedLetters = displayText.split("").map((char, index) => (
    <motion.span
      variants={letterAnimationVariants}
      className={`text-${index}`}
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
