"use client";
import React, { useEffect, ReactNode } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface LenisScrollProps {
  children: ReactNode;
}

const LenisScroll: React.FC<LenisScrollProps> = ({ children }) => {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.8, // Increase for slower scroll
      easing: (t) => 1 - Math.pow(1 - t, 3), // Custom easing for smoother feel
      // smoothTouch: true, // Enable smooth scrolling on touch devices
      wheelMultiplier: 0.8, // Reduce sensitivity for slower feel
      touchMultiplier: 1.2, // Adjust touch scroll speed
      infinite: false, // Set to true if you want continuous scrolling
    });

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};

export default LenisScroll;
