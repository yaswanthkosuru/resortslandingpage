import { motion, MotionValue, useMotionValue } from "motion/react";

interface RectangleGroupProps {
  rectangleIndices: number[];
  scrollProgress: MotionValue<number>;
  rectHeight: MotionValue<number>;
  startOffset: number;
}

interface RectangleProps {
  index: number;
  rectHeight: MotionValue<number>;
  startOffset: number;
  totallen: number;
}

export const Rectangle: React.FC<RectangleProps> = ({
  index,
  rectHeight,
  startOffset,
  totallen,
}) => {
  let step;
  let yPosition;
  if (startOffset === 0) {
    step = 0.3 / totallen;
    yPosition = index * step + startOffset - 0.05;
  } else {
    step = 0.25 / totallen;
    yPosition = index * step + startOffset;
  }

  return (
    <motion.rect
      key={index}
      x="0"
      y={yPosition}
      width="1"
      style={{ height: rectHeight }}
      fill="black"
    />
  );
};

export const RectangleGroup: React.FC<RectangleGroupProps> = ({
  rectangleIndices,
  rectHeight,
  startOffset,
}) => {
  return (
    <>
      {rectangleIndices.map((index) => (
        <Rectangle
          key={index}
          index={index}
          rectHeight={rectHeight}
          startOffset={startOffset}
          totallen={rectangleIndices.length}
        />
      ))}
    </>
  );
};
