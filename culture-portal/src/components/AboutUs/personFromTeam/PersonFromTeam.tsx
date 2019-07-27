import React from 'react';
import PropTypes from 'prop-types';
import { DataProps } from '../../../types/index';
import './person-from-team.css';

const PersonFromTeam = (props: DataProps) => {
  const {
    photo, githubAccount, nickname, contribution,
  } = props;
  return (
    <li className="team-description__item">
      <div className="team-description__item__photo-of-person">{photo}</div>
      <div className="team-description__item__github-of-person">{githubAccount}</div>
      <div className="team-description__item__nickname-of-person">{nickname}</div>
      <div className="team-description__item__contribution-of-person">{contribution}</div>
    </li>
  );
};

PersonFromTeam.propTypes = {
  photo: PropTypes.string,
  githubAccount: PropTypes.string,
  nickname: PropTypes.string,
  contribution: PropTypes.string,
};

PersonFromTeam.defaultProps = {
  photo: 'Something photo',
  githubAccount: 'Something github account',
  nickname: 'Something',
  contribution: 'Something contribution',
};

export default PersonFromTeam;
