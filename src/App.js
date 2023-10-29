import "./App.css";
import { createDataNFT } from "./utils/create_dataNFT";

function App() {
  return (
    <button onClick={() => {
      createDataNFT()
      .then(({ nftAddress }) => {
        console.log(`DataNft address ${nftAddress}`);
      })
      .catch((err) => {
        console.error(err);
      })
    }}>Click</button>
  );
}

export default App;
