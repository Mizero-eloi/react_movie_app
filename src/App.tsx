import { useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";

import reactLogo from "./assets/react.svg";
import "./App.css";
import LeftSideBar from "./components/LeftSideBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RightSideBar from "./components/RightSideBar";
import MovieDetails from "./pages/MovieDetails";
import Search from "./pages/search";
import Discover from "./pages/Discover";

function App() {
  const [showRightSidebar, setShowRightSidebar] = useState(true);
  const [showLeftSidebar, setshowLeftSidebar] = useState(true);

  const handleToggleRightSideBar = (value: boolean) => {
    setShowRightSidebar(value);
  };

  const handleToggleLeftSideBar = (value: boolean) => {
    setshowLeftSidebar(value);
  };

  console.log("showLeftSidebar", showLeftSidebar);

  return (
    <GoogleOAuthProvider
      clientId={import.meta.env.VITE_PUBLIC_GOOGLE_API_TOKEN}
    >
      <div className="flex gap-6">
        <div
          className={`${showLeftSidebar && "lg:w-1/5"}  sticky top-0 h-[100vh]`}
        >
          <LeftSideBar showLeftSidebar={showLeftSidebar} />
        </div>
        <div
          className={`w-full  ${showRightSidebar ? "md:w-3/5" : "md:w-4/5"}`}
        >
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  handleToggleRightSideBar={handleToggleRightSideBar}
                  handleToggleLeftSideBar={handleToggleLeftSideBar}
                />
              }
            />
            <Route
              path="/home"
              element={
                <Home
                  handleToggleRightSideBar={handleToggleRightSideBar}
                  handleToggleLeftSideBar={handleToggleLeftSideBar}
                />
              }
            />
            <Route
              path="/movie/:id"
              element={
                <MovieDetails
                  handleToggleRightSideBar={handleToggleRightSideBar}
                  handleToggleLeftSideBar={handleToggleLeftSideBar}
                />
              }
            />
            <Route
              path="/search/:searchTerm"
              element={
                <Search
                  handleToggleRightSideBar={handleToggleRightSideBar}
                  handleToggleLeftSideBar={handleToggleLeftSideBar}
                />
              }
            />
            <Route
              path="/discover/:searchTerm"
              element={
                <Discover
                  handleToggleRightSideBar={handleToggleRightSideBar}
                  handleToggleLeftSideBar={handleToggleLeftSideBar}
                />
              }
            />

            <Route
              path="/discover"
              element={
                <Discover
                  handleToggleRightSideBar={handleToggleRightSideBar}
                  handleToggleLeftSideBar={handleToggleLeftSideBar}
                />
              }
            />
          </Routes>
        </div>
        {showRightSidebar && (
          <div className="w-1/5 sticky top-0 h-[100vh] border-l border-gray-700 hidden md:block">
            <RightSideBar />
          </div>
        )}
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
