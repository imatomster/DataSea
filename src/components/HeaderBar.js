import React from "react";
import {
  getDefaultWallets,
  RainbowKitProvider,
  ConnectButton,
} from "@rainbow-me/rainbowkit";

export const HeaderBar = () => {
  return (
    <div className="flex items-center justify-between px-8 p-5">
      <h1 className="text-white font-bold text-xl">DataSea</h1>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search Data Sets..."
          className="rounded px-4 py-2 bg-gray-600 text-white"
        />
        <div className="text-white">Account Info</div>
        <div>0x6e...23</div>
        <ConnectButton />
      </div>
    </div>
  );
};
