// Note: Make sure .env file and config.js are created and setup correctly
const { ethers, providers, Signer } = require("ethers");
const { oceanConfig } = require("./config.js");


const {
  ZERO_ADDRESS,
  NftFactory,
  getEventFromTx,
  Nft,
  ProviderInstance,
  Aquarius, 
  FixedRateExchange 
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
  let config = await oceanConfig();
  // const aquarius = new Aquarius(config?.metadataCacheUri)

  // const ASSET_URL = {
  //   datatokenAddress: "0x0",
  //   nftAddress: "0x0",
  //   files: [
  //     {
  //       type: "url",
  //       url: "https://raw.githubusercontent.com/oceanprotocol/testdatasets/main/shs_dataset_test.txt",
  //       method: "GET",
  //     },
  //   ],
  // };
  // console.log("HERE\n")
  // console.log(config)
  const nft = new Nft(
    config.publisherAccount,
    (await config.publisherAccount.provider.getNetwork()).chainId
  );
  const assert = {
    fail: function(message, error) {
        throw new Error(`${message}: ${error}`);
    }
};
//SET DATA
  const data = 'SomeData'
    try {
      await nft.setData(
        freNftAddress,
        await config.publisherAccount.getAddress(),
        '0x1234',
        data
      )
    } catch (e) {
      console.log('e = ', e)
      assert.fail('Failed to set data in NFT ERC725 key value store', e)
    }

    
//  GET DATA 
 try {
  const response = await nft.getData(freNftAddress, '0x1234')
  console.log('getData response: ', response)
  if (response === data) {
    console.log( 'Right data received when getting data from NFT ERC725 key value store')
    console.log(response)

  }
  else{
    console.log("WRONG")
  }
} catch (e) {
  console.log('e = ', e)
  assert('Failed to get data from NFT ERC725 key value store', e)
}

  // const fixedDDO = { ...genericAsset };

  // fixedDDO.chainId = (
  //   await config.publisherAccount.provider.getNetwork()
  // ).chainId;
  // fixedDDO.id =
  //   "did:op:" +
  //   SHA256(
  //     ethers.utils.getAddress(freNftAddress) + fixedDDO.chainId.toString(10)
  //   );
  // fixedDDO.nftAddress = freNftAddress;

  // ASSET_URL.datatokenAddress = freDatatokenAddress;
  // ASSET_URL.nftAddress = freNftAddress;
  // fixedDDO.services[0].files = await ProviderInstance.encrypt(
  //   ASSET_URL,
  //   fixedDDO.chainId,
  //   process.env.PROVIDER_URL
  // );
  // fixedDDO.services[0].datatokenAddress = freDatatokenAddress;

  // console.log("PLEASE WORK");
  // console.log(`DID: ${fixedDDO.id}`);

  // const providerResponse = await ProviderInstance.encrypt(
  //   fixedDDO,
  //   fixedDDO.chainId,
  //   process.env.PROVIDER_URL
  // )
  // const encryptedDDO = await providerResponse
  // const isAssetValid = await aquarius.validate(fixedDDO)
  // // assert(isAssetValid.valid === true, 'Published asset is not valid')
  // console.log("valid?", isAssetValid)

  // function assert(condition, message) {
//     if (!condition) {
//         throw new Error(message || "Assertion failed");
//     }
// }
// assert(isAssetValid.valid === true, 'Published asset is not valid');

//  nft.setMetadata(
//   freNftAddress,
//   config.publisherAccount.getAddress(),
//   0,
//   process.env.PROVIDER_URL,
//   '',
//   ethers.utils.hexlify(2),
//   encryptedDDO,
//   isAssetValid.hash
// )


  return {
    // trxReceipt,
    0
  : 2};
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
