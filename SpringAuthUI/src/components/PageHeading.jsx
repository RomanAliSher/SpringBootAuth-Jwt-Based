import React from 'react';

const PageHeading = ({ title, heading }) => {
  return (
    <div className="text-center mb-8 py-8">
      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-6 relative shadow-2xl">
        <div className="absolute inset-3 rounded-full bg-black flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
        </div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 animate-pulse opacity-50"></div>
      </div>
      <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-2 tracking-wider">
        {title}
      </h1>
      <p className="text-yellow-400 opacity-75 font-medium">
        {heading}
      </p>
    </div>
  );
};

export default PageHeading;
