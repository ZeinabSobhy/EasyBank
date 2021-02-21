import React from "react"
import "../Benefit/style.scss";
import online from "../../assets//icons/icon-online.svg";
import budgeting from "../../assets/icons/icon-budgeting.svg";
import api from "../../assets/icons/icon-api.svg";
import onboarding from "../../assets/icons/icon-onboarding.svg";
import { FormattedMessage } from "react-intl";


  

function Benefit() {
    function BenefitCard({ img, title, desc }) {
        return (
          <div className="benefitCard">
            <div className="benefitCard__icon">
              <img src={img} alt="card-icon" />
            </div>
            <h2 className="benefitCard__title">{title}</h2>
            <p className="benefitCard__desc">{desc}</p>
          </div>
        )
      }
  return (
    <section className="benefit">
      <div className="benefit__wrapper">
        <h1 className="benefit__title"><FormattedMessage id="benefit.title" /></h1>
        <p className="benefit__desc">
        <FormattedMessage id="benefit.desc" />
          <br />
          <FormattedMessage id="benefit.desc2" />
        </p>
        <div className="benefit__cards">
          <BenefitCard
            img={online}
            title={<FormattedMessage id="BenefitCard.title" />}
            desc={<FormattedMessage id="BenefitCard.desc" />}
          />
          <BenefitCard
            img={budgeting}
            title={<FormattedMessage id="BenefitCard.title2" />}
            desc={<FormattedMessage id="BenefitCard.desc2" />}
          />
          <BenefitCard
            img={onboarding}
            title={<FormattedMessage id="BenefitCard.title3" />}
            desc={<FormattedMessage id="BenefitCard.desc3" />}
          />
          <BenefitCard
            img={api}
            title={<FormattedMessage id="BenefitCard.title4" />}
            desc={<FormattedMessage id="BenefitCard.desc4" />}
          />
        </div>
      </div>
    </section>
  )
}

export default Benefit