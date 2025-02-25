"use client";
import SvgMaskDemo from "@/components/PageTransistion";
import { useEffect, useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [stage, setStage] = useState(0); // 0: Black, 1: White, 2: Show children

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 400), // After 1s -> White
      setTimeout(() => setStage(2), 800), // After 2s -> Show children
    ];

    return () => timers.forEach(clearTimeout); // Cleanup on unmount
  }, []);
  return (
    <div className=" ">
      {/* {stage !== 1 && (
        <div className="fixed right-0 bottom-0 w-full top-0 z-50">
          {stage === 0 && <SvgMaskDemo fill="black" />}
        </div>
      )} */}
      {children}
    </div>
  );
}
