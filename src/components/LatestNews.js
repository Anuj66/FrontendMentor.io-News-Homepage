import React from 'react';
import './LatestNews.css';
import { latestNews } from '../utils/News';

const LatestNews = () => {
  return (
    <div className="latest-news-main-container">
      <div className="title">
        <h1 className="title-header">News</h1>
      </div>
      <div className="items">
        {latestNews?.map((news, i) => (
          <div className="news-item">
            <h3 className="item-title">{news.title}</h3>
            <p className="item-details">{news.description}</p>
            {latestNews.length - 1 !== i && <hr className="item-hr" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
