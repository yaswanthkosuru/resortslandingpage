import { animate, MotionValue, useScroll, useTransform } from "motion/react";
import { motion, useMotionValue } from "motion/react";
import { div } from "motion/react-client";
import React, { useEffect, useRef, useState } from "react";

interface RectangleGroupProps {
  rectangleIndices: number[];
  scrollProgress: MotionValue<number>;
  rectHeight: MotionValue<number>;
  startOffset: number;
  fill: string;
}

interface RectangleProps {
  index: number;
  rectHeight: MotionValue<number>;
  startOffset: number;
  totallen: number;
  fill: string;
}

export const Rectangle: React.FC<RectangleProps> = ({
  index,
  rectHeight,
  startOffset,
  totallen,
  fill,
}) => {
  let step;
  let yPosition;
  if (startOffset === 0) {
    step = 0.3 / totallen;
    yPosition = index * step + startOffset - 0.05;
  } else {
    step = 0.25 / totallen;
    yPosition = index * step + startOffset;
  }

  return (
    <motion.rect
      key={index}
      x="0"
      y={yPosition}
      width="1"
      style={{ height: rectHeight }}
      fill={fill}
    />
  );
};

export const RectangleGroup: React.FC<RectangleGroupProps> = ({
  rectangleIndices,
  rectHeight,
  startOffset,
  fill,
}) => {
  return (
    <>
      {rectangleIndices.map((index) => (
        <Rectangle
          key={index}
          fill={fill}
          index={index}
          rectHeight={rectHeight}
          startOffset={startOffset}
          totallen={rectangleIndices.length}
        />
      ))}
    </>
  );
};
interface SvgMaskDemoProps {
  fill: string;
}
const SvgMaskDemo: React.FC<SvgMaskDemoProps> = ({ fill }) => {
  const scrollYProgress = useMotionValue(0);
  useEffect(() => {
    const controls = animate(scrollYProgress, 1, {
      duration: 0.5,
      ease: "easeOut",
    });
    return controls.stop;
  }, [scrollYProgress]);
  const firstGroupHeight = useTransform(scrollYProgress, [0, 0.8], [0, 0.026]);
  const secondGroupHeight = useTransform(
    scrollYProgress,
    [0.25, 0.8],
    [0, 0.026]
  );
  const thirdGroupHeight = useTransform(
    scrollYProgress,
    [0.25, 0.9],
    [0, 0.026]
  );
  const fourthGroupHeight = useTransform(
    scrollYProgress,
    [0.75, 1],
    [0, 0.031]
  );
  const rectangleIndices = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <div
      className="relative w-full h-screen bg-primary overflow-hidden"
      style={{
        mask: "url(#transitionmask)",
        WebkitMask: "url(#transitionmask)",
      }}
    >
      <svg>
        <defs>
          <mask
            maskUnits="objectBoundingBox"
            maskContentUnits="objectBoundingBox"
            id="transitionmask"
          >
            {fill === "black" && <rect width="1" height="1" fill="white" />}
            <RectangleGroup
              startOffset={0.75}
              scrollProgress={scrollYProgress}
              rectangleIndices={rectangleIndices}
              rectHeight={firstGroupHeight}
              fill={fill}
            />
            <RectangleGroup
              startOffset={0.5}
              scrollProgress={scrollYProgress}
              rectangleIndices={rectangleIndices}
              rectHeight={secondGroupHeight}
              fill={fill}
            />
            <RectangleGroup
              startOffset={0.25}
              scrollProgress={scrollYProgress}
              rectangleIndices={rectangleIndices}
              rectHeight={thirdGroupHeight}
              fill={fill}
            />
            <RectangleGroup
              startOffset={0}
              scrollProgress={scrollYProgress}
              rectangleIndices={rectangleIndices}
              rectHeight={fourthGroupHeight}
              fill={fill}
            />
          </mask>
        </defs>
      </svg>
    </div>
  );
};

export default SvgMaskDemo;
