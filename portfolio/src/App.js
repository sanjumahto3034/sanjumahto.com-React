import React, { useEffect, useState } from "react";
import "./App.css";
import HeaderDiv from "./Header";
import HomeTitle from "./HomeTitle";
import Introductiondiv from "./Introductiondiv";
import Footer from "./Footer";

import TitleDiv from "./TitleDiv";
import HomePageDiv from "./HomePageDiv";
import WhatIDo from "./WhatIDo";

import WhoIWorkWith from "./WhoIWorkWith";
import Resume from "./Resume/Resume";
import StaticColorBackground from "./StaticColorBackground";
import EngineLogo from "./EngineLogo";


function App() {
  return (
    <div className="App">
      <StaticColorBackground/>
      <TitleDiv />
      <HomePageDiv />
      <WhoIWorkWith />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
