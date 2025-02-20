"use client";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Introduction from "@/components/Introduction";
import React from "react";
import { useEffect, useState } from "react";
import Details from "@/components/details";
import Steps from "@/components/Steps";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import StickyRelativeDemo from "@/components/Pin";
import Parallax from "@/components/parallax";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Hero />
      <Introduction />
      <Details />
      {/* <Parallax /> */}
      <StickyRelativeDemo />
      {/* <Steps /> */}
      <div className="h-screen">2</div>
    </div>
  );
};

export default Page;
