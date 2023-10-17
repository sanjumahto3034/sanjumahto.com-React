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
      {/* <WhatIDo /> */}
      {/* <EngineLogo/> */}
      <Resume />
      <Footer />

      {/* <div className="verticle-line-1"></div>
      <div className="verticle-line-2"></div>
      <div className="verticle-line-3"></div>
      <div className="verticle-line-4"></div>
      <div className="verticle-line-5"></div>
      <div className="horizontal-line-1"></div>
      <div className="horizontal-line-2"></div>
      <div className="blackspot-parent-1"><div className="blackspot-1"></div></div>
      <div className="blackspot-parent-2"><div className="blackspot-2"></div></div>
      <div className="blackspot-parent-3"><div className="blackspot-3"></div></div>
      <div className="blackspot-parent-4"><div className="blackspot-4"></div></div> */}
      {/* {/* <HeaderDiv/>  */}
      {/* <HomeTitle/>
      <Introductiondiv/>*/}
    </div>
  );
}

export default App;
