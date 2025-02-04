import React, { JSX, useState } from "react";
import { FaNodeJs, FaReact, FaBrain } from "react-icons/fa";
import Image from "next/image";
import { outfit } from "@/app/fonts";
import { CiDatabase } from "react-icons/ci";
import { motion } from "motion/react";
import { TbBrandNextjs } from "react-icons/tb";
import { IoAnalytics } from "react-icons/io5";
const projects = [
  {
    title: "Lushy - Fresh Vegetable Delivery App",
    description:
      "Lushy is an online platform that connects users with local farmers to deliver fresh, organic vegetables straight to their doorsteps. The app ensures convenience, affordability, and quality, offering a seamless shopping experience. With real-time order tracking and secure payment options, Lushy makes healthy eating easy!",
    technologies: [
      { name: "Nextjs", icon: <TbBrandNextjs className="w-5 h-5 " /> },
      { name: "React", icon: <FaReact className="w-5 h-5 " /> },
      { name: "Nodejs", icon: <FaNodeJs className="w-5 h-5 " /> },
      { name: "MongoDB", icon: <CiDatabase className="w-5 h-5 " /> },
    ],
    imageSrc: "/lushly.png",
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
const TiltCard = ({ children }: { children: React.ReactNode }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left - width / 2;
    const y = e.clientY - top - height / 2;

    const rotateX = (-y / height) * 15; // Max tilt ±15deg
    const rotateY = (x / width) * 15; // Max tilt ±15deg

    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className="relative p-4 "
      style={{ perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    >
      <div className="">{children}</div>
    </motion.div>
  );
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3, // Stagger each child with a 0.3s delay
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, x: -50 }, // Start off-screen from the left
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const mediaVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

function Project({ data }: { data: ProjectData }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5, once: true }}
      onViewportEnter={() => console.log("Entered View")}
      onViewportLeave={() => console.log("Left View")}
      className="mx-auto"
    >
      <div>
        <TiltCard>
          <div className="inline-flex cursor-pointer items-center justify-center p-1 sm:p-4">
            <div
              className={` ${outfit.className} w-full sm:w-3/4 max-w-7xl bg-[#F7F7F7] text-black/80 rounded-3xl overflow-hidden`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 sm:gap-8 p-2 sm:p-6">
                {/* Left Content */}
                <div className="flex flex-col justify-center space-y-6">
                  <motion.h1
                    className="font-bold text-lg"
                    variants={headingVariants}
                  >
                    {data.title}
                  </motion.h1>

                  <motion.p variants={textVariants}>
                    {data.description}
                  </motion.p>

                  <div className="flex gap-4 flex-wrap mt-2">
                    {data.technologies.map((tech, index) => (
                      <button
                        key={index}
                        className="inline-flex items-center gap-2"
                      >
                        {tech.icon}
                        {tech.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Right Image */}
                <motion.div
                  className="relative h-[250px] sm:h-auto rounded-2xl overflow-hidden"
                  variants={mediaVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {data.videoSrc ? (
                    <video
                      src={data.videoSrc}
                      className="w-full h-full object-cover"
                      loop
                      autoPlay
                      muted
                    />
                  ) : (
                    data.imageSrc && (
                      <Image
                        src={data.imageSrc}
                        alt={data.imageAlt}
                        className="w-full h-full object-cover"
                        fill
                      />
                    )
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </TiltCard>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <div>
      {projects.map((project, index) => (
        <Project key={index} data={project} />
      ))}
    </div>
  );
}
