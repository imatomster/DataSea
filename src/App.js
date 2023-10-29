import "./App.css";
import { createDataNFT } from "./utils/create_dataNFT";
import { updateData } from "./utils/update_data";
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  ConnectButton
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { polygonMumbai } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains(
  [polygonMumbai],
  [publicProvider()]
);

const wagmiConfig = createConfig({
  autoConnect: true,
  publicClient
});

function App() {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
          <ConnectButton />
          <button onClick={() => {
            createDataNFT()
            .then(({ nftAddress }) => {
              console.log(`DataNft address ${nftAddress}`);
            })
            .catch((err) => {
              console.error(err);
            })
          }}>Create Data NFT</button>

          <button onClick={() => {
            updateData()
            .then(({ trxReceipt }) => {
              console.log(`TX Receipt ${JSON.stringify(trxReceipt, null, 2)}`);
            })
            .catch((err) => {
              console.error(err);
            });
          }}
          >Update Data</button>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}

export default App;
