// Note: Make sure .env file and config.js are created and setup correctly
const { ethers, providers, Signer } = require("ethers");
const { oceanConfig } = require("./config.js");

const {
  ZERO_ADDRESS,
  NftFactory,
  getEventFromTx,
  Nft,
  ProviderInstance,
} = require("@oceanprotocol/lib");
const { SHA256 } = require("crypto-js");

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

const freNftAddress = "0xa8aE431FB24A6957C852f1cF69cf0461A281C178";
const freDatatokenAddress = "0x0A09E3F14E8a94FA66463BEB6C023cD5b016d3Cd";
const freAddress = "0x25e1926E3d57eC0651e89C654AB0FA182C6D5CF7";
const freId =
  "0xd5cc01c3e79dbfd17395fedc9dd5112e11c3a639fc81cc15041da82f6a5e4496";

const updateData = async () => {
  // Add Meta Data with Asset_URL

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

  const nft = new Nft(
    config.publisherAccount,
    (await config.publisherAccount.provider.getNetwork()).chainId
  );

  const fixedDDO = { ...genericAsset };

  fixedDDO.chainId = (
    await config.publisherAccount.provider.getNetwork()
  ).chainId;
  fixedDDO.id =
    "did:op:" +
    SHA256(
      ethers.utils.getAddress(freNftAddress) + fixedDDO.chainId.toString(10)
    );
  fixedDDO.nftAddress = freNftAddress;

  ASSET_URL.datatokenAddress = freDatatokenAddress;
  ASSET_URL.nftAddress = freNftAddress;
  fixedDDO.services[0].files = await ProviderInstance.encrypt(
    ASSET_URL,
    fixedDDO.chainId,
    config.publisherAccount.provider.tokenURI
  );
  fixedDDO.services[0].datatokenAddress = freDatatokenAddress;

  console.log("PLEASE WORK");
  console.log(`DID: ${fixedDDO.id}`);

  return {
    trxReceipt,
  };
};

updateData()
  .then(({ trxReceipt }) => {
    // console.log(`TX Receipt ${JSON.stringify(trxReceipt, null, 2)}`);
    process.exit(1);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
