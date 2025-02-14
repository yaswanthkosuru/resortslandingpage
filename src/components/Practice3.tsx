import React from "react";

const Video = () => {
  const rects2 = Array.from({ length: 25 }, (_, i) => {
    const height = Math.floor((i + 1) / 4) * 0.2;
    return (
      <rect
        key={i}
        width="100%"
        height={`${height}%`} // Gradually increasing height
        x="0"
        className="rect"
        y={`${i * 4}%`} // Adjust spacing to prevent overlap
        fill="black"
      />
    );
  });

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <svg width="600" height="500" viewBox="0 0 500 500">
        <defs>
          <clipPath id="clip0">{rects2}</clipPath>
        </defs>
        <image
          href="https://images.unsplash.com/photo-1735078254602-b7818942c324?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width="500"
          height="500"
          clipPath="url(#clip0)"
        />
      </svg>
    </div>
  );
};

export default Video;
