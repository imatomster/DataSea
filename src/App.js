import "./App.css";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { NavigationBar } from "./components/NavigationBar";
import { HeaderBar } from "./components/HeaderBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./containers/Dashboard";
import { Marketplace } from "./containers/Marketplace";
import { FormPage } from "./containers/FormPage";
import { AIProcessing } from "./containers/AIProcessing";

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
    <BrowserRouter className="app-container">
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
          <div className="flex h-screen bg-gray-800 text-white font-poppins">
            {/* Navigation Bar */}
            <div className="w-56">
              <NavigationBar />
            </div>

            {/* Main Content Area */}
            <div className="flex flex-col flex-1">
              {/* Header Bar */}
              <div>
                <HeaderBar />
              </div>

              {/* Routes/Content */}
              <div className="flex-1 overflow-y-auto">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/marketplace" element={<Marketplace />} />
                  <Route path="/form" element={<FormPage />} />
                  <Route path="/aiprocessing" element={<AIProcessing />} />
                  <Route path="/settings" />
                  <Route path="/logout" />
                </Routes>
              </div>
            </div>
          </div>
        </RainbowKitProvider>
      </WagmiConfig>
    </BrowserRouter>
  );
}

export default App;
