"use client";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Introduction from "@/components/Introduction";
import React from "react";
import { useEffect, useState } from "react";
import Details from "@/components/details";
import NavBar from "@/components/Navbar";
import Steps from "@/components/Steps";

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <NavBar />
      <Hero />
      <Introduction />
      <Details />
      {/* <Parallax /> */}
      {/* <StickyRelativeDemo /> */}
      <Steps />
      <div className="h-screen">2</div>
    </div>
  );
};

export default Page;
