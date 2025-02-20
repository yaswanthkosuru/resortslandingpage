"use client";
import { motion, AnimatePresence, delay } from "framer-motion";
import { usePathname } from "next/navigation";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useContext, useRef } from "react";

// Helper component to handle Frozen Router context
function FrozenRouter(props: { children: React.ReactNode }) {
  const context = useContext(LayoutRouterContext ?? {});
  const frozen = useRef(context).current;

  if (!frozen) {
    return <>{props.children}</>;
  }

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  );
}

// Page transition variants with black layout
const blackLayoutVariants = {
  hidden: {
    opacity: 0,
    y: "100%", // Start from the bottom of the screen
    transition: { duration: 0.8, ease: "easeInOut" },
  },
  enter: {
    opacity: 1,
    y: 0, // Stay in the center for 0.1s
    transition: { duration: 0.8, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: "-100%", // Move it out upwards
    transition: { duration: 0.8, ease: "easeIn" },
  },
};

const pageVariants = {
  hidden: {
    opacity: 0,
    y: "100%", // Start from the bottom of the screen
    transition: { duration: 1, ease: "easeInOut" }, // Adding delay to "stay"
  },
  enter: {
    opacity: [1, 1, 1],
    y: ["100%", "0%", "-100%"], // Start from the bottom of the screen
    transition: { duration: 2, ease: "easeInOut" }, // Adding array of durations
  },
  exit: {
    opacity: 0,
    y: "-100%", // Move upwards to hide the page
    transition: { duration: 1, ease: "easeIn" },
  },
};

const PageTransitionEffect = ({ children }: { children: React.ReactNode }) => {
  const key = usePathname(); // Get the pathname for key to trigger re-animation on page change

  return (
    <AnimatePresence mode="popLayout">
      <motion.div key={key} transition={{ ease: "easeInOut", duration: 0.75 }}>
        <FrozenRouter>
          <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={pageVariants}
            className="absolute bg-[#1D1D1E] h-screen w-full z-50"
          >
            {" "}
            home
          </motion.div>
          <div className="z-0">{children}</div>
        </FrozenRouter>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransitionEffect;
