// Note: Make sure .env file and config.js are created and setup correctly
const { oceanConfig } = require("./config.js");
const {
  ZERO_ADDRESS,
  NftFactory,
  getHash,
  Nft,
} = require("@oceanprotocol/lib");
const { SHA256 } = require("crypto-js");

// replace the did here
const dataNftAddress = "0x43447ADE8F772b97dDA55712A521d3F570e7034e";
const chainId = 80001;
const checksum = SHA256(dataNftAddress + chainId.toString(10));
const did = "did:op:" + checksum;

// This function takes did as a parameter and updates the data NFT information
const setMetadata = async (did) => {
  const publisherAccount = await oceanConfig.publisherAccount.getAddress();

  // Fetch ddo from Aquarius
  const ddo = await await oceanConfig.aquarius.resolve(did);

  const nft = new Nft(oceanConfig.publisherAccount);

  // update the ddo here
  ddo.metadata.name = "Sample dataset v2";
  ddo.metadata.description =
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam";
  ddo.metadata.tags = ["new tag1", "new tag2"];

  const providerResponse = await oceanConfig.ethersProvider.encrypt(
    ddo,
    process.env.OCEAN_NETWORK_URL
  );
  const encryptedResponse = await providerResponse;
  const metadataHash = getHash(JSON.stringify(ddo));

  // Update the data NFT metadata
  await nft.setMetadata(
    ddo.nftAddress,
    publisherAccount,
    0,
    process.env.OCEAN_NETWORK_URL,
    "",
    "0x2",
    encryptedResponse,
    `0x${metadataHash}`
  );

  // Check if ddo is correctly udpated in Aquarius
  await oceanConfig.aquarius.waitForAqua(ddo.id);

  console.log(`Resolved asset did [${ddo.id}]from aquarius.`);
  console.log(`Updated name: [${ddo.metadata.name}].`);
  console.log(`Updated description: [${ddo.metadata.description}].`);
  console.log(`Updated tags: [${ddo.metadata.tags}].`);
};

// Call setMetadata(...) function defined above
setMetadata(did)
  .then(() => {
    process.exit();
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
