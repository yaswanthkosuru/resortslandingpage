"use client";
import React, { useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import Flog from "@/utils/flog";

interface RectsProps {
  rects: number[];
  yProgress: MotionValue<number>;
  height: MotionValue<number>;
  start: number;
}
interface RectProps {
  i: number;
  h: MotionValue<number>;
  start: number;
}

const Rect: React.FC<RectProps> = ({ i, h, start }) => {
  const yAxis = start + i * 0.005 + i * 0.02;

  return (
    <motion.rect
      key={i}
      x="0"
      y={yAxis}
      width="1"
      style={{
        height: h,
      }}
      fill="black"
    />
  );
};

const Rects: React.FC<RectsProps> = ({ rects, height, start }) => {
  return (
    <>
      {rects.map((i) => {
        return <Rect start={start} key={i} i={i} h={height} />;
      })}
    </>
  );
};

const Bg: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end start"],
  });
  Flog(scrollYProgress, "scrollYProgress");
  const height1 = useTransform(scrollYProgress, [0, 0.6], [0, 0.026]);
  const height2 = useTransform(scrollYProgress, [0.25, 0.6], [0, 0.026]);
  const height3 = useTransform(scrollYProgress, [0.5, 1], [0, 0.026]);
  const height4 = useTransform(scrollYProgress, [0.75, 1], [0, 0.026]);
  const rects = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div
      ref={ref}
      className="relative w-full h-[calc(100vh+70px)] bg-[#2B3530] overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        style={{
          mask: "url(#videoMask)",
          WebkitMask: "url(#videoMask)",
        }}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        onLoadedMetadata={(e) => {
          e.currentTarget.currentTime = 0.22;
        }}
      >
        <source src="/ele.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <mask
            id="videoMask"
            maskUnits="objectBoundingBox"
            maskContentUnits="objectBoundingBox"
          >
            <rect width="1" height="1" fill="white" />
            <Rects
              start={0.75}
              yProgress={scrollYProgress}
              rects={rects}
              height={height1}
            />
            <Rects
              start={0.5}
              yProgress={scrollYProgress}
              rects={rects}
              height={height2}
            />
            <Rects
              start={0.25}
              yProgress={scrollYProgress}
              rects={rects}
              height={height3}
            />
            <Rects
              start={0.25}
              yProgress={scrollYProgress}
              rects={rects}
              height={height4}
            />
          </mask>
        </defs>
      </svg>
    </div>
  );
};

export default Bg;
