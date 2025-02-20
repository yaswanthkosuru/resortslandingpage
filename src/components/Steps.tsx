import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Flog from "@/utils/flog";
import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
const Steps = () => {
  const ref = useRef(null);
  const isinview = useInView(ref, {
    amount: 0.9,
    // margin: "0px 0px 200px 0px",
  });
  const tempref = useRef(null);
  const tempview = useInView(tempref);
  useEffect(() => {
    console.log(tempview, "tempview");
  }, [tempview]);
  const [isView, setIsView] = useState(false);
  useEffect(() => {
    if (isinview && !tempview) {
      setIsView(false);
    } else {
      setIsView(isinview);
    }
  }, [isinview, tempview]);
  return (
    <div>
      <div ref={tempref}></div>
      <div
        ref={ref}
        className={`${isView ? "sticky" : "relative"} h-screen  inset-0 w-full`}
        style={{
          clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
        }}
      >
        <div className="fixed top-0 h-screen -z-10 w-full">
          <Image
            src="/livingroom.jpeg"
            fill
            alt="image"
            className=""
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="h-screen z-20 bg-[#D1CCBF] mx-auto w-1/3 p-10 flex gap-4 items-center flex-col">
          01 - 05
          <h2 className="text-3xl font-thin">yaswanth</h2>
          <h3 className="text-3xl font-light"> innovation culture</h3>
          <div className=" relative w-full h-1/2">
            <Image
              src="/livingroom.jpeg"
              fill
              alt="image"
              className="z-50"
              style={{ objectFit: "cover" }}
            />
          </div>
          <span className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            omnis repellat dignissimos sit molestias, labore dolore delectus
            optio iste, laborum debitis totam molestiae veritatis nam fugit
            consequuntur autem quo doloribus.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Steps;
