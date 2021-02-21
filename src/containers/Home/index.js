import React from "react"
import "../Home/Style.scss";

import { ToggleProvider } from "../../context/ToggleContext/index";

import Navbar from "../../components//Navbar/index";
import Hero from "../../components/Hero.js/index";
import Benefit from '../../components/Benefit/index';
import MobileMenu from "../../components//MobileMenu/index";
import Articles from "../../components/Articales/index"
import Footer from "../../components//Footer/index";

function Home() {
  return (
    <ToggleProvider>
      <div className="App">
        <Navbar />
        <Hero />
        <MobileMenu />
        <Benefit/>
        <Articles/>
        <Footer/>
       
      </div>
    </ToggleProvider>
  )
}

export default Home
