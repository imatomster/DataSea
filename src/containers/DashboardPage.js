import React from "react";
import { MintButton, DispenseButton } from "../components/DispenserButtons";
import { AddDataButton, GetDataButton } from "../components/DataButtons";
import { NavigationBar } from "../components/NavigationBar";
import {
  getDefaultWallets,
  RainbowKitProvider,
  ConnectButton,
} from "@rainbow-me/rainbowkit";

export function DashboardPage() {
  return (
    <div className="h-full">
      <h1>ETHMiami 2023</h1>
      <ConnectButton />
      <MintButton /> <br />
      <DispenseButton /> <br />
      <GetDataButton /> <br />
      <AddDataButton /> <br />
    </div>
  );
}
