require("dotenv").config();
const {
  Aquarius,
  ConfigHelper,
  configHelperNetworks,
} = require("@oceanprotocol/lib");
const ethers = require("ethers");
const fs = require("os");
const homedir = require("os");

async function oceanConfig() {
  const provider = new ethers.providers.JsonRpcProvider(
    process.env.OCEAN_NETWORK_URL //|| configHelperNetworks[1].nodeUri
  );
  const publisherAccount = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  let oceanConfig = new ConfigHelper().getConfig(
    parseInt(String((await publisherAccount.provider.getNetwork()).chainId))
  );

  const aquarius = new Aquarius(oceanConfig?.metadataCacheUri);

  // If using local development environment, read the addresses from local file.
  // The local deployment address file can be generated using barge.
  if (process.env.OCEAN_NETWORK === "development") {
    const addresses = JSON.parse(
      fs.readFileSync(
        process.env.ADDRESS_FILE ||
          `${homedir}/.ocean/ocean-contracts/artifacts/address.json`,
        "utf8"
      )
    ).development;

    oceanConfig = {
      ...oceanConfig,
      oceanTokenAddress: addresses.Ocean,
      fixedRateExchangeAddress: addresses.FixedPrice,
      dispenserAddress: addresses.Dispenser,
      nftFactoryAddress: addresses.ERC721Factory,
      opfCommunityFeeCollector: addresses.OPFCommunityFeeCollector,
    };
  }

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
