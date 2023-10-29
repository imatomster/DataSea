import React from "react";

import {
  getDefaultWallets,
  RainbowKitProvider,
  ConnectButton,
} from "@rainbow-me/rainbowkit";

export function AIProcessing() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        marginTop: "0px",
        paddingTop: "0px",
      }}
    >
      <iframe
        src="https://chatbot.hellotars.com/conv/NJba4f/"
        style={{ width: "100%", height: "100%" }}
      ></iframe>
    </div>
  );
}
