import React from 'react';

const HelloWorld: React.FC = () => {
  return (
    <div className="min-h-screen bg-white-300 flex items-center justify-center">
      <div className="bg-blue-800 rounded-lg shadow-2xl p-8 max-w-md">
<div className="m-4 p-6 border-2 border-blue-500">
  This is a box model

        <h1 className="text-4xl font-bold text-white mb-4">
          Hello World! 👋
        </h1>
        <p className="text-white text-lg">
          Welcome to your first React component with Tailwind CSS
        </p>
        <button className="mt-6 bg-blue-500 hover:bg-red-300 text-white font-semibold py-2 px-4 rounded transition duration-300">
          Get Started
        </button>
      </div>
    
</div>
</div>
  );
};

export default HelloWorld;