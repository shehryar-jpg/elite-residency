import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Spinner from "./pages/Spinner";
const Tower88 = React.lazy(() => import("./pages/Tower88"));
function App() {
  return (
    <div className="overflow-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/projects/elite-residency-88"
            element={
              <React.Suspense fallback={<Spinner />}>
                <Tower88 />
              </React.Suspense>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
