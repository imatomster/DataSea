//const dotenv = require("dotenv").config();
const {
  Aquarius,
  ConfigHelper,
  // configHelperNetworks,
} = require("@oceanprotocol/lib");
const ethers = require("ethers");
// const fs = require("os");
// const homedir = require("os");

async function oceanConfig() {
  // console.log(process.env.REACT_APP_PRIVATE_KEY);
  const provider = new ethers.providers.JsonRpcProvider(
    "https://polygon-mumbai.g.alchemy.com/v2/S-Kgh5KVRBPdtabpMC4VZJRMhel8EWvi" //|| configHelperNetworks[1].nodeUri
  );
  const publisherAccount = new ethers.Wallet(
    "ec0aad33784ffdced66e190f2ee501eb827672ec52c1c7abcb67176f41a378d1",
    provider
  );

  let oceanConfig = new ConfigHelper().getConfig(
    parseInt(String((await publisherAccount.provider.getNetwork()).chainId))
  );
  // console.log((await publisherAccount.provider.getNetwork()).chainId);

  const aquarius = new Aquarius(oceanConfig?.metadataCacheUri);

  // If using local development environment, read the addresses from local file.
  // The local deployment address file can be generated using barge.
  // if (process.env.REACT_APP_OCEAN_NETWORK === "development") {
  //   const addresses = JSON.parse(
  //     fs.readFileSync(
  //       process.env.REACT_APP_ADDRESS_FILE ||
  //         `${homedir}/.ocean/ocean-contracts/artifacts/address.json`,
  //       "utf8"
  //     )
  //   ).development;

  //   oceanConfig = {
  //     ...oceanConfig,
  //     oceanTokenAddress: addresses.Ocean,
  //     fixedRateExchangeAddress: addresses.FixedPrice,
  //     dispenserAddress: addresses.Dispenser,
  //     nftFactoryAddress: addresses.ERC721Factory,
  //     opfCommunityFeeCollector: addresses.OPFCommunityFeeCollector,
  //   };
  // }

  oceanConfig = {
    ...oceanConfig,
    publisherAccount: publisherAccount,
    consumerAccount: publisherAccount,
    aquarius: aquarius,
  };

  return oceanConfig;
}

module.exports = {
  oceanConfig,
};
