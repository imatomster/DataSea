// Note: Make sure .env file and config.js are created and setup correctly
const { oceanConfig } = require("./config.js");
const {
  amountToUnits,
  sendTx,
  FixedRateExchange,
} = require("@oceanprotocol/lib");
const ethers = require("ethers");

// Define a function createFRE()
const createMINT = async () => {
  let config = await oceanConfig();
  const publisher = config.publisherAccount;
  const publisherAccount = await config.publisherAccount.getAddress();
  const dataNftAddress = "0x43447ADE8F772b97dDA55712A521d3F570e7034e"; // our nft contract

  // const minAbi = [
  //   {
  //     constant: false,
  //     inputs: [
  //       { name: "to", type: "address" },
  //       { name: "value", type: "uint256" },
  //     ],
  //     name: "mint",
  //     outputs: [{ name: "", type: "bool" }],
  //     payable: true,
  //     stateMutability: "payable",
  //     type: "function",
  //   },
  // ];

  // const tokenContract = new ethers.Contract(
  //   // config.oceanTokenAddress,
  //   dataNftAddress,
  //   minAbi,
  //   publisher
  // );

  // const estGasPublisher = await tokenContract.estimateGas.mint(
  //   publisherAccount,
  //   amountToUnits(null, null, "1000", 18)
  // );
  // const trxReceipt = await sendTx(
  //   estGasPublisher,
  //   publisher,
  //   1,
  //   tokenContract.mint,
  //   publisherAccount,
  //   amountToUnits(null, null, "1000", 18)
  // );

  // return {
  //   trxReceipt,
  // };

  const fixedRate = new FixedRateExchange(freAddress, publisherAccount);
  const oceanAmount = await (
    await fixedRate.calcBaseInGivenDatatokensOut(freId, "1")
  ).baseTokenAmount;
};

// Call the createFRE() function
createMINT()
  .then(({ trxReceipt }) => {
    console.log(`TX Receipt ${JSON.stringify(trxReceipt, null, 2)}`);
    process.exit(1);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
