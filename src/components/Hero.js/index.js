import React ,{useContext} from "react";
import "../Hero.js/Style.scss";
import { LocalizationContext } from "../../context/LocalizationContext";
import phones from "../../assets/images/image-mockups.png";
import { FormattedMessage } from "react-intl";


function Hero() {
  const [locale, switchLocale] = useContext(LocalizationContext);
    const Button = ({ text }) => <button className="gradient-btn">{text}</button>
  return (
    <header className="hero">
      <div className="hero__wrapper">
     
         <div  className={locale=="en"?"hero__bg__wrapper":"hero__bg__wrapper2"}>
       
         <div  className={locale=="en"?"hero__bg":"hero__bg2"}></div>

         
        </div>
        <div className="hero__left">
          <h1 className="hero__title">
          <FormattedMessage id="Hero.title" /> <br /> <FormattedMessage id="Hero.subtitle" />
          </h1>
          <p className="hero__desc">
          <FormattedMessage id="desc.desc1" />
          <FormattedMessage id="desc.desc2" />
          <FormattedMessage id="desc.desc3" />
          </p>
          <Button text={<FormattedMessage id="desc.btn.btn" />}/>
          
        </div>
        <div  className={locale=="en"?"hero__right":"hero__right2"}>
       
          <img src={phones} alt="phones" className={locale=="en"?"hero__phones":"hero__phones2"} />
        
        </div>
      </div>
    </header>
  )
}

export default Hero