import React from "react";
import {
  getDefaultWallets,
  RainbowKitProvider,
  ConnectButton,
} from "@rainbow-me/rainbowkit";
import { ProviderForm } from "../components/ProviderForm";

export function FormPage() {
  return (
    <div className="h-full flex-col pl-10 pr-10">
      <ProviderForm />
    </div>
  );
}
