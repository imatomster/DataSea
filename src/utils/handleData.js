// Note: Make sure .env file and config.js are created and setup correctly
const { oceanConfig } = require("./config.js");
const { ZERO_ADDRESS, NftFactory, Nft } = require("@oceanprotocol/lib");
const { SHA256 } = require("crypto-js");

const freNftAddress = "0xa8aE431FB24A6957C852f1cF69cf0461A281C178";
const freDatatokenAddress = "0x0A09E3F14E8a94FA66463BEB6C023cD5b016d3Cd";
const freAddress = "0x25e1926E3d57eC0651e89C654AB0FA182C6D5CF7";
const freId =
  "0xd5cc01c3e79dbfd17395fedc9dd5112e11c3a639fc81cc15041da82f6a5e4496";
const dispenserNftAddy = "0x57155113737e5BFfA6D1776963C2A366300a361F";
const dispenserDatatokenHash = "0xE0f5a9508040fBF3f7EEbcB13542082417AEeDc1";

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

// const setNFTData = async (publishAccount, freNftAddress, data) => {
const setNFTData = async (data, dispenserNftAddress) => {
  let rv = {};
  let config = await oceanConfig();

  const nft = new Nft(
    config.publisherAccount,
    (await config.publisherAccount.provider.getNetwork()).chainId
  );

  //SET DATA
  try {
    await nft.setData(
      dispenserNftAddress,
      await config.publisherAccount.getAddress(),
      "0x1234",
      data
    );
    rv = { success: true };
  } catch (e) {
    console.log("e = ", e);
    console.log("Failed to set data in NFT ERC725 key value store", e);
    rv = { success: false };
  }
  return rv;
};

// const getNFTData = async (publisherAccount, freNftAddress) => {
const getNFTData = async (dispenserNftAddress) => {
  let rv = {};
  let config = await oceanConfig();

  // change publisher account to the address
  const nft = new Nft(
    config.publisherAccount,
    (await config.publisherAccount.provider.getNetwork()).chainId
  );

  try {
    const response = await nft.getData(freNftAddress, "0x1234");
    rv = { success: true, data: response, dispenserNftAddress: dispenserNftAddress };
  } catch (e) {
    rv = { success: false, data: null, dispenserNftAddress: dispenserNftAddress };
    console.log("e = ", e);
    console.log("Failed to get data from NFT ERC725 key value store", e);
  }

  return rv;
};

export { setNFTData, getNFTData };
