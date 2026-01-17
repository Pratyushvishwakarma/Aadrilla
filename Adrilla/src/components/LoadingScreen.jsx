import React from "react";
import { useState } from "react";
import { useEffect } from "react";



// LoadingScreen Component
const LoadingScreen = ({ isLoading }) => {
  if (!isLoading) return null;
  
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center z-50 transition-opacity duration-500">
      <div className="flex items-center gap-3 text-5xl font-bold animate-pulse">
        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-3xl">
          A
        </div>
        <div>
          <div className="text-5xl">AADRILA</div>
          <div className="text-base font-normal text-gray-600">TECHNOLOGIES</div>
        </div>
      </div>
    </div>
  );
};


export default LoadingScreen