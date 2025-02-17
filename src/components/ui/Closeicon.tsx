import React from "react";
import { RxCross2 } from "react-icons/rx";

const CloseIcon = () => {
  return (
    <div className="w-14 h-14 flex justify-center items-center rounded-full bg-secondary opacity-90">
      <RxCross2 className="text-black font-extrabold" />
    </div>
  );
};

export default CloseIcon;
