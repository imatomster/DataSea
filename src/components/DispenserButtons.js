import React from "react";
import { createDispenser, dispenseNFT } from "../utils/handleDispenser";

const handleCreateDispenser = () => {
  createDispenser().then((res) => {
    console.log(res);
  });
};

const handleDispense = () => {
  dispenseNFT().then((res) => {
    console.log(res);
  });
};

export function MintButton(props) {
  return <button onClick={handleCreateDispenser}>Create Dispenser NFT</button>;
}

export function DispenseButton(props) {
  return <button onClick={handleDispense}>Dispense Data Token</button>;
}
