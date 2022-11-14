import React from 'react';
import './Headline.css';

import { headlineNews } from '../utils/News';

const Headline = () => {
  return (
    <div className="main-container">
      <div className="image-container">
        <img src={headlineNews?.image} alt="News" />
      </div>
      <div className="details-container">
        <div>
          <h1>{headlineNews?.title}</h1>
        </div>
        <div>
          <p>{headlineNews?.p}</p>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Headline;
