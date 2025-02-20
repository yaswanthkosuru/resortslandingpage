import Flog from "@/utils/flog";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { RectangleGroup } from "./ui/Masks";
import Image from "next/image";
import { div } from "motion/react-client";
import { MotionValue } from "motion/react";

const MotionImage = motion(Image);
interface BackgroundProps {
  scrollYProgress: MotionValue<number>;
  clippath: MotionValue<string>;
}
const Background: React.FC<BackgroundProps> = ({
  scrollYProgress,
  clippath,
}) => {
  const firstGroupHeight = useTransform(scrollYProgress, [0, 0.8], [0, 0.026]);
  const secondGroupHeight = useTransform(scrollYProgress, [0.3, 1], [0, 0.026]);
  const thirdGroupHeight = useTransform(scrollYProgress, [0.25, 1], [0, 0.026]);
  const fourthGroupHeight = useTransform(scrollYProgress, [0.5, 1], [0, 0.031]);

  const rectangleIndices = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="relative w-full h-[calc(100vh+70px)] bg-[#2B3530] overflow-hidden">
      <Image
        src={"/well.jpeg"}
        fill
        alt="image"
        style={{
          mask: "url(#stepimage)",
          WebkitMask: "url(#stepimage)",
        }}
        className="absolute top-0 left-0 w-full h-full object-cover z-20"
        objectFit="cover"
      />
      <Image
        src={"/livingroom.jpeg"}
        fill
        alt="light"
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
        objectFit="cover"
      />
      <motion.div
        onViewportEnter={() => console.log("Element in view")}
        onViewportLeave={() => console.log("Element left view")}
        viewport={{ amount: 0.5, once: true }}
        whileInView={{
          top: ["100%", "50%"],
          transition: { duration: 0.5, type: "tween" },
        }}
        className="absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div className="z-30 bg-[#D1CCBF] mx-auto w-1/2 p-10 flex gap-4 items-center flex-col">
          01 - 05
          <h2 className="text-3xl font-thin">yaswanth</h2>
          <h3 className="text-3xl font-light"> innovation culture</h3>
          <motion.div className="relative w-full h-[200px] bg-red-200">
            <div className="absolute w-full top-0 bottom-0 right-0 left-0 h-[200px]">
              <Image
                src="/well.jpeg"
                fill
                alt="MotionImage"
                className="z-  10"
              />
            </div>
            <motion.div
              style={{ clipPath: clippath }}
              className=" relative w-full h-[200px]"
            >
              <Image
                src="/livingroom.jpeg"
                fill
                alt="MotionImage"
                className="z-10"
              />
            </motion.div>
          </motion.div>
          <span className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            omnis repellat dignissimos sit molestias, labore dolore delectus
            optio iste, laborum debitis totam molestiae veritatis nam fugit
            consequuntur autem quo doloribus.
          </span>
        </div>
      </motion.div>

      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <mask
            id="stepimage"
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
              startOffset={0.0}
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
export default function Steps() {
  const containerRef = useRef<HTMLHRElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const clippath = useTransform(
    scrollYProgress,
    [0.5, 1],
    ["inset(100% 0 0 0)", "inset(0% 0 0 0)"]
  );
  const yprogress = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  return (
    <div ref={containerRef} className="h-[200vh]">
      <div className="sticky top-0 h-screen  inset-0 w-full">
        <Background scrollYProgress={yprogress} clippath={clippath} />
        <div className="sticky top-0 z-20"></div>
      </div>
    </div>
  );
}
