import React from 'react';
import './TrendingNews.css';
import { trendingNews } from '../utils/News';

const TrendingNews = () => {
  return (
    <div className="trendingNews-main-container">
      {trendingNews.map((data, index) => (
        <div className="trendingNews-item">
          <div className="trendingNews-item-image">
            <img src={data?.image} alt="" className="trendingNews-item-image-tag" />
          </div>
          <div className="trendingNews-item-description">
            <div className="trendingNews-item-description-sno">
              <h1 className="trendingNews-item-description-sno-header-tag">
                {String(index + 1).padStart(2, '0')}
              </h1>
            </div>
            <div className="trendingNews-item-description-title">
              <h4 className="trendingNews-item-description-title-header-tag">
                {data.title}
              </h4>
            </div>
            <div className="trendingNews-item-description-description">
              <p className="trendingNews-item-description-description-p-tag">
                {data.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingNews;
