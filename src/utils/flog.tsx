import { MotionValue, useMotionValueEvent } from "motion/react";

function Flog(val: MotionValue<any>, s: string) {
  useMotionValueEvent(val, "change", (value) => {
    console.log(value, s);
  });
}
export default Flog;
