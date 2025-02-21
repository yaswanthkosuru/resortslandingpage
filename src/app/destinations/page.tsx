"use client";
import HeroComponent from "@/components/Hero";
import NavBar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <NavBar />
      <HeroComponent />
    </div>
  );
};

export default page;
