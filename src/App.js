import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { OverFlowContext } from "./context/OverFlowContext";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Tower88 from "./pages/Tower88";
function App() {
  return (
    <div className="overflow-hidden">
      <BrowserRouter>
        <OverFlowContext>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/tower-88" element={<Tower88 />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </OverFlowContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
