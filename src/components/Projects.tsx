import React, { JSX, useState } from "react";
import { FaNodeJs, FaReact, FaBrain } from "react-icons/fa";
import Image from "next/image";
import { outfit } from "@/app/fonts";
import { CiDatabase } from "react-icons/ci";
import { motion } from "motion/react";
import { TbBrandNextjs } from "react-icons/tb";
import { IoAnalytics } from "react-icons/io5";
import { spring } from "motion";
import RandomGrid from "./RandomGrid";
import { div } from "motion/react-client";
const projects = [
  {
    title: "Lushy - Fresh Vegetable Delivery website",
    description:
      "An online platform that connects users with local farmers to deliver fresh, organic vegetables straight to their doorsteps. The website ensures convenience, affordability, and quality, offering a seamless shopping experience. With real-time order tracking and secure payment options, Lushy makes healthy eating easy!",
    technologies: [
      { name: "Nextjs", icon: <TbBrandNextjs className="w-5 h-5 " /> },
      { name: "React", icon: <FaReact className="w-5 h-5 " /> },
      { name: "Nodejs", icon: <FaNodeJs className="w-5 h-5 " /> },
      { name: "MongoDB", icon: <CiDatabase className="w-5 h-5 " /> },
    ],
    imageSrc: "/projects/lushly.svg",
    videoSrc: null,
    imageAlt: "Woman taking photo of crops",
  },
  {
    title: "Portfolio Website",
    description:
      "This portfolio website is a reflection of my skills, projects, and experience. Designed with a modern aesthetic, it features smooth animations and seamless transitions to enhance the user experience. Fully responsive and performance-optimized, it ensures accessibility across all devices while maintaining a sleek and professional look.",
    technologies: [
      { name: "Nextjs", icon: <TbBrandNextjs className="w-5 h-5 " /> },
      { name: "React", icon: <FaReact className="w-5 h-5 " /> },
    ],
    videoSrc:
      "https://res.cloudinary.com/kvpproducts/video/upload/v1738656209/portfolio1_egmfff.mp4",
    imageAlt: "Tech blog homepage",
  },
  {
    title: "Landing Page for YR Pesticides and Fertilizers",
    description:
      "Landing page for YR Pesticides and Fertilizers, a leading provider of agricultural products and services. The page showcases the company's offerings, expertise, and commitment to quality. With a clean design, intuitive navigation, and engaging content, it effectively communicates the brand's values and benefits to potential customers.",
    technologies: [
      { name: "machine learning", icon: <FaBrain className="w-5 h-5 " /> },
      { name: "React", icon: <FaReact className="w-5 h-5 " /> },
    ],
    videoSrc:
      "https://res.cloudinary.com/kvpproducts/video/upload/v1738656209/yr_g0sd2u.mp4",
    imageAlt: "Tech blog homepage",
  },
  {
    title: "Employee Promotion Prediction Model",
    description:
      "The Employee Promotion Prediction Model is a machine learning project designed to predict the likelihood of employee promotions within a company. By analyzing various factors such as performance metrics, tenure, and skill sets, the model helps HR departments make data-driven decisions. This project demonstrates the application of predictive analytics in human resources, aiming to improve employee satisfaction and organizational efficiency.",
    technologies: [
      { name: "Machine Learning", icon: <FaBrain className="w-5 h-5 " /> },
      { name: "Data Analysis", icon: <IoAnalytics className="w-5 h-5" /> },
    ],
    videoSrc:
      "https://res.cloudinary.com/kvpproducts/video/upload/v1738656210/ml-project_vyn53l.mp4",
    imageAlt: "Machine Learning Project",
  },
];

interface ProjectData {
  title: string;
  description: string;
  technologies: { name: string; icon: JSX.Element }[];
  imageSrc?: string | null | undefined;
  videoSrc: string | null | undefined;
  imageAlt: string;
}

function Project({ data }: { data: ProjectData }) {
  return (
    <motion.div className="bg-gray-100 max-w-6xl mx-auto cursor-pointer sm:flex sm:justify-between sm:items-center sm:p-4 rounded-md sm:gap-">
      {/* Left: Image/Video */}
      <motion.div
        className="w-full sm:w-1/2 max-w-md flex-shrink-0"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {data.videoSrc ? (
          <video
            src={data.videoSrc}
            className="w-full h-auto object-cover rounded-md"
            loop
            autoPlay
            muted
          />
        ) : (
          data.imageSrc && (
            <Image
              className="w-full h-auto object-cover rounded-md"
              src={data.imageSrc}
              alt={data.imageAlt}
              width={500}
              height={500}
            />
          )
        )}
      </motion.div>

      {/* Right: Text Content */}
      <div className="flex-1 justify-between items-center min-w-0">
        <motion.h1 className="font-bold text-black/90 text-lg sm:text-xl">
          {data.title}
        </motion.h1>
        <motion.p className="hidden sm:block text-sm sm:text-base text-gray-700 mt-2">
          {data.description}
        </motion.p>
        <div className="flex gap-4 flex-wrap mt-2">
          {data.technologies.map((tech, index) => (
            <button
              key={index}
              className="flex items-center gap-2 text-sm sm:text-base"
            >
              {tech.icon}
              {tech.name}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const Projects = projects.slice(0, 1).map((project, index) => {
    return (
      <div key={index}>
        <Project data={project} />;
      </div>
    );
  });

  return (
    <div className="container p-2 mx-auto" id="projects">
      <h1>
        <div className="">
          <span className={`text-2xl font-semibold ${outfit.className}`}>
            Selected Projects
          </span>
        </div>
      </h1>
      <div className="mt-2"></div>
      {Projects}
    </div>
  );
}
