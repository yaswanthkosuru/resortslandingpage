import { useEffect, useRef } from "react";
import CloseIcon from "./ui/Closeicon";
import { motion, useMotionValue, useSpring } from "motion/react";
interface VideoPlayerProps {
  setIsclicked: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function VideoPlayer({ setIsclicked }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLInputElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { stiffness: 300, damping: 30 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX - 28);
      mouseY.set(event.clientY - 28);
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, [mouseX, mouseY]);

  const handleProgress = () => {
    if (!videoRef.current || !progressRef.current) return;
    const progress =
      (videoRef.current.currentTime / videoRef.current.duration) * 100;
    progressRef.current.value = progress.toString();
  };

  return (
    <motion.div
      animate={{
        y: ["100%", "0%"],
        transition: { duration: 1 },
      }}
      exit={{
        y: "-100%",
        transition: { duration: 1 },
      }}
      onClick={() => setIsclicked((prev) => !prev)}
      className=" cursor-pointer overflow-hidden fixed inset-0 bg-black z-50 flex justify-center items-center h-screen"
    >
      <motion.div
        className="absolute left-0 top-0 z-20"
        style={{ x: mouseX, y: mouseY }}
      >
        <CloseIcon />
      </motion.div>
      <div className="relative  w-3/4 h-3/4">
        <video
          ref={videoRef}
          loop
          autoPlay
          onTimeUpdate={handleProgress}
          className="h-full w-full object-cover rounded-lg"
        >
          <source src="/resorts.mp4" type="video/mp4" />
        </video>

        {/* Custom Controls */}
        <div className="absolute bottom-2 left-0 right-0 flex items-center justify-between px-4 py-2  rounded-b-lg">
          {/* Play/Pause Button */}

          {/* Seek Bar */}
        </div>
      </div>
    </motion.div>
  );
}
