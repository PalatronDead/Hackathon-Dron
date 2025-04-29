import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import AirQualityGauge from './AirQualityGauge';
import './MapSection.css';

const MapClickHandler = ({ onMapClick }) => {
  useMapEvents({
    click: (e) => {
      onMapClick(e.latlng);
    },
  });
  return null;
};

const MapSection = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [airQuality, setAirQuality] = useState(null);

  const handleMapClick = (latlng) => {
    setSelectedLocation(latlng);
    // Generate random air quality
    const qualities = ['Good', 'Moderate', 'Bad', 'Very Bad'];
    const randomQuality = qualities[Math.floor(Math.random() * qualities.length)];
    setAirQuality(randomQuality);
  };

  return (
    <section className="map-section">
      <h2>Mapa de calidad del aire</h2>
      <div className="map-container">
        <div className="map-wrapper">
          <MapContainer
            center={[29.0892, -110.9613]} // Hermosillo coordinates
            zoom={13}
            style={{ height: '500px', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <MapClickHandler onMapClick={handleMapClick} />
            {selectedLocation && (
              <Marker position={selectedLocation}>
                <Popup>
                  Calidad del aire: {airQuality}
                </Popup>
              </Marker>
            )}
          </MapContainer>
        </div>
        <div className="air-quality-display">
          {airQuality ? (
            <AirQualityGauge quality={airQuality} />
          ) : (
            <div className="no-selection">
              <p>Haz click en cualquier parte del mapa para ver los datos de la calidad del aire</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MapSection; 