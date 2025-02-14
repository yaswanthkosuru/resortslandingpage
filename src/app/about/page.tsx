import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-lg text-center">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-gray-700 mb-4">
          Hello! I'm Yaswanth, a passionate developer with a love for creating
          beautiful and functional web applications. I have experience in
          various technologies and enjoy learning new things every day.
        </p>
        <p className="text-gray-700">
          In my free time, I like to read, explore new places, and work on
          personal projects. Feel free to reach out if you'd like to connect!
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
