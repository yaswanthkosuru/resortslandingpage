"use client";
import Bg from "@/components/bg";
import Preloader from "@/components/Preloader";
import React from "react";
import { useEffect, useState } from "react";

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="">
        <Preloader />
      </div>
    );
  }

  return (
    <div>
      <Bg />
      <div className="h-screen"></div>
    </div>
  );
};

export default Page;
