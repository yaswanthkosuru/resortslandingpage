import { outfit } from "@/app/fonts";
import React, { useRef } from "react";
import BasicAnimate from "./basicAnimate";
import Parallax from "./parallax";
import Data from "@/common.json";
const { HeroSection } = Data;

const Globe = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  return (
    <div>
      <Parallax targetRef={svgRef} yMin={1} yMax={50}>
        <BasicAnimate delay={2} duration={2}>
          <svg
            width="500"
            height="500"
            ref={svgRef}
            viewBox="0 0 564 564"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M564 282C564 437.744 437.744 564 282 564C126.256 564 0 437.744 0 282C0 126.256 126.256 0 282 0C437.744 0 564 126.256 564 282Z"
              fill="url(#paint0_linear_1_4)"
              id="path"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_4"
                x1="0.157599"
                y1="292.976"
                x2="563.842"
                y2="271.024"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#242425" />
                <stop offset="1" stopColor="#010101" />
              </linearGradient>
            </defs>
          </svg>
        </BasicAnimate>
      </Parallax>
    </div>
  );
};
const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);
  return (
    <div className="px-4 relative h-[85vh]  sm:h-[90vh] overflow-hidden  bg-black text-white">
      <div className="absolute top-16 left-16 sm:left-1/2">
        <Globe />
      </div>
      <Parallax targetRef={textRef} yMin={1} yMax={100}>
        <BasicAnimate duration={1} delay={0}>
          <div className="p-4 relative flex justify-center items-center h-[85vh]">
            <div ref={textRef} className={`${outfit.className} max-w-3xl`}>
              <h1 className="text-4xl font-bold mb-4">{HeroSection.title}</h1>
              <p className="text-xl leading-loose">{HeroSection.description}</p>
            </div>
          </div>
        </BasicAnimate>
      </Parallax>
    </div>
  );
};

export default Hero;
