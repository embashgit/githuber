import React from 'react';

export const SkeletonCard = () => (
  <>
    <div className="flex w-full flex-col items-center">
      <div className="w-full animate-pulse flex-row items-center justify-center space-x-1 rounded-xl">
        <div className="flex flex-col space-y-2">
          <div className="h-10 rounded-md bg-gray-300 "></div>
          <div className="h-10 rounded-md bg-gray-300 "></div>
          <div className="h-10 rounded-md bg-gray-300 "></div>
          <div className="h-10 rounded-md bg-gray-300 "></div>
        </div>
      </div>
    </div>
  </>
);
