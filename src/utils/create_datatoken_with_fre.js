// Note: Make sure .env file and config.js are created and setup correctly
const { oceanConfig } = require("./config.js");
const { ZERO_ADDRESS, NftFactory } = require("@oceanprotocol/lib");

// Define a function createFRE()
const createFRE = async () => {
  const FRE_NFT_NAME = "Sena Testing";
  const FRE_NFT_SYMBOL = "ST";

  let config = await oceanConfig();

  // Create a NFTFactory
  const factory = new NftFactory(
    config.nftFactoryAddress,
    config.publisherAccount
  );

  const nftParams = {
    name: FRE_NFT_NAME,
    symbol: FRE_NFT_SYMBOL,
    templateIndex: 1,
    tokenURI: "",
    transferable: true,
    owner: await config.publisherAccount.getAddress(),
  };

  const datatokenParams = {
    templateIndex: 1,
    cap: "100000",
    feeAmount: "0",
    paymentCollector: ZERO_ADDRESS,
    feeToken: ZERO_ADDRESS,
    minter: await config.publisherAccount.getAddress(),
    mpFeeAddress: ZERO_ADDRESS,
  };

  const freParams = {
    fixedRateAddress: config.fixedRateExchangeAddress,
    baseTokenAddress: config.oceanTokenAddress,
    owner: await config.publisherAccount.getAddress(),
    marketFeeCollector: await config.publisherAccount.getAddress(),
    baseTokenDecimals: 18,
    datatokenDecimals: 18,
    fixedRate: "1",
    marketFee: "0.001",
    allowedConsumer: ZERO_ADDRESS,
    withMint: true,
  };

  const bundleNFT = await factory.createNftWithDatatokenWithFixedRate(
    nftParams,
    datatokenParams,
    freParams
  );

  const trxReceipt = await bundleNFT.wait();

  return {
    trxReceipt,
  };
};

// Call the createFRE() function
createFRE()
  .then(({ trxReceipt }) => {
    console.log(`TX Receipt ${JSON.stringify(trxReceipt, null, 2)}`);
    process.exit(1);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
