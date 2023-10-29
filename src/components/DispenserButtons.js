import React from "react";
import { createDispenser, dispenseNFT } from "../utils/handleDispenser";

const handleCreateDispenser = () => {
  try {
    createDispenser().then((res) => {
      console.log(res);
    });
  } catch (error) {
    console.log(error);
  }
};

const handleDispense = () => {
  try {
    dispenseNFT().then((res) => {
      console.log(res);
    });
  } catch (error) {
    console.log(error);
  }
};

export function MintButton(props) {
  return <button onClick={handleCreateDispenser}>Create Dispenser NFT</button>;
}

export function DispenseButton(props) {
  return <button onClick={handleDispense}>Dispense Data Token</button>;
}
