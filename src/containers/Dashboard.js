import React from "react";
import "../App.css";
import { useAccount } from "wagmi";

export function Dashboard() {
  const { isConnected } = useAccount();

  return <>{isConnected ? defaultDashboard() : defaultBlur()}</>;
}

const defaultDashboard = () => {
  return (
    <div className="h-full flex-col pl-10 pr-10">
      <div className="mt-0 bg-gray-800 rounded-lg bg-slate-900 text-white p-6 m-">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">Models Bought</h1>
          <button className="text-gray-400 hover:text-white text-sm">
            View More
          </button>
        </div>
        <div>
          <div className="grid grid-cols-4 gap-4">
            <div key={66} className="bg-gray-700 p-3 rounded-lg relative">
              <button className="absolute top-1/2 left-2 transform -translate-y-1/2">
                <svg
                  className="w-5 h-5 fill-current text-gray-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path>
                </svg>
              </button>
              <div className="text-center">
                <h2 className="text-lg font-medium mb-1">Miami-Dade Housing</h2>
                <p className="text-gray-400 mb-3 text-sm">Prices Prediction</p>
                <svg viewBox="0 0 100 40" className="mx-auto">
                  <polyline
                    fill="none"
                    stroke="#FF0000"
                    strokeWidth="2"
                    points="10,30 20,10 30,20 40,10 50,15 60,10 70,20 80,30"
                  />
                </svg>
                <a
                  href="https://mumbai.polygonscan.com/token/0xe0f5a9508040fbf3f7eebcb13542082417aeedc1?a=0xEbd7E58bd9413C71c76a7D4F641563dC4E05aB94"
                  className="text-blue-400 text-sm mt-1 underline"
                >
                  Proof of Ownership
                </a>
              </div>
            </div>
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

        <div>
          <div className="grid grid-cols-4 gap-4">
            <div key={67} className="bg-gray-700 p-3 rounded-lg relative">
              <button className="absolute top-1/2 left-2 transform -translate-y-1/2">
                <svg
                  className="w-5 h-5 fill-current text-gray-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path>
                </svg>
              </button>
              <div className="text-center">
                <h2 className="text-lg font-medium mb-1">
                  San Francisco California
                </h2>
                <p className="text-gray-400 mb-3 text-sm"> Rent Forecast</p>
                <svg viewBox="0 0 100 40" className="mx-auto">
                  <polyline
                    fill="none"
                    stroke="#34D399"
                    strokeWidth="2"
                    points="10,30 20,10 30,20 40,10 50,15 60,10 70,20 80,30"
                  />
                </svg>
                <p className="mt-3 text-white text-sm">Price: 0.109999 MATIC</p>{" "}
                {/* Placeholder for Price */}
                <a
                  href="https://mumbai.polygonscan.com/token/0x90a2deb9fff2c1a3f7b048be18544ec3c7c39568"
                  className="text-blue-400 text-sm mt-1 underline"
                >
                  View Address
                </a>{" "}
                {/* Placeholder for Link */}
              </div>
            </div>
            <div key={68} className="bg-gray-700 p-3 rounded-lg relative">
              <button className="absolute top-1/2 left-2 transform -translate-y-1/2">
                <svg
                  className="w-5 h-5 fill-current text-gray-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path>
                </svg>
              </button>
              <div className="text-center">
                <h2 className="text-lg font-medium mb-1">Chicago Crime Rate</h2>
                <p className="text-gray-400 mb-3 text-sm">Data Set</p>
                <svg viewBox="0 0 100 40" className="mx-auto">
                  <polyline
                    fill="none"
                    stroke="#34D399"
                    strokeWidth="2"
                    points="10,30 20,10 30,20 40,10 50,15 60,10 70,20 80,30"
                  />
                </svg>
                <p className="mt-3 text-white text-sm">Price: 0.099999 MATIC</p>{" "}
                {/* Placeholder for Price */}
                <a
                  href="https://mumbai.polygonscan.com/token/0xf5d2b317803fec61af310427b67ada3d5fc4ba60"
                  className="text-blue-400 text-sm mt-1 underline"
                >
                  View Address
                </a>{" "}
                {/* Placeholder for Link */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const defaultBlur = () => {
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
};
