import React from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import "./Header.css"
import logo from "../../images/logo.svg"
import account from "../../images/account-btn.svg"
import menu from "../../images/menu-btn.svg"
import Navigation from "../Navigation/Navigation"

function Header() {
  const location = useLocation()

  // Временная функция для проверки, нужно ли отображать второй хедер
  const shouldShowTwoHeader = () => {
    const { pathname } = location
    return (
      pathname === "/movies" ||
      pathname === "/saved-movies" ||
      pathname === "/profile"
    )
  }

  // Временная функция для проверки, нужно ли отображать первый хедер
  const shouldShowOneHeader = () => {
    const { pathname } = location
    return pathname === "/"
  }

  const [isClicked, setIsClicked] = React.useState(false)

  function handleOpenBurger() {
    setIsClicked(true)
  }

  function handleCloseBurger() {
    setIsClicked(false)
  }

  return (
    <>
      {shouldShowOneHeader() && (
        <header className="header" id="header">
          <Link to="/" className="logo">
            <img src={logo} alt="Логотип сайта по поиску фильмов" />
          </Link>
          <div className="header__btn-block">
            <Link to="/signup" className="header__btn">
              Регистрация
            </Link>
            <Link to="/signin" className="header__btn header__btn-green">
              Войти
            </Link>
          </div>
        </header>
      )}

      {shouldShowTwoHeader() && (
        <header className="header header_gray" id="header-gray">
          <Link to="/" className="logo">
            <img src={logo} alt="Логотип сайта по поиску фильмов" />
          </Link>
          <div className="header__btn-block-films">
            <NavLink
              to="/movies"
              className="header__btn"
              activeclassname="header__btn_active"
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className="header__btn"
              activeclassname="header__btn_active"
            >
              Сохранённые фильмы
            </NavLink>
          </div>
          <div className="header__btn-block">
            <Link to="/profile" className="header__account-btn">
              <img
                className="header__account-image"
                src={account}
                alt="Кнопка входа в аккаунт"
              />
            </Link>
            <button className="header__menu-btn" onClick={handleOpenBurger}>
              <img src={menu} alt="Кнопка меню" />
            </button>
          </div>
          {isClicked ? (
            <Navigation handleCloseBurger={handleCloseBurger} />
          ) : (
            ""
          )}
        </header>
      )}
    </>
  )
}

export default Header
