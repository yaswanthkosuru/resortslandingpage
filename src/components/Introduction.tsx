import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { FaBars } from "react-icons/fa";

export default function Introduction() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div className="grid grid-cols-3 m-10 mt-20 ">
      <div></div>

      <div
        ref={container}
        className="relative col-span-2 flex items-center justify-center h-[80vh] overflow-hidden"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="top-[-10vh] left-0 h-[120vh] w-full">
          <motion.div style={{ y }} className="relative w-full h-full">
            <Image
              src={"/well.jpeg"}
              fill
              alt="image"
              className="z-50"
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        </div>
      </div>
      <div className="mt-10">
        <div className="flex gap-4 justify-center items-center text-primary">
          <FaBars size={30} />
          <span className="text-xl">Introduction</span>
        </div>
      </div>
      <div className="text-[40px] tracking-wider leading-snug col-span-2 mt-10 text-primary">
        Welcome to a world of luxury and well-being with{" "}
        <span className="text-secondary">Yaswanth Residency</span>, where you
        will discover exquisite luxury health and wellness resorts and
        residences nestled in the most breathtaking destinations on the globe.
        <br />
        <br />
        <br />
        <div className="text-[20px] leading-normal tracking-normal w-1/2 text-wrap">
          At Yaswanth Residency, we use the Integrative Wellness approach, that
          considers psychological, physical, and nutritional aspects of your
          life to improve overall well-being and balance.
        </div>{" "}
      </div>
    </div>
  );
}
