import React from "react"
import "./MoviesCardList.css"
import SearchError from "../SearchError/SearchError"
import MoviesCard from "../MoviesCard/MoviesCard"
// import Preloader from "../Preloader/Preloader"

function MoviesCardList() {
  return (
    <section className="films">
      {/* <Preloader /> */}

      <SearchError errorText={"Ничего не найдено"} />

      <SearchError
        errorText={
          "Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
        }
      />

      <ul className="films__list">
        <MoviesCard />
      </ul>

      {/* <ul className="films__list"></ul> */}
      <div className="films__btn-block">
        <button className="films__btn">Ещё</button>
      </div>
    </section>
  )
}

export default MoviesCardList
