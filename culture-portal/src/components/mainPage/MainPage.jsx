import React from 'react';

import PersonFromTeam from './personFromTeam/PersonFromTeam';

import './main-page.css';

const MainPage = () => (
  <div className="main-page">
    <div className="main-page__portal-description">
          Portal description
    </div>
    <div className="main-page__author-of-the-day">
          Author of the day
    </div>
    <ul className="main-page__team-description">
      <PersonFromTeam
        photo="Something photo"
        githubAccount="Something github account"
        nickname="Something nickname"
        contribution="Something contribution"
      />
      <PersonFromTeam
        photo="Something photo"
        githubAccount="Something github account"
        nickname="Something nickname"
        contribution="Something contribution"
      />
      <PersonFromTeam
        photo="Something photo"
        githubAccount="Something github account"
        nickname="Something nickname"
        contribution="Something contribution"
      />
      <PersonFromTeam
        photo="Something photo"
        githubAccount="Something github account"
        nickname="Something nickname"
        contribution="Something contribution"
      />
      <PersonFromTeam
        photo="Something photo"
        githubAccount="Something github account"
        nickname="Something nickname"
        contribution="Something contribution"
      />
      <PersonFromTeam
        photo="Something photo"
        githubAccount="Something github account"
        nickname="Something nickname"
        contribution="Something contribution"
      />
    </ul>
  </div>
);

export default MainPage;
