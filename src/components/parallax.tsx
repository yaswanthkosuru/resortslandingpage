"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ClipPathScrollAnimation = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, {
      clipPath: "polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)",
      duration: 2,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: 2, // Smooth animation on scroll
      },
    });
  }, []);

  return (
    <div className="h-[200vh] flex items-center justify-center bg-gray-900">
      <div
        ref={boxRef}
        className="w-64 h-64 bg-blue-500 flex items-center justify-center text-white text-2xl font-bold"
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      >
        Scroll Me
      </div>
    </div>
  );
};

export default ClipPathScrollAnimation;
