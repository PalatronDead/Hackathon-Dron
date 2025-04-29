import React from 'react';
import './App.css';
import MapSection from './components/MapSection';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">SCCI</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#map">Air Quality Map</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Sustainable Climate Control Intelligence</h1>
          <p>Revolucionando el monitoreo de la calidad del aire con drones autosostenibles</p>
          <button className="cta-button">Aprender mas</button>
        </div>
      </section>

      <section id="about" className="about-section">
        <h2>About SCCI</h2>
        <p>SCCI es un proyecto innovador que combina tecnología de drones  con sistemas de monitoreo avanzados de la calidad del aire. Nuestros drones autosostenibles proporcionan datos de calidad del aire en tiempo real en Hermosillo, ayudando a crear un entorno más saludable para todos.</p>
      </section>

      <section id="features" className="features-section">
        <h2>Caracteristicas clave</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Operacion Autonomica</h3>
            <p>Nuestros drones operan de manera independiente, recopilando datos sin la intervención humana.</p>
          </div>
          <div className="feature-card">
            <h3>Autosostenible</h3>
            <p>Alimentados por fuentes de energía renovables, nuestros drones pueden funcionar de forma continua.</p>
          </div>
          <div className="feature-card">
            <h3>Monitoreo en tiempo real</h3>
            <p>Obtenga actualizaciones instantáneas sobre las condiciones de la calidad del aire en la ciudad.</p>
          </div>
        </div>
      </section>

      <MapSection />

      <section id="contact" className="contact-section">
        <h2>Contactanos</h2>
        <form className="contact-form">
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Correo electronico" required />
          <textarea placeholder="Mensaje" required></textarea>
          <button type="submit">Enviar mensaje</button>
        </form>
      </section>

      <footer className="footer">
        <p>&copy; 2024 SCCI. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
