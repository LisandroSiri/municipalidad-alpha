import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import styles from './NotFound.module.scss';

const NotFound = () => {
    const location = useLocation();

    const enConstruccionPaths = [
        '/servicios',
        '/contacto',
        '/turnos',
        '/atencion-al-vecino',
        '/tramites'
    ];


    const isEnConstruccion = enConstruccionPaths.some(ruta => location.pathname.startsWith(ruta));

    return (
        <div className={styles.container}>
            <Helmet>
                <title>{isEnConstruccion ? "Próximamente - Municipalidad" : "Página no encontrada - Municipalidad"}</title>
                <meta name="description" content={isEnConstruccion ? "Esta funcionalidad estará disponible pronto." : "La página que buscas no existe."} />
            </Helmet>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={styles.content}
            >
                {isEnConstruccion ? (
                    <>
                        <h1 className={styles.title}>🚧</h1>
                        <h2 className={styles.subtitle}>En Construcción</h2>
                        <p className={styles.text}>
                            Esta funcionalidad estará disponible próximamente.
                            <br />
                            ¡Seguimos trabajando para mejorar tu experiencia!
                        </p>
                    </>
                ) : (
                    <>
                        <h1 className={styles.title}>404</h1>
                        <h2 className={styles.subtitle}>Página no encontrada</h2>
                        <p className={styles.text}>
                            Lo sentimos, la página que estás buscando no existe o ha sido movida.
                        </p>
                    </>
                )}
                <Link to="/" className={styles.button}>
                    Volver al Inicio
                </Link>
            </motion.div>
        </div>
    );
};

export default NotFound;