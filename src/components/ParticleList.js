import React from 'react';
import './ParticleList.css';

const ParticleList = ({ selectedLocation, onParticleSelect }) => {
  const particles = [
    { name: 'PM2.5', min: 0, max: 50, unit: 'µg/m³' },
    { name: 'PM10', min: 0, max: 100, unit: 'µg/m³' },
    { name: 'CO2', min: 300, max: 1000, unit: 'ppm' },
    { name: 'O3', min: 0, max: 0.1, unit: 'ppm' },
    { name: 'NO3', min: 0, max: 0.1, unit: 'ppm' }
  ];

  const getQualityStatus = (value, particle) => {
    const ranges = {
      'PM2.5': { good: 12, moderate: 35, bad: 55 },
      'PM10': { good: 54, moderate: 154, bad: 254 },
      'CO2': { good: 400, moderate: 1000, bad: 2000 },
      'O3': { good: 0.05, moderate: 0.07, bad: 0.1 },
      'NO3': { good: 0.02, moderate: 0.05, bad: 0.1 }
    };

    if (value <= ranges[particle].good) return 'Good';
    if (value <= ranges[particle].moderate) return 'Moderate';
    if (value <= ranges[particle].bad) return 'Bad';
    return 'Very Bad';
  };

  const getRandomValue = (min, max) => {
    return (Math.random() * (max - min) + min).toFixed(2);
  };

  return (
    <div className="particle-list">
      <h3>Partículas en el aire</h3>
      <ul>
        {particles.map((particle) => {
          const value = selectedLocation ? getRandomValue(particle.min, particle.max) : null;
          const quality = value ? getQualityStatus(value, particle.name) : null;
          
          return (
            <li 
              key={particle.name}
              className={`particle-item ${quality?.toLowerCase()}`}
              onClick={() => onParticleSelect(particle.name, value, quality)}
            >
              <span className="particle-name">{particle.name}</span>
              {value && (
                <div className="particle-details">
                  <span className="particle-value">{value} {particle.unit}</span>
                  <span className="particle-quality">{quality}</span>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ParticleList; 