import { useState, useEffect } from "react";

const colors = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
];

export default function RandomGrid() {
  const [gridItems, setGridItems] = useState<
    { id: number; color: string; colSpan: string; rowSpan: string }[]
  >([]);

  useEffect(() => {
    const generateGrid = () => {
      const items = Array.from({ length: 10 }, (_, i) => ({
        id: i,
        color: colors[Math.floor(Math.random() * colors.length)],
        colSpan: Math.random() > 0.7 ? "col-span-2" : "col-span-1",
        rowSpan: Math.random() > 0.7 ? "row-span-2" : "row-span-1",
      }));
      setGridItems(items);
    };

    generateGrid();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {gridItems.map(({ id, color, colSpan, rowSpan }) => (
        <div
          key={id}
          className={`${color} ${colSpan} ${rowSpan} h-20 rounded-lg shadow-md`}
        ></div>
      ))}
    </div>
  );
}
