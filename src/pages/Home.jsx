import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero/Hero';
import QuickAccess from '../components/QuickAccess/QuickAccess';
import ServicesCards from '../components/ServicesCards/ServicesCards';
import NewsList from '../components/News/NewsList';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Municipalidad de Juan Bautista Alberdi- Inicio</title>
        <meta name="description" content="Bienvenido al sitio oficial de la Municipalidad. Noticias, trámites y servicios para el vecino." />
      </Helmet>
      <Hero />
      <QuickAccess />
      <ServicesCards />
      <NewsList />
    </motion.div>
  );
};

export default Home;
