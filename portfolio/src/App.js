import React, { useEffect, useState } from "react";
import "./App.css";
import TitleBar from "./Module/TitleBar";
import Projects from "./Module/Projects";
import About from "./Module/About";
import Hello from "./Module/Hello";
import Resume from "./Module/Resume";

function App() {
  const [ui_state, setUiState] = useState(0);
  function GetState(__index) {
    const arr = [Hello, About, Projects, Resume];
    return arr[__index];
  }

  const RenderState = GetState(ui_state);

  return (
    <div className="App">
      <TitleBar
        onClickHello={() => setUiState(0)}
        onClickAbout={() => setUiState(1)}
        onClickProjects={() => setUiState(2)}
        onClickResume={() => setUiState(3)}
      ></TitleBar>
      <RenderState></RenderState>
    </div>
  );
}

export default App;
