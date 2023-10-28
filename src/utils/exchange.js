import fs from "fs";

import { ethers, providers, Signer } from "ethers";
import { SHA256 } from "crypto-js";
import { homedir } from "os";
import {
  approve,
  Aquarius,
  balance,
  Config,
  Datatoken,
  Dispenser,
  DispenserCreationParams,
  downloadFile,
  DatatokenCreateParams,
  Files,
  FixedRateExchange,
  FreCreationParams,
  Nft,
  NftCreateData,
  NftFactory,
  ProviderFees,
  ProviderInstance,
  transfer,
  ZERO_ADDRESS,
  sendTx,
  ConfigHelper,
  configHelperNetworks,
  amountToUnits,
  ValidateMetadata,
  getEventFromTx,
  DDO,
  LoggerInstance,
} from "@oceanprotocol/lib";

const ASSET_URL = {
  datatokenAddress: "0x0",
  nftAddress: "0x0",
  files: [
    {
      type: "url",
      url: "https://raw.githubusercontent.com/oceanprotocol/testdatasets/main/shs_dataset_test.txt",
      method: "GET",
    },
  ],
};

const genericAsset = {
  "@context": ["https://w3id.org/did/v1"],
  id: "",
  version: "4.1.0",
  chainId: 4,
  nftAddress: "0x0",
  metadata: {
    created: "2021-12-20T14:35:20Z",
    updated: "2021-12-20T14:35:20Z",
    type: "dataset",
    name: "dataset-name",
    description: "Ocean protocol test dataset description",
    author: "oceanprotocol-team",
    license: "MIT",
    tags: ["white-papers"],
    additionalInformation: { "test-key": "test-value" },
    links: ["http://data.ceda.ac.uk/badc/ukcp09/"],
  },
  services: [
    {
      id: "testFakeId",
      type: "access",
      description: "Download service",
      files: "",
      datatokenAddress: "0x0",
      serviceEndpoint: "http://172.15.0.4:8030",
      timeout: 0,
    },
  ],
};
