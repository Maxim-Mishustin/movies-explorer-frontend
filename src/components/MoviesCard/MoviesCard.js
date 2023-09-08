import React, { useState } from "react"
import "./MoviesCard.css"

function MoviesCard() {
  const [isLiked, setIsLiked] = useState(true)

  const handleClick = () => {
    setIsLiked(!isLiked)
  }

  return (
    <>
      <li className="film">
        {/* карточка вставлена чтобы увидеть структуру разметки страницы, при дальнейшем использовании преобразуется в темплейт и альт будет заполняться из массива с фильмами */}
        <img alt="" className="film__image" />
        <div className="film__block">
          <div className="film__title-block">
            <h2 className="film__title">33 слова о дизайне</h2>
            <p className="film__time">1ч 37м</p>
          </div>
          <button
            type="button"
            className={`film__like-btn ${
              isLiked ? "film__like-btn_active" : ""
            }`}
            onClick={handleClick}
          ></button>
        </div>
      </li>
      <li className="film">
        {/* карточка вставлена чтобы увидеть структуру разметки страницы, при дальнейшем использовании преобразуется в темплейт и альт будет заполняться из массива с фильмами */}
        <img alt="" className="film__image" />
        <div className="film__block">
          <div className="film__title-block">
            <h2 className="film__title">33 слова о дизайне</h2>
            <p className="film__time">1ч 37м</p>
          </div>
          <button type="button" className="film__delete-btn"></button>
        </div>
      </li>

      <li className="film">
        {/* карточка вставлена чтобы увидеть структуру разметки страницы, при дальнейшем использовании преобразуется в темплейт и альт будет заполняться из массива с фильмами */}
        <img alt="" className="film__image" />
        <div className="film__block">
          <div className="film__title-block">
            <h2 className="film__title">33 слова о дизайне</h2>
            <p className="film__time">1ч 37м</p>
          </div>
          <button
            type="button"
            className={`film__like-btn ${
              isLiked ? "film__like-btn_active" : ""
            }`}
            onClick={handleClick}
          ></button>
        </div>
      </li>
    </>
  )
}

export default MoviesCard
