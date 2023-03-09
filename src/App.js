import "./App.css";
import { FavArtist } from "./components/favArtist/index.jsx";
import PF_Card from "./components/PF_Card/index.jsx";
import { Shortcut } from "./components/shortcuts/index.jsx";
import { Routes } from "react-router-dom";

import Home from "./pages/Home/index.jsx";

function App() {
  return (
    <div className="App">
      {/* <Shortcut /> */}
      {/* <FavArtist /> */}
      <Home />
    </div>
  );
}

export default App;
