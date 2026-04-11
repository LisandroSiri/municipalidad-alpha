import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, CalendarHeart, IdCard, MessageSquareWarning, ArrowRight } from 'lucide-react';
import { getServicios } from '../../services/api';
import styles from './ServicesCards.module.scss';
import { Link } from 'react-router-dom';

const iconMap = {
  CreditCard,
  CalendarHeart,
  IdCard,
  MessageSquareWarning,
};

const ServicesCards = () => {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const data = await getServicios();
      setServicios(data);
    };
    fetchServices();
  }, []);

  return (
    <section id="servicios" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Servicios en Línea</h2>
          <p>Realiza tus consultas y pagos de manera rápida y segura.</p>
        </div>

        <div className={styles.grid}>
          {servicios.map((item, index) => {
            const Icon = iconMap[item.icon] || ArrowRight;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <Link to="/servicios" className={styles.card}>
                  <div className={styles.iconCircle}>
                    <Icon size={24} />
                  </div>
                  <div className={styles.content}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div className={styles.arrow}>
                    <ArrowRight size={20} />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;
