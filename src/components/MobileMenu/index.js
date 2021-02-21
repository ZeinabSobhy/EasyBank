import React, { useContext } from "react"
import "../MobileMenu/Style.scss";
import { FormattedMessage } from "react-intl";
import { ToggleContext } from "../../context/ToggleContext/index";

function MobileMenu() {
  let { state } = useContext(ToggleContext)
  if (state) {
    return (
      <div className="menu">
        <div className="menu__items">
          <div className="menu__item"><FormattedMessage id="header.home" /></div>
          <div className="menu__item"><FormattedMessage id="header.about" /></div>
          <div className="menu__item"><FormattedMessage id="header.contact" /></div>
          <div className="menu__item"><FormattedMessage id="header.Blog" /></div>
          <div className="menu__item"><FormattedMessage id="header.Careers" /></div>
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default MobileMenu