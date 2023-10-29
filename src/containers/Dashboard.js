import React from "react";
import "../App.css";

export function Dashboard() {
  return (
    <div className="h-full flex-col pl-10 pr-10">
      <div className="mt-0 bg-gray-800 rounded-lg bg-slate-900 text-white p-6 m-">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">Models Bought</h1>
          <button className="text-gray-400 hover:text-white text-sm">
            View More
          </button>
        </div>
        <div className="blurry-wrapper">

        <div className="grid grid-cols-4 gap-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="bg-gray-700 p-3 rounded-lg relative">
              <button className="absolute top-1/2 left-2 transform -translate-y-1/2">
                <svg
                  className="w-5 h-5 fill-current text-gray-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path>
                </svg>
              </button>
              <div className="text-center">
                <h2 className="text-lg font-medium mb-1">Metadata Name</h2>
                <p className="text-gray-400 mb-3 text-sm">Data Category</p>
                <svg viewBox="0 0 100 40" className="mx-auto">
                  <polyline
                    fill="none"
                    stroke="#FF0000"
                    strokeWidth="2"
                    points="10,30 20,10 30,20 40,10 50,15 60,10 70,20 80,30"
                  />
                </svg>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg bg-slate-900 text-white p-6 mt-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">Datasets Sold</h1>
          <button className="text-gray-400 hover:text-white text-sm">
            View More
          </button>
        </div>

      <div className="blurry-wrapper">
        <div className="grid grid-cols-4 gap-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="bg-gray-700 p-3 rounded-lg relative">
              <button className="absolute top-1/2 left-2 transform -translate-y-1/2">
                <svg
                  className="w-5 h-5 fill-current text-gray-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path>
                </svg>
              </button>
              <div className="text-center">
                <h2 className="text-lg font-medium mb-1">Metadata Name</h2>
                <p className="text-gray-400 mb-3 text-sm">Data Category</p>
                <svg viewBox="0 0 100 40" className="mx-auto">
                  <polyline
                    fill="none"
                    stroke="#34D399"
                    strokeWidth="2"
                    points="10,30 20,10 30,20 40,10 50,15 60,10 70,20 80,30"
                  />
                </svg>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}
