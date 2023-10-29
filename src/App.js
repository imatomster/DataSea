import "./App.css";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  ConnectButton,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { MintButton, DispenseButton } from "./components/DispenserButtons";
import { AddDataButton, GetDataButton } from "./components/DataButtons";

const { chains, publicClient } = configureChains(
  [polygonMumbai],
  [publicProvider()]
);

const wagmiConfig = createConfig({
  autoConnect: true,
  publicClient,
});

function App() {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
          <h1>ETHMiami 2023</h1>
          <ConnectButton />
          <MintButton /> <br />
          <DispenseButton /> <br />
          <GetDataButton /> <br />
          <AddDataButton /> <br />
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  );
}

export default App;
