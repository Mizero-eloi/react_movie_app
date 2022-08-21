import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import LeftSideBar from "./components/LeftSideBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex gap-6">
      <div className="lg:w-1/5">
        <LeftSideBar />
      </div>
      <div className="w-full md:w-3/5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
      <div className="w-1/5 bg-violet-600 hidden md:block">Right sidebar</div>
    </div>
  );
}

export default App;
