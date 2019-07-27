import React from 'react';
import authorImage from "../../assets/authorOfTheDay.jpg";
import './main-page.css';

const MainPage = () => (
  <div className="main-page__container">
      <div className="main-page__description">
        <h2 className="main-page__header">Народные поэты Беларуси</h2>
        <p className="main-page__text">
          Этот портал посвящен народным поэтам Беларуси.
          Мы говорим “спасибо” тем людям, кто оставил огромный след в истории белорусской культуры
          и чьи произведения с гордостью изучают сейчас в рамках школьной программы.
        </p>
        <p className="main-page__text">Народный поэт Беларуси — почётное звание, которое присуждается поэтам,
          создавшим выдающиеся произведения литературы и имеющим большие достижения
          в развитии белорусской литературы. Введено Указом Президиума Верховного Совета БССР
          от 27 марта 1956 года. С 1994 года присваивается Президентом Республики Беларусь.
        </p>
      </div>
      <div className="author-of-the-day-container">
        <div className="author-of-the-day__text">
          <h3 className="author-of-the-day-block-name">Автор дня</h3>
          <h2 className="author-of-the-day__header">Максим Танк</h2>
          <p className="author-of-the-day__text-info">
            Максим Танк (имя при рождении: Евгений Иванович Скурко; 1912—1995) —
            белорусский и  советский поэт, переводчик, государственный деятель.
            Классик белорусской литературы. Народный поэт Белорусской ССР (1968).
          </p>
        </div>
        <div className="author-image-container">
          <img src={authorImage} alt="author-of-the-day-logo" className="author-of-the-day-image"/>
        </div>
      </div>
  </div>
);

export default MainPage;
