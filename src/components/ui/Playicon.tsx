import React from "react";
import { CiPlay1 } from "react-icons/ci";

const PlayIcon = () => {
  return (
    <div className="w-14 h-14 flex justify-center items-center rounded-full bg-secondary opacity-90">
      <CiPlay1 className="text-black font-extrabold" />
    </div>
  );
};

export default PlayIcon;
