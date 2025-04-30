import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import ParticleList from './ParticleList';
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
  const [selectedParticle, setSelectedParticle] = useState(null);

  const handleMapClick = (latlng) => {
    setSelectedLocation(latlng);
    setSelectedParticle(null);
  };

  const handleParticleSelect = (particle, value, quality) => {
    setSelectedParticle({ name: particle, value, quality });
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
                  {selectedParticle ? (
                    <>
                      {selectedParticle.name}: {selectedParticle.value}
                      <br />
                      Calidad: {selectedParticle.quality}
                    </>
                  ) : (
                    'Selecciona una partícula para ver su valor'
                  )}
                </Popup>
              </Marker>
            )}
          </MapContainer>
        </div>
        <ParticleList 
          selectedLocation={selectedLocation}
          onParticleSelect={handleParticleSelect}
        />
      </div>
    </section>
  );
};

export default MapSection; 