import React from "react";
import "../Footer/Style.scss";
import logoAlt from "../../assets/icons/logo.svg";
import { FormattedMessage } from "react-intl";
import Button from "../Button/index";

import { ReactComponent as Facebook } from "../../assets/icons/icon-facebook.svg";
import { ReactComponent as Twitter } from "../../assets/icons/icon-twitter.svg";
import { ReactComponent as Youtube } from "../../assets/icons/icon-youtube.svg";
import { ReactComponent as Pinterest } from "../../assets/icons/icon-pinterest.svg";
import { ReactComponent as Instagram } from "../../assets/icons/icon-instagram.svg"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__contacts">
          <img src={logoAlt} alt="easybank-logo" />
          <div className="footer__social">
            <Facebook />
            <Youtube />
            <Twitter />
            <Pinterest />
            <Instagram />
          </div>
        </div>
        <div className="footer__items">
       
          <div className="item1">
            <span> <FormattedMessage id="header.AboutUs" /></span>
            <span><FormattedMessage id="header.contact" /></span>
            <span><FormattedMessage id="header.Blog" /></span>
          
          </div>
          <div className="item2">
          <span><FormattedMessage id="header.Careers" /></span>
          <span><FormattedMessage id="header.Support" /></span>
          <span><FormattedMessage id="header.PrivacyPolicy" /></span>
          
          </div>
        </div>
        <div className="footer__button">
          <Button />
          <span> &copy;<FormattedMessage id="header.Easybank" /></span>

        </div>
      </div>
    </footer>
  )
}

export default Footer