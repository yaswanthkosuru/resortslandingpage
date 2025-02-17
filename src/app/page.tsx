"use client";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import VillaImage from "@/components/Introduction";
import React from "react";
import { useEffect, useState } from "react";
import Details from "@/components/details";
import VideoPlayer from "@/components/Videowithbackground";
import { useAnimation } from "motion/react";

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <Hero />
      <VillaImage />
      <Details />
      <div className="h-screen"></div>
    </div>
  );
};

export default Page;
