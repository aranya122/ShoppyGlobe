import React from 'react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50">
      <h1 className="text-8xl font-bold text-blue-600">404</h1>
      <p className="text-3xl text-gray-800 mt-4">Uh-oh!</p>
      <p className="text-lg text-gray-600">Path Not Found.</p>
      <a href="/" className="mt-6 inline-block px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
        Back to Home
      </a>
    </div>
  );
};

export default NotFound