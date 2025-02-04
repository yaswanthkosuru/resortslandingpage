import {
  MotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";

class Framer {
  log(val: MotionValue<any>) {
    useMotionValueEvent(val, "change", (value) => {
      console.log(value);
    });
  }
}
const f = new Framer();
export default f;
