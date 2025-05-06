import React from 'react';
import './App.css';
import MapSection from './components/MapSection';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

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
          <a href="https://www.facebook.com/share/18xZgZKyTR/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/somos_ziic?igsh=ZHBscmpvMXhpcmw%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram />
          </a>
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
        <div className="footer-content">
          <div className="footer-grid">
            <div className="footer-about">
              <h3>ZIIC</h3>
              <p>Proyecto innovador de monitoreo ambiental que combina tecnología de drones con sistemas avanzados para evaluar la calidad del aire en tiempo real en Hermosillo.</p>
            </div>
            
            <div className="footer-links">
              <h4>Navegación Rápida</h4>
              <ul>
                <li><a href="#about">Acerca de nosotros</a></li>
                <li><a href="#features">Características</a></li>
                <li><a href="#map">Mapa de calidad del aire</a></li>
                <li><a href="#contact">Contáctanos</a></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h4>Contacto</h4>
              <p><a href="mailto:contactoziic@gmail.com">contactoziic@gmail.com</a></p>
              <div className="footer-social">
                <p className="follow-text">¡Síguenos!</p>
                <div className="social-icons">
                  <a href="https://www.facebook.com/share/18xZgZKyTR/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                  </a>
                  <a href="https://www.instagram.com/somos_ziic?igsh=ZHBscmpvMXhpcmw%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">&copy; 2025 ZIIC. Todos los derechos reservados.</p>
            <p className="footer-legal">
              <a href="#privacy">Política de Privacidad</a> | 
              <a href="#terms"> Términos y Condiciones</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
