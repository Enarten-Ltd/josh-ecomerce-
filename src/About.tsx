import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-yellow-300 flex items-center justify-center">
      <div className="bg-blue-800 rounded-lg shadow-2xl p-8 max-w-md">
        <h1 className="text-4xl font-bold text-white mb-4">
          About 👋
        </h1>
        <p className="text-white text-lg">
          This is the About page
        </p>
        <button className="mt-6 bg-blue-500 hover:bg-red-300 text-white font-semibold py-2 px-4 rounded transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default About;