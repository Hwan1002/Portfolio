import "./css/style.css";
import "./css/readmeStyle.css"
import hwan from "./css/img/profile/hwan.jpg"
import React, { useState, useEffect } from 'react';
import Header from "./component/Header.js";
import About from "./component/About";
import Skills from "./component/Skills";
import Archiving from "./component/Archiving.js";
import Project from "./component/Project.js";
import Career from "./component/Career.js";
//tndydlftlwkr dk wjdakf wlruqek xhlrmsgkrhtlvdmsep qkd
function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="App">
        <Header />
        <div className='mastHead'>
          <div className='mastHead_contents'>
            <div className="profileImg">
              <img src={hwan} alt="장환석"/>
            </div>
            <div className="profileText">
            <h1 className='mastHead_Title'>장환석 포트폴리오</h1>
            <button className="mastHead_button" onClick={() => scrollToSection('about')}>더 알아보기 ↓</button>
            </div>
          </div>
        </div>
        <About />
        <Skills />
        <Archiving />
        <Project />
        <Career />
      </div>
    </>
  );
}

export default App;
