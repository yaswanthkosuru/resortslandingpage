import { MotionValue, useMotionValueEvent } from "motion/react";

function Flog(val: MotionValue<any>) {
  useMotionValueEvent(val, "change", (value) => {
    console.log(value);
  });
}
export default Flog;
