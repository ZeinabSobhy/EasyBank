import React, { useContext } from "react";
import logo from "../../assets/icons/logo.svg";
import "../Navbar/Style.scss";
import Button from "../Button/index";
import hamburger from "../../assets/icons/icon-hamburger.svg";
import close from "../../assets/icons/icon-close.svg";
import { ToggleContext } from "../../context/ToggleContext/index";
import { FormattedMessage } from "react-intl";

function Navbar() {

  function NavIcon() {
  
    const { state, setToggle } = useContext(ToggleContext)
  
    
    const toggleNav = () => {
      setToggle(!state)
    }
  
    return (
      <button className="nav-icon" onClick={toggleNav}>
        {state ? (
          <img src={close} alt="close" />
        ) : (
          <img src={hamburger} alt="hamburger" />
        )}
      </button>
    )
  }
  
  
  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__logo">
          <img src={logo} alt="easybank-logo.svg" />
        </div>
        <div className="navbar__items">
          <span><FormattedMessage id="header.home" /></span>
          <span> <FormattedMessage id="header.about" /></span>
          <span> <FormattedMessage id="header.contact" /></span>
          <span> <FormattedMessage id="header.Blog" /></span>
          <span> <FormattedMessage id="header.Careers" /></span>
        </div>
        <div className="navbar__button">
          <Button />
        </div>
        <NavIcon />
      </div>
    </nav>
  )
}

export default Navbar