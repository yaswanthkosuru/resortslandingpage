import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "motion/react";
import { clipPath } from "motion/react-client";

interface MenuItem {
  id: string;
  number: string;
  title: string;
  imageUrl: string;
}

const menuItems: MenuItem[] = [
  { id: "01", number: "01", title: "Story", imageUrl: "/well.jpeg" },
  {
    id: "02",
    number: "02",
    title: "Our Vision & Mission",
    imageUrl: "/livingroom.jpeg",
  },
  { id: "03", number: "03", title: "Our Commitment", imageUrl: "/light.jpg" },
  { id: "04", number: "04", title: "Our Pillars", imageUrl: "/well.jpeg" },
  { id: "05", number: "05", title: "Sustainability", imageUrl: "/light.jpg" },
];
const variants: Variants = {
  hidden: { clipPath: "inset(100% 0 0 0)" },
  visible: {
    clipPath: "inset(0% 0 0 0)",
    transition: { duration: 0.4 },
    zIndex: 999,
  },
  changezindex: {
    zIndex: 0,
    clipPath: "inset(100% 0 0 0)",
  },
};
const getanimate = ({
  hoveredItem,
  prevItem,
  id,
}: {
  hoveredItem: string | null;
  prevItem: string | null;
  id: string | null;
}) => {
  if (hoveredItem && prevItem && hoveredItem > prevItem) {
    if (!prevItem) {
      console.log(prevItem, "previous");
      return "visible";
    }
    if (id === hoveredItem) {
      return "visible";
    }
    if (id != prevItem) {
      return "changezindex";
    }
    return "visible";
  }
};
const Images = ({
  hoveredItem,
  prevItem,
}: {
  prevItem: string | null;
  hoveredItem: string | null;
}) => {
  //   console.log(prevItem, "previous");
  const selectedImage = menuItems.find((item) => item.id === hoveredItem);
  const imageElements = menuItems.map((item, index) => (
    <motion.div
      animate={getanimate({ hoveredItem, prevItem, id: item.id })}
      key={item.id}
      variants={variants}
      className="absolute inset-0"
    >
      <Image
        key={index}
        src={item.imageUrl}
        fill
        alt="Luxury modern architecture"
        className={`object-cover object-center ${
          item.id === selectedImage?.id ? "z-50" : "z-10"
        }`}
      />
    </motion.div>
  ));
  return (
    <AnimatePresence>
      <motion.div className="relative w-full h-[300px] rounded-lg overflow-hidden">
        {imageElements}{" "}
      </motion.div>
    </AnimatePresence>
  );
};
function App() {
  const [prevItem, setPrevItem] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="min-h-screen text-primary bg-[#2F4538] flex">
      <div className="w-[500px] p-8 flex justify-center items-center">
        <Images hoveredItem={hoveredItem} prevItem={prevItem} />
      </div>

      <div className="flex-1 flex items-center p-12">
        <div className="w-full max-w-3xl">
          <nav>
            {menuItems.map((item, index) => (
              <React.Fragment key={item.id}>
                {index === 0 && (
                  <hr className="border-t-[1px] border-[#B8C5B0]" />
                )}
                <motion.div
                  layout
                  className={`${
                    hoveredItem === item.id ? "text-black" : "text-primary"
                  } px-4 relative`}
                  onMouseEnter={() =>
                    setHoveredItem((prev) => {
                      console.log(prev, "previou");
                      setPrevItem(prev);
                      return item.id;
                    })
                  }
                  //   onMouseLeave={() => setHoveredItem(null)}
                >
                  <AnimatePresence>
                    {hoveredItem === item.id && (
                      <motion.div
                        layoutId="highlight"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-[#D1CCBF]"
                      />
                    )}
                  </AnimatePresence>
                  <a
                    href={`#${item.id}`}
                    className="py-8 flex items-center justify-between duration-300 relative z-10"
                  >
                    <div className="flex items-center gap-8">
                      <span className="text-sm opacity-60">{item.number}</span>
                      <span className="text-2xl font-light">{item.title}</span>
                    </div>
                  </a>
                  <hr className="border-t-[1px]" />
                </motion.div>
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default App;
