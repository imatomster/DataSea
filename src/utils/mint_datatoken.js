// Note: Make sure .env file and config.js are created and setup correctly
const { oceanConfig } = require("./config.js");
const {
  amountToUnits,
  sendTx,
  FixedRateExchange,
  Datatoken,
} = require("@oceanprotocol/lib");
const ethers = require("ethers");

/**
 * Fixed rate exchange NFT address: 0xa8aE431FB24A6957C852f1cF69cf0461A281C178
Fixed rate exchange Datatoken address: 0x0A09E3F14E8a94FA66463BEB6C023cD5b016d3Cd
Fixed rate exchange address: 0x25e1926E3d57eC0651e89C654AB0FA182C6D5CF7
Fixed rate exchange Id: 0xd5cc01c3e79dbfd17395fedc9dd5112e11c3a639fc81cc15041da82f6a5e4496
 * 
 */

// Define a function createFRE()
const createMINT = async () => {
  let config = await oceanConfig();
  const publisher = config.publisherAccount;
  const publisherAccount = await config.publisherAccount.getAddress();
  const dataNftAddress = "0x43447ADE8F772b97dDA55712A521d3F570e7034e"; // our nft contract

  // Getting Rate of the token
  const fixedRate = new FixedRateExchange(
    "0x25e1926E3d57eC0651e89C654AB0FA182C6D5CF7",
    config.publisherAccount
  );
  // console.log(fixedRate);
  const oceanAmount = await (
    await fixedRate.calcBaseInGivenDatatokensOut(
      "0xf50dff7c0ff77bd9e5c22eeffe49c04f7df763bcd76ec2d0c1caaeb54a6a2135",
      "1"
    )
  ).baseTokenAmount;
  // console.log(oceanAmount);
  console.log(`Price of 1 ${fixedRate} is ${oceanAmount} OCEAN`);

  // another user will request for a token, we cna mint to them
  // const datatoken = new Datatoken(publisherAccount);
  // const DATATOKEN_AMOUNT = "1";

  // const result = await datatoken.mint(
  //   "0x795d0A3fBF06D0C8ccc21C24811388F2aac97DC1",
  //   await publisherAccount.getAddress(),
  //   DATATOKEN_AMOUNT
  // );

  // console.log(result);

  // const consumerBalance = await publisherAccount.provider.getBalance(
  //   await consumerAccount.getAddress()
  // );
  // const consumerETHBalance = ethers.utils.formatEther(consumerBalance);

  return;
};

// Call the createFRE() function
createMINT()
  .then(({ trxReceipt }) => {
    // console.log(`TX Receipt ${JSON.stringify(trxReceipt, null, 2)}`);
    process.exit(1);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
