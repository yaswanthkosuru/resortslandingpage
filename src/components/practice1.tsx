/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const practice1 = () => {
  useGSAP(() => {
    let t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".bg",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        markers: true,
        id: "section1",
      },
    });
    t2.to(".bg", {});
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".image1",
        start: "center center",
        end: "+=600px",
        id: "section2",
        scrub: 1,
      },
    });
    tl.fromTo(
      ".image1",
      { clipPath: "inset(100% 0 0 0)" },
      { clipPath: "inset(0% 0 0 0)", duration: 2, ease: "power2.inOut" }
    );
  }, {});
  return (
    <div>
      <div className="h-screen bg flex justify-center items-center">
        <div className="relative w-96 h-96">
          <Image
            src="/sofa.jpg"
            fill
            objectFit="cover"
            className="z-10"
            alt="none"
          />
          <Image
            src="/light.jpg"
            fill
            objectFit="cover"
            className="image1 z-20"
            alt="none"
          />
        </div>
      </div>
    </div>
  );
};

export default practice1;
