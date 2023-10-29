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
import { NavigationBar } from "./components/NavigationBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardPage } from "./containers/DashboardPage";
import { ModelsPage } from "./containers/ModelsPage";
import { FormPage } from "./containers/FormPage";
import { SettingPage } from "./containers/SettingPage";

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
    <BrowserRouter>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
          <div className="flex h-screen bg-gray-800 text-white font-poppins">
            <NavigationBar />
            <Routes className="flex-1">
              <Route path="/" element={<DashboardPage />} />
              <Route path="/models" element={<ModelsPage />} />
              <Route path="/form" element={<FormPage />} />
              <Route path="/settings" element={<SettingPage />} />
              <Route path="/logout" element={<DashboardPage />} />
            </Routes>
          </div>
        </RainbowKitProvider>
      </WagmiConfig>
    </BrowserRouter>
  );
}

export default App;
