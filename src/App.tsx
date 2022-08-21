import { useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";

import reactLogo from "./assets/react.svg";
import "./App.css";
import LeftSideBar from "./components/LeftSideBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RightSideBar from "./components/RightSideBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <GoogleOAuthProvider
      clientId={import.meta.env.VITE_PUBLIC_GOOGLE_API_TOKEN}
    >
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
        <div className="w-1/5 bg-violet-600 hidden md:block">
          <RightSideBar />
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
