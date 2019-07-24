import React from 'react';

import './person-from-team.css';

class PersonFromTeam extends React.Component {
  render() {
    return (
      <li className = 'team-description__item'>
        <div className = 'team-description__item__photo-of-person'>{this.props.photo}</div>
        <div className = 'team-description__item__github-of-person'>{this.props.githubAccount}</div>
        <div className = 'team-description__item__nickname-of-person'>{this.props.nickname}</div>
        <div className = 'team-description__item__contribution-of-person'>{this.props.contribution}</div>
      </li>
    );
  }
}

export default PersonFromTeam;