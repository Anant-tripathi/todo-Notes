import "./App.css";
import Sidebar from "./Components/Sidebar.jsx";
import Workspace from "./Components/Workspace.jsx";

import { useState } from "react";

function App() {
  const [toDisplay, setToDisplay] = useState("All");
  return (
    <div className="main">
      <Sidebar toDisplay={toDisplay} setToDisplay={setToDisplay} />
      <Workspace toDisplay={toDisplay} />
    </div>
  );
}

export default App;
