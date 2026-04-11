import { Building2, MapPin, Phone, Mail } from 'lucide-react';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.logo}>
            <img src="/public/logolaberdi.jpg" alt="Logo" className="logoImg" />pw
            <div>
              <span className={styles.title}>Municipalidad</span>
              <span className={styles.subtitle}>Juan Bautista Alberdi, Tucumán</span>
            </div>
          </div>
          <p className={styles.description}>
            Trabajando juntos para una ciudad más ordenada, segura y moderna.
          </p>
        </div>

        <div className={styles.links}>
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/servicios">Trámites y Servicios</Link></li>
            <li><Link to="/noticias">Noticias</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>

        <div className={styles.contact}>
          <h3>Contacto</h3>
          <ul>
            <li><Link to="https://maps.app.goo.gl/V4xYgfPCeY4BMhE4A"><MapPin size={20} /> Lidoro Quinteros, Juan Bautista Alberdi, Tucumán</Link></li>
            <li><Phone size={20} /> (03865) 421-234</li>
            <li><Mail size={20} /> info@alberdi.gob.ar</li>
          </ul>
        </div>
      </div>
      <div className={styles.copy}>
        <p>&copy; {new Date().getFullYear()} Municipalidad de Juan Bautista Alberdi. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
