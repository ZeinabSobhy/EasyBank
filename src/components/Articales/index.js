import React from "react"
import "../Articales/Style.scss";
import currency from "../../assets/images/image-currency.jpg";
import plane from "../../assets/images/image-plane.jpg";
import confetti from "../../assets/images/image-confetti.jpg";
import restaurant from "../../assets/images/image-restaurant.jpg";
import { FormattedMessage } from "react-intl";

function Articles() {
    function ArticleCard({ img, author, title, desc }) {
        return (
          <div className="articleCard">
            <div className="articleCard__img">
              <img src={img} alt="card-pict" />
            </div>
            <div className="articleCard__details">
              <small className="articleCard__author"> <FormattedMessage id="Articles.by" /> {author}</small>
              <span className="articleCard__title">{title}</span>
              <p className="articleCard__desc">{desc}</p>
            </div>
          </div>
        )
      }
  return (
    <section className="article">
      <div className="article__wrapper">
        <div className="article__title">
          <h1><FormattedMessage id="Articles.Articles" /></h1>
        </div>
        <div className="article__cards">
          <ArticleCard
            img={currency}
            author={<FormattedMessage id="Articles.author" />}
            title={<FormattedMessage id="Articles.title" />}
            desc={<FormattedMessage id="Articles.desc" />}
          />
          <ArticleCard
            img={restaurant}
            author={<FormattedMessage id="Articles.author2" />}
            title={<FormattedMessage id="Articles.title2" />}
            desc={<FormattedMessage id="Articles.desc2" />}
          />
          <ArticleCard
            img={plane}
            author={<FormattedMessage id="Articles.author3" />}
            title={<FormattedMessage id="Articles.title3" />}
            desc={<FormattedMessage id="Articles.desc3" />}
          />
          <ArticleCard
            img={confetti}
            author={<FormattedMessage id="Articles.author4" />}
            title={<FormattedMessage id="Articles.title4" />}
            desc={<FormattedMessage id="Articles.desc4" />}
          />
        </div>
      </div>
    </section>
  )
}

export default Articles