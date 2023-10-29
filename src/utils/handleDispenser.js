// Note: Make sure .env file and config.js are created and setup correctly
const { oceanConfig } = require("./config.js");
const {
  ZERO_ADDRESS,
  NftFactory,
  getEventFromTx,
  getAddress,
  Datatoken,
  Dispenser,
  balance,
} = require("@oceanprotocol/lib");

const freNftAddress = "0xa8aE431FB24A6957C852f1cF69cf0461A281C178";
const freDatatokenAddress = "0x0A09E3F14E8a94FA66463BEB6C023cD5b016d3Cd";
const freAddress = "0x25e1926E3d57eC0651e89C654AB0FA182C6D5CF7";
const freId =
  "0xd5cc01c3e79dbfd17395fedc9dd5112e11c3a639fc81cc15041da82f6a5e4496";
const dispenserNftAddy = "0x57155113737e5BFfA6D1776963C2A366300a361F";
const dispenserDatatokenHash = "0xE0f5a9508040fBF3f7EEbcB13542082417AEeDc1";

// need to add accept the stuff
const createDispenser = async () => {
  const config = await oceanConfig();
  const publisherAccount = config.publisherAccount;

  const factory = new NftFactory(config.nftFactoryAddress, publisherAccount);

  const nftParams = {
    name: "B@B NFT",
    symbol: "bab",
    templateIndex: 1,
    tokenURI: "",
    transferable: true,
    owner: await publisherAccount.getAddress(),
  };

  const datatokenParams = {
    templateIndex: 1,
    cap: "100000",
    feeAmount: "0",
    paymentCollector: ZERO_ADDRESS,
    feeToken: ZERO_ADDRESS,
    minter: await publisherAccount.getAddress(),
    mpFeeAddress: ZERO_ADDRESS,
  };

  const dispenserParams = {
    dispenserAddress: config.dispenserAddress,
    maxTokens: "1",
    maxBalance: "1",
    withMint: true,
    allowedSwapper: ZERO_ADDRESS,
  };

  console.log(config.dispenserAddress);
  const bundleNFT = await factory.createNftWithDatatokenWithDispenser(
    nftParams,
    datatokenParams,
    dispenserParams
  );

  console.log(bundleNFT);

  const trxReceipt = await bundleNFT.wait();
  const nftCreatedEvent = getEventFromTx(trxReceipt, "NFTCreated");
  const tokenCreatedEvent = getEventFromTx(trxReceipt, "TokenCreated");
  const dispenserCreatedEvent = getEventFromTx(trxReceipt, "DispenserCreated");
  console.log("NFT created event: ", nftCreatedEvent);
  console.log("Token created event: ", tokenCreatedEvent);
  console.log("New FRE event: ", dispenserCreatedEvent);

  const dispenserNftAddress = nftCreatedEvent.args.newTokenAddress;
  const dispenserDatatokenAddress = tokenCreatedEvent.args.newTokenAddress;
  console.log(`Dispenser NFT address: ${dispenserNftAddress}`);
  console.log(`Dispenser transaction Hash: ${dispenserDatatokenAddress}`);

  return {
    dispenserNftAddress: dispenserNftAddress,
    dispenserDatatokenAddress: dispenserDatatokenAddress,
  };
};

// change the dispenser to the current props
const dispenseNFT = async () => {
  const config = await oceanConfig();
  const publisherAccount = config.publisherAccount;
  const datatoken = new Datatoken(publisherAccount);
  console.log(datatoken);
  const dispenser = new Dispenser(config.dispenserAddress, publisherAccount);
  const DISP_NFT_SYMBOL = "B@B Dispenser Coin";

  const consumerAccount = publisherAccount;

  let consumerDTBalance = await balance(
    consumerAccount,
    dispenserDatatokenHash,
    await consumerAccount.getAddress()
  );
  console.log(
    `Consumer ${DISP_NFT_SYMBOL} balance before dispense: ${consumerDTBalance}`
  );

  await dispenser.dispense(
    dispenserDatatokenHash,
    "1",
    await consumerAccount.getAddress()
  );

  consumerDTBalance = await balance(
    consumerAccount,
    dispenserDatatokenHash,
    await consumerAccount.getAddress()
  );
  console.log(
    `Consumer ${DISP_NFT_SYMBOL} balance after dispense: ${consumerDTBalance}`
  );
};

export { createDispenser, dispenseNFT };
