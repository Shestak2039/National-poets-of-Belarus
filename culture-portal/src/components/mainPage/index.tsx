import React from 'react';
import './main-page.css';
import Typography from "@material-ui/core/Typography/Typography";
import AuthorPreview from "../authorPreview";



export default class MainPage extends React.Component {

  render() {
    return (
      <div className="main-page-container">
        <div className="main-page-description">
          <Typography component="h2" className="main-page-description__header">Народные поэты Беларуси</Typography>
          <Typography component="p" className="main-page-description__text">
            Этот портал посвящен народным поэтам Беларуси.
            Мы говорим “спасибо” тем людям, кто оставил огромный след в истории белорусской культуры
            и чьи произведения с гордостью изучают сейчас в рамках школьной программы.
          </Typography>
          <Typography component="p" className="main-page-description__text">Народный поэт Беларуси — почётное звание, которое присуждается поэтам,
            создавшим выдающиеся произведения литературы и имеющим большие достижения
            в развитии белорусской литературы. Введено Указом Президиума Верховного Совета БССР
            от 27 марта 1956 года. С 1994 года присваивается Президентом Республики Беларусь.
          </Typography>
        </div>
        <AuthorPreview />
      </div>
    )
  };
}

