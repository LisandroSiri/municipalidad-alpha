import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Map, Landmark, Users } from 'lucide-react';
import styles from './QuickAccess.module.scss';

const accesses = [
  { id: 1, title: 'Trámites Online', icon: FileText, desc: 'Inicia tus gestiones sin moverte', link: "/tramites" },
  { id: 2, title: 'Turismo', icon: Map, desc: 'Conocé Alberdi', link: "/turismo" },
  { id: 3, title: 'Transparencia', icon: Landmark, desc: 'Gestión de gobierno abierta', link: "/transparencia" },
  { id: 4, title: 'Atención al Vecino', icon: Users, desc: 'Tus consultas y reclamos', link: "/atencion-al-vecino" },
  { id: 5, title: 'Autoridades', icon: Users, desc: 'Conoce a las autoridades', link: "/autoridades" },
];

const QuickAccess = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {accesses.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link to={item.link} className={styles.card}>
                  <div className={styles.iconWrapper}>
                    <Icon size={28} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickAccess;
