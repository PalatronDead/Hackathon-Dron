import React from 'react';
import './App.css';
import MapSection from './components/MapSection';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">ZIIC</div>
        <div className="nav-links">
          <a href="#about">Acerca de nosotros</a>
          <a href="#features">Caracteristicas</a>
          <a href="#map">Mapa de calidad del aire</a>
          <a href="#contact">Contactanos</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>ZIIC</h1>
          <p>Revolucionando el monitoreo de la calidad del aire con drones autosostenibles</p>
          <button className="cta-button">Aprender mas</button>
        </div>
      </section>

      <section id="about" className="about-section">
        <h2>Acerca de nosotros</h2>
        <p>ZIIC es un proyecto innovador que combina tecnología de drones con sistemas avanzados de monitoreo ambiental, diseñado específicamente para evaluar la calidad del aire en tiempo real. Equipados con múltiples sensores ambientales de alta precisión y alimentados por energía solar, nuestros drones operan de forma autosustentable, sin depender de fuentes externas de energía. Gracias a su gran movilidad y diseño inteligente, los drones de ZIIC pueden cubrir amplias zonas de Hermosillo, garantizando una cobertura eficiente y continua. Esta capacidad de desplazamiento estratégico, junto con su autonomía energética, permite un monitoreo constante y confiable, con el objetivo de generar datos clave para promover un entorno urbano más saludable y consciente del impacto ambiental.</p>
      </section>

      <section id="features" className="features-section">
        <h2>Caracteristicas clave</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Sensores Ambientales</h3>
            <p>Contiene multiples sensores ambientales y funciona con energia solar</p>
          </div>
          <div className="feature-card">
            <h3>Gran Movilidad</h3>
            <p>Tiene gran movilidad lo que significa gran cobertura</p>
          </div>
          <div className="feature-card">
            <h3>Autosustentabilidad</h3>
            <p>Autosustentabilidad energética y movilidad inteligente</p>
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
        <p>&copy; 2025 ZIIC. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
