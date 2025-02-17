"use client";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Introduction from "@/components/Introduction";
import React from "react";
import { useEffect, useState } from "react";
import Details from "@/components/details";
import Steps from "@/components/Steps";
import PinnedSection from "@/components/Pin";

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
      <Introduction />
      <Details />
      <Steps />
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </div>
  );
};

export default Page;
