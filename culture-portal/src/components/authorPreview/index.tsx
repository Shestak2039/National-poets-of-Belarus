import './authorPreview.css';
import Typography from "@material-ui/core/Typography/Typography";
import Button from '@material-ui/core/Button';
import React from 'react';
import authorImage from "../../assets/authorOfTheDay.jpg";


export default class Index extends React.Component {
  render() {
    return (
      <div className="author-info-container">
        <div className="author-info-container__description">
          <Typography component="h3" className="author-info-container__header">Автор дня</Typography>
          <Typography component="h2" className="author-info-container__name">Максим Танк</Typography>
          <Typography component="p" className="author-info-container__text-info">
            Максим Танк (имя при рождении: Евгений Иванович Скурко; 1912—1995) —
            белорусский и  советский поэт, переводчик, государственный деятель.
            Классик белорусской литературы. Народный поэт Белорусской ССР (1968).
          </Typography>
          <Button variant="contained" component="button" size="large" className="author-info-container__description__button">
            Go to author
          </Button>
        </div>
        <div className="author-info-image-container">
          <img src={authorImage} alt="author-logo" className="author-info-image"/>
        </div>
      </div>
    );
  }
}

