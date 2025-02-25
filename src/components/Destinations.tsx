import Flog from "@/utils/flog";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  Variants,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { RectangleGroup } from "./ui/Masks";
import Image from "next/image";
import { defs, div, tr } from "motion/react-client";
import { MotionValue } from "motion/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Cedarville_Cursive } from "next/font/google";
import { useWindowScrollDirection } from "./ui/ScrollDirection";
import { FaArrowRight } from "react-icons/fa";
import PlayIcon from "./ui/Playicon";
import Exploreicon from "./ui/exploreIcon";
import { animate } from "motion";

interface BackgroundProps {
  scrollYProgress: MotionValue<number>;
  clippath: MotionValue<string>;
}
const getvariants = (direction: string) => {
  return {
    initial: { opacity: 0, y: direction === "up" ? -100 : 100 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: {
      opacity: 0,
      y: direction === "up" ? 100 : -100,
      transition: { duration: 0.5 },
    },
  };
};

const AnimatedContent = ({
  textBefore,
  textAfter,
  change,
}: {
  textBefore: string;
  textAfter: string;
  change: boolean;
}) => {
  useEffect(() => {}, []);
  const scrolldirection = useWindowScrollDirection();
  console.log(scrolldirection, "scrolldirection");
  useEffect(() => {}, [scrolldirection]);

  return (
    <AnimatePresence mode="wait">
      {change ? (
        <motion.div
          key="box1" // ✅ Unique keys ensure exit animations
          variants={getvariants(scrolldirection)}
          initial="initial"
          animate="animate"
          exit="exit"
          className="font-extralight text-[120px]"
        >
          {textBefore}
        </motion.div>
      ) : (
        <motion.div
          key="box2" // ✅ Changed key to "box2"
          variants={getvariants(scrolldirection)}
          initial="initial"
          animate="animate"
          exit="exit"
          className="font-extralight text-[120px]"
        >
          {textAfter}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
const DescriptionVariants: Variants = {
  initial: {
    clipPath: "inset(0% 0% 100% 0%)",
  },
  animate: {
    clipPath: "inset(0% 0% 0% 0%)",
  },
  exit: {
    clipPath: "inset(0% 0% 100% 0%)",
  },
};
const Description = ({
  textBefore,
  textAfter,
  change,
}: {
  textBefore: string;
  textAfter: string;
  change: boolean;
}) => {
  useEffect(() => {}, []);
  const scrolldirection = useWindowScrollDirection();
  console.log(scrolldirection, "scrolldirection");
  useEffect(() => {}, [scrolldirection]);

  return (
    <AnimatePresence mode="wait">
      {change ? (
        <motion.div
          key="box1" // ✅ Unique keys ensure exit animations
          variants={DescriptionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="text-md"
        >
          {textBefore}
        </motion.div>
      ) : (
        <motion.div
          key="box2" // ✅ Changed key to "box2"
          variants={DescriptionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="text-md"
        >
          {textAfter}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
const DestContent = ({ change }: { change: boolean }) => {
  return (
    <div className="absolute z-30 top-[30%] left-10 right-0 text-white">
      <div className="flex flex-col gap-8 w-full h-full">
        <div className="">
          <AnimatedContent
            textBefore="Goa"
            textAfter="Maldives"
            change={change}
          />
        </div>
        <div className="inline-flex w-[90%] flex-col gap-4">
          <hr className="w-full bg-white" />
          <div className="flex items-center justify-between px-5">
            <div className="inline-flex gap-20 items-center">
              <RxHamburgerMenu />
              <span className="text-2xl pl-5">Explore More</span>
            </div>
            <FaArrowRight />
          </div>
          <hr className="bg-white" />
          <div className=" w-3/4">
            <Description
              textBefore="Experience the vibrant charm of Goa, where golden sands, swaying palms, and electrifying nightlife create the perfect coastal escape"
              textAfter="Step into the Maldives, where turquoise waters meet overwater villas, and every moment feels like a dream of endless serenity."
              change={change}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Background: React.FC<BackgroundProps> = ({
  scrollYProgress,
  clippath,
}) => {
  const firstGroupHeight = useTransform(scrollYProgress, [0, 0.5], [0, 0.026]);
  const secondGroupHeight = useTransform(
    scrollYProgress,
    [0.25, 0.8],
    [0, 0.026]
  );
  const thirdGroupHeight = useTransform(scrollYProgress, [0.5, 1], [0, 0.026]);
  const fourthGroupHeight = useTransform(
    scrollYProgress,
    [0.75, 1],
    [0, 0.031]
  );

  const [needToChange, setChange] = useState<boolean>(false);
  useEffect(() => {
    function updateCurrent() {
      if (scrollYProgress.get() > 0.75) {
        setChange(true);
      } else {
        setChange(false);
      }
    }
    const update = scrollYProgress.on("change", updateCurrent);
    return () => {
      update();
    };
  }, [scrollYProgress]);

  const rectangleIndices = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="relative w-full h-screen bg-[#2B3530] overflow-hidden">
      <Image
        src="https://res.cloudinary.com/kvpproducts/image/upload/v1740460938/maldives_ztyog5.jpg"
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
        src="https://res.cloudinary.com/kvpproducts/image/upload/v1740461716/radhanagar1_fjlr5a.jpg"
        fill
        alt="light"
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
        objectFit="cover"
      />
      {/* motiondiv */}
      <DestContent change={needToChange} />

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
const RightBar = ({ open }: { open: boolean }) => {
  return (
    <motion.div
      initial={{ x: "100%" }} // Start off-screen
      animate={{ x: open ? "0%" : "100%" }} // Slide in when open, slide out when closed
      transition={{ type: "tween", duration: 0.4 }} // Smooth transition
      className="fixed z-50 px-4 py-10 top-0 right-0 bottom-0 w-1/4 flex flex-col items-center bg-primary text-md text-white"
    >
      <div className="relative w-60 h-60 rounded-lg overflow-hidden shadow-lg border-2 border-gray-200">
        <Image
          src="/destinations/andaman.jpg"
          fill
          alt="Andaman Beach"
          className="object-cover"
        />
      </div>
      <span className="w-60">
        Experience Paradise in the Maldives 🌴✨ Welcome to the Maldives – a
        breathtaking tropical paradise where turquoise waters meet endless white
        sandy beaches. Nestled in the heart of the Indian Ocean, our luxury
        resort offers an unforgettable escape surrounded by crystal-clear
        lagoons, vibrant coral reefs, and stunning sunsets.
      </span>
    </motion.div>
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
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { stiffness: 300, damping: 30 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);
  const [open, setOpen] = useState(false);

  const [showfollower, setShowFollower] = useState(false);
  const onMouseMove = (event: React.MouseEvent) => {
    if (!showfollower) {
      setShowFollower(true);
    }
    mouseX.set(event.clientX - 28);
    const y = Math.max(event.clientY - 28);
    if (y < 150) {
      setShowFollower(false);
    }
    mouseY.set(y);
  };
  const yprogress = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  return (
    <div
      onClick={() => setOpen((prev) => !prev)}
      onMouseMove={onMouseMove}
      ref={containerRef}
      className=" relative h-[200vh] cursor-pointer"
    >
      <RightBar open={open} />
      <motion.div
        className={`fixed z-20 top-0 left-0  ${
          showfollower ? "block" : "hidden"
        }`}
        style={{ x: mouseX, y: mouseY }}
      >
        <Exploreicon />
      </motion.div>
      <div className="sticky top-0 h-screen  inset-0 w-full">
        <Background scrollYProgress={yprogress} clippath={clippath} />
        <div className="sticky top-0 z-20"></div>
      </div>
    </div>
  );
}
