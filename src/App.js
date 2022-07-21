import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import PanelsStore from "./context/PanelsContext";
import Header from "./components/header";
import Panels from "./components/panels";
import PanelDetails from "./components/panelDetails";
import Cart from "./components/cart";

function App() {
  return (
    <PanelsStore>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Panels />} />
          <Route path="panel/:panelId" element={<PanelDetails />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </PanelsStore>
  );
}

export default App;
