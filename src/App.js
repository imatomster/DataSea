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
<<<<<<< HEAD
import {ProviderForm} from "./components/ProviderForm"
=======
import { NavigationBar } from "./components/NavigationBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardPage } from "./containers/DashboardPage";
import { ModelsPage } from "./containers/ModelsPage";
import { FormPage } from "./containers/FormPage";
import { SettingPage } from "./containers/SettingPage";
>>>>>>> ead81554e0fedaf710e7ba4debd36b9436962a67

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
    <div className="app-container">
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
          <h1>ETHMiami 2023</h1>
          <ConnectButton />
          <MintButton /> <br />
          <DispenseButton /> <br />
          <GetDataButton /> <br />
          <AddDataButton /> <br />
          <ProviderForm/>
        </RainbowKitProvider>
      </WagmiConfig>
    </div>
  );
}

export default App;
