import React from 'react';
import './App.css';
import HeaderDiv from './Header';
import HomeTitle from './HomeTitle';



function App() {
  return (
    <div className="App">
      <div className="verticle-line-1"></div>
      <div className="verticle-line-2"></div>
      <div className="verticle-line-3"></div>
      <div className="verticle-line-4"></div>
      <div className="verticle-line-5"></div>
      <div className="horizontal-line-1"></div>
      <div className="horizontal-line-2"></div>
      <div className="blackspot-parent-1"><div className="blackspot-1"></div></div>
      <div className="blackspot-parent-2"><div className="blackspot-2"></div></div>
      <div className="blackspot-parent-3"><div className="blackspot-3"></div></div>
      <div className="blackspot-parent-4"><div className="blackspot-4"></div></div>
      <HeaderDiv></HeaderDiv> 
      <HomeTitle></HomeTitle>
    </div>
  );
}

export default App;
