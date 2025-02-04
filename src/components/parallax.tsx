import f from "@/utils/flog";
import { useScroll, useTransform, motion, useSpring } from "motion/react";
import { useEffect, useState } from "react";

interface ParallaxProps {
  targetRef: React.RefObject<any>;
  yMin: number;
  yMax: number;
  children: React.ReactNode;
}

const Parallax: React.FC<ParallaxProps> = ({
  targetRef,
  yMin,
  yMax,
  children,
}) => {
  const [width, setWidth] = useState<number>();

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 20%", "end 20%"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120, // Higher stiffness makes movement feel smoother
    damping: 30, // Higher damping removes unnecessary bouncing
    mass: 2.5, // Adjust mass for fluid movement
    restDelta: 0.001,
  });
  const y = useTransform(smoothProgress, [0, 1], [yMin, yMax]);
  // f.log(y);
  if (isMobile) {
    return <>{children}</>;
  }
  return (
    <motion.div transition={{ ease: "easeInOut" }} style={{ y }}>
      {children}
    </motion.div>
  );
};
export default Parallax;
