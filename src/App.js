import "./App.css";
import { MintButton, DispenseButton } from "./components/DispenserButtons";
import { AddDataButton, GetDataButton } from "./components/DataButtons";

function App() {
  return (
    <>
      <h1>ETHMiami 2023</h1>
      <MintButton /> <br />
      <DispenseButton /> <br />
      <GetDataButton /> <br />
      <AddDataButton /> <br />
    </>
  );
}

export default App;
