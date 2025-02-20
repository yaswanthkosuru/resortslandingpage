import { useEffect, useState, RefObject } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

// Make sure to register the plugin
gsap.registerPlugin(ScrollTrigger);

interface UseGSAPScrollProps {
  containerRef: RefObject<HTMLDivElement>;
  start?: string;
  end?: string;
}

export function useGSAPScroll({
  containerRef,
  start = "top top",
  end = "bottom bottom",
}: UseGSAPScrollProps) {
  const [scrollYProgress, setScrollYProgress] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create a ScrollTrigger that updates the progress state
    const trigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: start, // Use the start parameter
      end: end, // Use the end parameter
      onUpdate: (self) => {
        // self.progress is a value between 0 and 1
        setScrollYProgress(self.progress);
      },
    });

    // Clean up the ScrollTrigger instance on unmount
    return () => {
      trigger.kill();
    };
  }, [containerRef, start, end]);

  return { scrollYProgress };
}
