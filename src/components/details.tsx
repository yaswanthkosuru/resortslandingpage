import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { FaBars } from "react-icons/fa";

export default function Details() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const container2 = useRef(null);
  const { scrollYProgress: scrolly2progress } = useScroll({
    target: container2,
    offset: ["start end", "end start"],
  });
  return (
    <div className="grid grid-cols-2 mt-20 h-[90vh] ">
      <div
        ref={container}
        className="relative flex items-center justify-center h-full overflow-hidden"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="top-[-10vh] left-0 h-[120vh] w-full">
          <motion.div className="relative w-full h-full">
            <Image
              src={"/yogagirl.jpeg"}
              fill
              alt="image"
              className="z-50"
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        </div>
      </div>
      <div
        ref={container2}
        className="relative flex items-end justify-end h-full overflow-hidden"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <motion.div className=" h-full  my-auto bg-lightgreen  text-primary p-20">
          <motion.div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <FaBars size={30} />
              <span className="text-xl">Wellness Sanctury</span>
            </div>
            <div className="text-3xl tracking-wider font-light leading-normal">
              <span className="text-secondary">Personalized</span> wellness,
              innovation, and nature meet in synergy
            </div>
            <div>
              At ELEMENTIS, we use the Integrative Wellness approach, that
              considers psychological, physical, and nutritional aspects of your
              life to improve overall well-being and balance.
            </div>
            <div className="text-xl mx-auto underline underline-offset-4">
              Discover More
            </div>
          </motion.div>
        </motion.div>{" "}
      </div>
    </div>
  );
}
