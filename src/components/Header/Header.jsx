import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Building2, ChevronDown } from 'lucide-react';
import styles from './Header.module.scss';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [tramitesOpen, setTramitesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const rutasConFondoFijo = ['/noticias'];
  const isFondoFijo = rutasConFondoFijo.some(ruta => location.pathname.startsWith(ruta));

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);




  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''} ${isFondoFijo ? styles.autoridadesHeader : ''}`}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Link to="/" className={styles.logo}>
            <img src="/fotos/logolaberdi.jpg" alt="Logo" className="logoImg" />
            <div className={styles.logoText}>
              <span className={styles.title}>Municipalidad de</span>
              <span className={styles.title}>Juan Bautista Alberdi</span>
            </div>
          </Link>
        </div>

        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.open : ''}`}>
          <ul className={styles.navList}>

            <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Inicio</Link></li>
            <li className={styles.dropdown}
              onMouseEnter={() => !isMobile && setTramitesOpen(true)}
              onMouseLeave={() => !isMobile && setTramitesOpen(false)}
            >


              <button
                className={styles.dropdownBtn}
                onClick={() => isMobile && setTramitesOpen(!tramitesOpen)}
              >
                Guía de Trámites
                <ChevronDown size={16} className={tramitesOpen ? styles.rotated : ''} />
              </button>
              <ul className={`${styles.dropdownMenu} ${tramitesOpen ? styles.open : ''}`}>
                <li><Link to="/tramites/habitat" onClick={() => setMobileMenuOpen(false)}>Hábitat</Link></li>
                <li><Link to="/tramites/produccion" onClick={() => setMobileMenuOpen(false)}>Producción</Link></li>
                <li><Link to="/tramites/salud" onClick={() => setMobileMenuOpen(false)}>Salud</Link></li>
                <li><Link to="/tramites/cultura" onClick={() => setMobileMenuOpen(false)}>Cultura y Educación</Link></li>
                <li><Link to="/tramites/gobierno" onClick={() => setMobileMenuOpen(false)}>Gobierno</Link></li>
              </ul>
            </li>


            <li><Link to="/servicios" onClick={() => setMobileMenuOpen(false)}>Servicios</Link></li>
            <li><Link to="/noticias" onClick={() => setMobileMenuOpen(false)}>Noticias</Link></li>
            <li><Link to="/contacto" onClick={() => setMobileMenuOpen(false)}>Contacto</Link></li>
            <li><Link to="/autoridades" onClick={() => setMobileMenuOpen(false)}>Autoridades</Link></li>
          </ul>
        </nav>

        <button className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle Menu">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;