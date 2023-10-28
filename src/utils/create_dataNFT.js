// Note: Make sure .env file and config.js are created and setup correctly
const { oceanConfig } = require("./config.js");
const { ZERO_ADDRESS, NftFactory } = require("@oceanprotocol/lib");

// Deinfe a function which will create a dataNFT using Ocean.js library
const createDataNFT = async () => {
  let config = await oceanConfig();
  // console.log(config);
  // Create a NFTFactory
  const factory = new NftFactory(
    config.nftFactoryAddress,
    config.publisherAccount
  );

  const publisherAddress = await config.publisherAccount.getAddress();

  // Define dataNFT parameters
  const nftParams = {
    name: "72120Bundle",
    symbol: "72Bundle",
    // Optional parameters
    templateIndex: 1,
    tokenURI: "https://example.com",
    transferable: true,
    owner: publisherAddress,
  };

  const bundleNFT = await factory.createNFT(nftParams);
  const trxReceipt = await bundleNFT;

  return { nftAddress: trxReceipt };
};

// Call the create createDataNFT() function
createDataNFT()
  .then(({ nftAddress }) => {
    console.log(`DataNft address ${nftAddress}`);
    process.exit();
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
