import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import ScrollToTop from './components/Srcoll/ScrollToTop';
// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Admin = lazy(() => import('./pages/Admin'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Autoridades = lazy(() => import('./pages/Autoridades'));
const Noticias = lazy(() => import('./pages/Noticias'));
const NoticiaDetalle = lazy(() => import('./pages/NoticiaDetalle'));
const Turismo = lazy(() => import('./pages/Turismo'));

const Loading = () => (
  <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f7fafc' }}>
    <p>Cargando...</p>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* Public Routes with standard Layout */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/Autoridades" element={<Layout pageClass="autoridades-page"><Autoridades /></Layout>} />
          <Route path="/noticias" element={<Layout><Noticias /></Layout>} />
          <Route path="/noticias/:id" element={<Layout><NoticiaDetalle /></Layout>} />
          <Route path="/turismo" element={<Layout><Turismo /></Layout>} />
          {/* Admin Routes - without standard Header/Footer */}
          <Route path="/admin" element={<Admin />} />

          {/* Catch-all 404 - No Layout or custom layout */}
          <Route path="*" element={<NotFound />} />


        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
