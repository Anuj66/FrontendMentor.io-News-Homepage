import React from 'react';
import './Headline.css';

import { headlineNews } from '../utils/News';

const Headline = () => {
  return (
    <div className="main-container">
      <div className="image-container">
        <img className="headline-image" src={headlineNews?.imageDesktop} alt="News" />
      </div>
      <div className="details-container">
        <div className="details-title">
          <h1 className="details-header">{headlineNews?.title}</h1>
        </div>
        <div className="details-description">
          <p className="details-paragraph">{headlineNews?.description}</p>
          <button className="details-read-more">READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Headline;
