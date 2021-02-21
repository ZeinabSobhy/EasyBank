
import React, { useContext } from "react";
import "../Button/Style.scss";
import { FormattedMessage } from "react-intl";
import { LocalizationContext } from "../../context//LocalizationContext";




const Button = () => {
    const [locale, switchLocale] = useContext(LocalizationContext);
    return(
    <button
    onClick={() =>
      locale == "en" ? switchLocale("ar") : switchLocale("en")
    }
    
    className="gradient-btn"
  >
   
      
      <FormattedMessage id="header.btn" />
   
  </button>
    );
}

export default Button