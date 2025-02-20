"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  MotionValue,
  useAnimation,
  useMotionValue,
  useScroll,
  useTransform,
  Variants,
} from "motion/react";
import Flog from "@/utils/flog";
import NavBar from "./Navbar";
import PlayIcon from "./ui/Playicon";
import { useSpring } from "motion/react";
import VideoPlayer from "./Videowithbackground";
import { RectangleGroup } from "./ui/Masks";

const Background: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["end end", "end start"],
  });
  const firstGroupHeight = useTransform(scrollYProgress, [0, 0.6], [0, 0.026]);
  const secondGroupHeight = useTransform(
    scrollYProgress,
    [0.25, 0.6],
    [0, 0.026]
  );
  const thirdGroupHeight = useTransform(scrollYProgress, [0.25, 1], [0, 0.026]);
  const fourthGroupHeight = useTransform(
    scrollYProgress,
    [0.75, 1],
    [0, 0.031]
  );

  const rectangleIndices = Array.from({ length: 10 }, (_, i) => i + 1);
  const handleLoadedData = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0.22;
    }
  };

  const handleSeeked = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[calc(100vh+70px)] bg-[#2B3530] overflow-hidden"
    >
      <video
        autoPlay
        loop
        muted
        ref={videoRef}
        style={{
          mask: "url(#Herovideo)",
          WebkitMask: "url(#Herovideo)",
        }}
        onLoadedData={handleLoadedData}
        onSeeked={handleSeeked}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://res.cloudinary.com/kvpproducts/video/upload/v1740043925/hero-bg_xybqx8.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <mask
            id="Herovideo"
            maskUnits="objectBoundingBox"
            maskContentUnits="objectBoundingBox"
          >
            <rect width="1" height="1" fill="white" />
            <RectangleGroup
              startOffset={0.75}
              scrollProgress={scrollYProgress}
              rectangleIndices={rectangleIndices}
              rectHeight={firstGroupHeight}
            />
            <RectangleGroup
              startOffset={0.5}
              scrollProgress={scrollYProgress}
              rectangleIndices={rectangleIndices}
              rectHeight={secondGroupHeight}
            />
            <RectangleGroup
              startOffset={0.25}
              scrollProgress={scrollYProgress}
              rectangleIndices={rectangleIndices}
              rectHeight={thirdGroupHeight}
            />
            <RectangleGroup
              startOffset={0.25}
              scrollProgress={scrollYProgress}
              rectangleIndices={rectangleIndices}
              rectHeight={fourthGroupHeight}
            />
          </mask>
        </defs>
      </svg>
    </div>
  );
};
interface MarqueeProps {
  text: string;
}

const Marquee: React.FC<MarqueeProps> = ({ text }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap text-white py-20">
      <motion.div
        className="flex text-[150px] font-extralight leading-8"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
      >
        <span className="mr-16">{text}</span>
        <span className="mr-16">{text}</span>
      </motion.div>
    </div>
  );
};

function HeroComponent() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const controls = useAnimation();
  const springConfig = { stiffness: 300, damping: 30 };
  const [isClicked, setIsClicked] = useState(false);
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  const [showfollower, setShowFollower] = useState(false);
  const onMouseMove = (event: React.MouseEvent) => {
    if (!showfollower) {
      setShowFollower(true);
    }
    mouseX.set(event.clientX - 28);
    const y = Math.max(event.clientY - 28);
    if (y < 110) {
      setShowFollower(false);
    }
    mouseY.set(y);
  };
  const handlevideoclick = () => {
    setIsClicked((prev: any) => !prev);
  };
  useEffect(() => {
    if (isClicked) {
      controls.start("animate");
    } else {
      controls.start("initial");
    }
  }, [isClicked]);

  return (
    <div onMouseMove={onMouseMove} className=" cursor-pointer">
      <AnimatePresence>
        {isClicked && <VideoPlayer setIsclicked={setIsClicked} />}
      </AnimatePresence>
      <motion.div
        className={`absolute z-20 ${showfollower ? "block" : "hidden"}`}
        onClick={handlevideoclick}
        style={{ x: mouseX, y: mouseY }}
      >
        <PlayIcon />
      </motion.div>
      <Background />

      <div className="absolute bottom-[1%] left-0 right-0 z-10">
        <Marquee text="Welcome to Yaswanth Resorts." />
        <hr className="w-[85%] h-2 mx-auto mt-10" />
        <div className="text-white text-xl text-center ">
          Your Dream Getaway Awaits
        </div>
        <div className="text-white text-xl text-center">
          Nature’s Embrace, Unmatched Elegance
        </div>
      </div>
    </div>
  );
}

export default HeroComponent;
