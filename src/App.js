import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { OverFlowContext } from "./context/OverFlowContext";
function App() {
  return (
    <div className="overflow-hidden">
      <OverFlowContext>
        <Home />
      </OverFlowContext>
    </div>
  );
}

export default App;
