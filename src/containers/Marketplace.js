import React from "react";
import { MintButton, DispenseButton } from "../components/DispenserButtons";
import { AddDataButton, GetDataButton } from "../components/DataButtons";
import { NavigationBar } from "../components/NavigationBar";
import { DataBox } from "../components/DataBox";
import data from "../components/data.json";
import {
  getDefaultWallets,
  RainbowKitProvider,
  ConnectButton,
} from "@rainbow-me/rainbowkit";



export function Marketplace() {
  return (
    <div className="h-full">
      <div className="data-boxes-container">
        <DataBox input = {data}/>
        <DataBox />
        <DataBox />
      </div>
    </div>
  );
}
