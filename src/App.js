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
import { NavigationBar } from "./components/NavigationBar";
import { HeaderBar } from "./components/HeaderBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DashboardPage } from "./containers/DashboardPage";
import { MyProfilePage } from "./containers/MyProfilePage";
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
    <BrowserRouter className="app-container">
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
          <div className="flex h-screen bg-gray-800 text-white font-poppins">
            {/* Navigation Bar */}
            <div className="w-64">
              <NavigationBar />
            </div>

            {/* Main Content Area */}
            <div className="flex flex-col flex-1">
              {/* Header Bar */}
              <div>
                <HeaderBar />
              </div>

              {/* Routes/Content */}
              <div className="flex-1 overflow-y-auto p-10">
                <Routes>
                  <Route path="/" element={<DashboardPage />} />
                  <Route path="/profile" element={<MyProfilePage />} />
                  <Route path="/form" element={<FormPage />} />
                  <Route path="/settings" element={<SettingPage />} />
                  <Route path="/logout" element={<DashboardPage />} />
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
