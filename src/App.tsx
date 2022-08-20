import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex gap-6">
      <div className="bg-red-400 w-1/5">left sidebar</div>
      <div className="w-full md:w-3/5 bg-green-500">Feed</div>
      <div className="w-1/5 bg-violet-600 hidden md:block">Right sidebar</div>
    </div>
  );
}

export default App;
