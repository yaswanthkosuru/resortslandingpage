"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Projects from "@/components/Projects";
import Hero from "@/components/Hero";

const Navbar = () => {
  return (
    <nav className=" px-4 text-white bg-black">
      <div className="container mx-auto flex justify-between items-center">
        <Image src={"/logo.svg"} width={100} height={100} alt={""} />
        <div className="space-x-4">
          <Link href="#home" className=" ">
            Home
          </Link>
          <Link href="#about" className=" ">
            About
          </Link>
          <Link href="#projects" className=" ">
            Projects
          </Link>
          <Link href="#contact" className=" ">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

const Page = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <h1>Things I have worked on</h1>
      <Projects />
    </div>
  );
};

export default Page;
