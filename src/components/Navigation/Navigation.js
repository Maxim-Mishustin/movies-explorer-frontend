import React from "react"
import { Link, NavLink } from "react-router-dom"
import "./Navigation.css"
import account from "../../images/account-btn.svg"

function Navigation({ handleCloseBurger }) {

  // Функция для смены цвета для активной ссылки
  const setActive = ({ isActive }) =>
    isActive ? "navigation__link_active" : "navigation__link"

  return (
    <div className="navigation__page-overlay">
      <div className="navigation__overlay-block"></div>
      <div className="navigation__menu">
        <button
          className="navigation__close-btn"
          onClick={handleCloseBurger}
        ></button>
        <nav className="navigation__links">
          <NavLink
            exact
            to="/"
            className={setActive}
          >
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            className={setActive}
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={setActive}
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
        <Link to="/profile" className="navigation__account-btn">
          <img navigation__account-image src={account} alt="Кнопка входа в аккаунт" />
        </Link>
      </div>
    </div>
  )
}

export default Navigation
