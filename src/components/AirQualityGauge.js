import React from 'react';
import './AirQualityGauge.css';

const AirQualityGauge = ({ quality }) => {
  const getQualityColor = (quality) => {
    switch (quality) {
      case 'Good':
        return '#4CAF50';
      case 'Moderate':
        return '#FFC107';
      case 'Bad':
        return '#FF9800';
      case 'Very Bad':
        return '#F44336';
      default:
        return '#9E9E9E';
    }
  };

  const getQualityValue = (quality) => {
    switch (quality) {
      case 'Good':
        return 25;
      case 'Moderate':
        return 50;
      case 'Bad':
        return 75;
      case 'Very Bad':
        return 100;
      default:
        return 0;
    }
  };

  return (
    <div className="air-quality-gauge">
      <h3>Air Quality Index</h3>
      <div className="gauge-container">
        <div className="gauge-background">
          <div 
            className="gauge-fill"
            style={{
              width: `${getQualityValue(quality)}%`,
              backgroundColor: getQualityColor(quality)
            }}
          ></div>
        </div>
        <div className="gauge-labels">
          <span>0</span>
          <span>25</span>
          <span>50</span>
          <span>75</span>
          <span>100</span>
        </div>
      </div>
      <div className="quality-indicator" style={{ color: getQualityColor(quality) }}>
        {quality}
      </div>
    </div>
  );
};

export default AirQualityGauge; 