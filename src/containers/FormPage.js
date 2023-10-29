import React from "react";
import {
  getDefaultWallets,
  RainbowKitProvider,
  ConnectButton,
} from "@rainbow-me/rainbowkit";
import { ProviderForm } from "../components/ProviderForm";

export function FormPage() {
  return (
    <div className="h-full">
      <h1>Form Page</h1>
      <ProviderForm />
    </div>
  );
}
