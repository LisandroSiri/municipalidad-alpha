import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { getNoticias } from '../../services/api';
import styles from './NewsList.module.scss';
import { Link } from 'react-router-dom';

const NewsList = () => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNoticias = async () => {
      const data = await getNoticias();
      setNoticias(data);
      setLoading(false);
    };
    fetchNoticias();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Cargando noticias...</div>;
  }

  return (
    <section id="noticias" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Noticias Municipales</h2>
          <Link to="/noticias" className={styles.viewAll}>
            Ver todas <ArrowRight size={18} />
          </Link>
        </div>

        <div className={styles.grid}>
          {noticias.map((item, index) => (
            <motion.article
              key={item.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className={styles.imageWrapper}>
                <img src={item.image} alt={item.title} />
              </div>
              <div className={styles.content}>
                <div className={styles.meta}>
                  <Calendar size={14} />
                  <span>{new Date(item.date).toLocaleDateString('es-AR')}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <Link to={`/noticias/${item.id}`} className={styles.readMore}>Leer más</Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsList;
