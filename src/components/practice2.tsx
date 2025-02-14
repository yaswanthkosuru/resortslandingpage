import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useRef } from "react";

export default function MouseFollower() {
  const [isInsideContainer, setIsInsideContainer] = useState(false);
  const [isInsideHoverArea, setIsInsideHoverArea] = useState(false);
  const containerRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();

    // Restrict cursor movement inside the container
    if (
      e.clientX >= rect.left &&
      e.clientX <= rect.right &&
      e.clientY >= rect.top &&
      e.clientY <= rect.bottom
    ) {
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-screen h-screen bg-gray-900 flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsInsideContainer(true)}
      onMouseLeave={() => setIsInsideContainer(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Target div where cursor changes */}
      <div
        className="relative w-64 h-64 bg-blue-500 flex items-center justify-center rounded-lg text-white"
        onMouseEnter={() => setIsInsideHoverArea(true)}
        onMouseLeave={() => setIsInsideHoverArea(false)}
      >
        Hover Area
      </div>

      {/* Custom Cursor (exists only in container) */}
      {isInsideContainer && (
        <motion.div
          className="absolute pointer-events-none"
          style={{
            left: smoothX,
            top: smoothY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        >
          {isInsideHoverArea ? (
            // Inside hover area: Expanding Circle
            <motion.div
              className="w-10 h-10 bg-red-500 rounded-full"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            />
          ) : (
            // Outside hover area: Normal Arrow
            <motion.div
              className="w-6 h-6 text-white"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              ➤
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  );
}
