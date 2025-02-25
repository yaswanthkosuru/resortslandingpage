import Flog from "@/utils/flog";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navs = [
  {
    name: "Destinations",
    link: "/destinations",
  },
  {
    name: "Nature",
    link: "/nature",
  },
];
const borderVariants = {
  initial: { width: 0 },
  hover: { width: "100%" },
};
function Logo() {
  return (
    <Link
      href={"/"}
      className=" cursor-pointer flex justify-center items-center"
    >
      <Image src="/yashlogo.svg" width={100} height={100} alt="" />
    </Link>
  );
}
function Links() {
  return (
    <motion.div className="inline-flex gap-8 items-center">
      {navs.map((nav, index) => (
        <Link key={index} href={nav.link} className="relative inline-block">
          <motion.div initial="initial" whileHover="hover">
            {nav.name}
            <motion.span
              variants={borderVariants}
              transition={{ duration: 0.3 }}
              className="absolute left-0 bottom-0 h-0.5 bg-current"
            />
          </motion.div>
        </Link>
      ))}
    </motion.div>
  );
}
function NavBar() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const navY = useTransform(scrollY, [250, 300], ["-10%", "-200%"]);
  const path = usePathname();

  return (
    <motion.div
      style={{ y: navY }}
      className="fixed top-10 left-28 right-10 w-[90%] z-30"
    >
      <motion.div
        ref={container}
        className="h-16 sticky text-md font-medium w-full text-white top-20 z-50"
      >
        <div>
          <div className="flex items-center justify-between h-full px-4">
            <div className="inline-flex space-x-4">
              <Logo />
            </div>
            <Links />
            {!path.endsWith("destinations") && (
              <div className="inline-flex items-center gap-10">
                <button
                  onClick={() => {
                    document
                      .getElementById("contact-form")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-white border border-white p-[12px] flex justify-center items-center gap-2"
                >
                  Get Started
                  <FaArrowRight className="-rotate-45 w-10" />
                </button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
export default NavBar;
