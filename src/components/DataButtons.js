import React from "react";
import { setNFTData, getNFTData } from "../utils/handleData";

const handleAddData = () => {
  setNFTData("resetdata").then((res) => {
    console.log(res);
  });
};

const handleGetData = () => {
  getNFTData().then((res) => {
    console.log(res);
  });
};

export function AddDataButton(props) {
  return <button onClick={handleAddData}>Set Data</button>;
}

export function GetDataButton(props) {
  return <button onClick={handleGetData}>Get Data</button>;
}
