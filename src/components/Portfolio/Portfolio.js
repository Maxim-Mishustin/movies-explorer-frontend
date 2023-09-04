import React from "react";
import "./Portfolio.css";
import arrow from "../../images/arrow.svg";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <nav className="portfolio__list">
        <a
          href="https://github.com/maxim-mishustin/how-to-learn/"
          className="portfolio__link portfolio__link-border"
          target="_blank"
          rel="noreferrer"
        >
          <p className="portfolio__description">Статичный сайт</p>
          <img
            className="portfolio__image"
            src={arrow}
            alt="Стрелка для ссылки на страницу гита"
          />
        </a>
        <a
          href="https://maxim-mishustin.github.io/russian-travel/"
          className="portfolio__link portfolio__link-border"
          target="_blank"
          rel="noreferrer"
        >
          <p className="portfolio__description">Адаптивный сайт</p>
          <img
            className="portfolio__image"
            src={arrow}
            alt="Стрелка для ссылки на страницу гита"
          />
        </a>
        <a
          href="https://maxim-mishustin.github.io/react-mesto-auth/"
          className="portfolio__link"
          target="_blank"
          rel="noreferrer"
        >
          <p className="portfolio__description">Одностраничное приложение</p>
          <img
            className="portfolio__image"
            src={arrow}
            alt="Стрелка для ссылки на страницу гита"
          />
        </a>
      </nav>
    </section>
  );
}

export default Portfolio;
