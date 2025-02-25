import { useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export const useElementScrollDirection = ({
  ref,
}: {
  ref: React.RefObject<HTMLElement>;
}) => {
  const { scrollY } = useScroll({ target: ref });
  const [scrollDirection, setScrollDirection] = useState("down");

  useMotionValueEvent(scrollY, "change", (current) => {
    const diff = current - (scrollY.getPrevious() || 0);
    setScrollDirection(diff > 0 ? "down" : "up");
  });

  return scrollDirection;
};

export const useWindowScrollDirection = () => {
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState("down");

  useMotionValueEvent(scrollY, "change", (current) => {
    const diff = current - (scrollY.getPrevious() || 0);
    setScrollDirection(diff > 0 ? "down" : "up");
  });

  return scrollDirection;
};
