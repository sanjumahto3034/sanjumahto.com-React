import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Modules/Header";
import HomePage from "./Modules/HomePage";


function App() {
  return (
    <div className="App">
    <Header></Header>
    <HomePage></HomePage>
    </div>
  );
}

export default App;
