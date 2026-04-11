import { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './Layout.module.scss';

const Layout = ({ children, pageClass }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={`${styles.layout} ${pageClass || ''}`}>
      <Header />
      <main className={styles.mainContent}>
        {children}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;