import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Flog from "@/utils/flog";
const Steps = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const imgref = useRef(null);

  const top = useTransform(scrollYProgress, [0, 0.35], ["50%", "0%"]);
  const isinview = useInView(container, { amount: 0.99 });
  const [inView, setInview] = useState(false);
  useEffect(() => {
    console.log(isinview, "isinview");
    setInview(isinview);
  }, [isinview]);
  console.log(inView, "inview");

  return (
    <motion.div ref={container}>
      <motion.div
        className={`h-screen inset-0 w-full ${
          inView ? "fixed inset-0" : "relative"
        }`}
        style={{
          clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
        }}
      >
        <motion.div
          style={{ top: top }}
          ref={imgref}
          className="fixed top-20 bg-red-400 h-screen w-full"
        >
          <Image
            src="/livingroom.jpeg"
            fill
            alt="image"
            className="z-50"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Steps;
