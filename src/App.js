import "./App.css";
import PanelsStore from "./context/PanelsContext";
import Header from "./components/header";
import Panels from "./components/panels";

function App() {
  return (
    <PanelsStore>
      <Header />
      <Panels />
    </PanelsStore>
  );
}

export default App;
