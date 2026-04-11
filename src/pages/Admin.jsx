import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import styles from './Admin.module.scss';
import { useState, useEffect } from 'react';
import { LayoutDashboard, FileText, Settings, LogOut, PlusCircle, Trash2, Edit2, Loader2 } from 'lucide-react';
import { getNoticias, createNoticia, deleteNoticia } from '../services/api';

const Admin = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [noticias, setNoticias] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isAdding, setIsAdding] = useState(false);
    const [newNoticia, setNewNoticia] = useState({ title: '', summary: '', date: new Date().toISOString().split('T')[0], image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4' });

    useEffect(() => {
        if (activeTab === 'noticias' || activeTab === 'dashboard') {
            fetchData();
        }
    }, [activeTab]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const data = await getNoticias();
            setNoticias(data);
        } catch (error) {
            console.error("Error fetching admin data:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('¿Estás seguro de eliminar esta noticia?')) {
            try {
                await deleteNoticia(id);
                setNoticias(noticias.filter(n => n.id !== id));
            } catch (error) {
                alert('Error al eliminar');
            }
        }
    };

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            const created = await createNoticia(newNoticia);
            setNoticias([created, ...noticias]);
            setIsAdding(false);
            setNewNoticia({ title: '', summary: '', date: new Date().toISOString().split('T')[0], image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4' });
        } catch (error) {
            alert('Error al crear noticia');
        }
    };

    return (
        <div className={styles.adminPane}>
            <Helmet>
                <title>Panel Administrativo - Municipalidad</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            <aside className={styles.sidebar}>
                <div className={styles.sidebarHeader}>
                    <h2>Administración</h2>
                </div>
                <nav className={styles.sidebarNav}>
                    <button 
                        className={activeTab === 'dashboard' ? styles.active : ''}
                        onClick={() => { setActiveTab('dashboard'); setIsAdding(false); }}
                    >
                        <LayoutDashboard size={20} />
                        <span>Dashboard</span>
                    </button>
                    <button 
                        className={activeTab === 'noticias' ? styles.active : ''}
                        onClick={() => { setActiveTab('noticias'); setIsAdding(false); }}
                    >
                        <FileText size={20} />
                        <span>Noticias</span>
                    </button>
                    <button 
                        className={activeTab === 'settings' ? styles.active : ''}
                        onClick={() => { setActiveTab('settings'); setIsAdding(false); }}
                    >
                        <Settings size={20} />
                        <span>Ajustes</span>
                    </button>
                </nav>
                <div className={styles.sidebarFooter}>
                    <button className={styles.logoutBtn}>
                        <LogOut size={20} />
                        <span>Cerrar Sesión</span>
                    </button>
                </div>
            </aside>
            <main className={styles.main}>
                <header className={styles.mainHeader}>
                    <h1>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
                    {activeTab === 'noticias' && !isAdding && (
                        <button className={styles.addBtn} onClick={() => setIsAdding(true)}>
                            <PlusCircle size={20} />
                            <span>Nueva Noticia</span>
                        </button>
                    )}
                </header>
                <section className={styles.content}>
                    <AnimatePresence mode="wait">
                        {loading ? (
                            <motion.div 
                                className={styles.loader}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <Loader2 className={styles.spin} size={40} />
                                <p>Cargando datos...</p>
                            </motion.div>
                        ) : (
                            <motion.div
                                key={activeTab + (isAdding ? '-form' : '')}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className={styles.tabContent}
                            >
                                {activeTab === 'dashboard' && (
                                    <div className={styles.dashboardStats}>
                                        <div className={styles.statCard}>
                                            <h3>Noticias Publicadas</h3>
                                            <p>{noticias.length}</p>
                                        </div>
                                        <div className={styles.statCard}>
                                            <h3>Última actualización</h3>
                                            <p>{noticias[0]?.date || 'N/A'}</p>
                                        </div>
                                        <div className={styles.statCard}>
                                            <h3>Estado del Sistema</h3>
                                            <p style={{ color: '#48bb78', fontSize: '1.25rem' }}>Operativo</p>
                                        </div>
                                    </div>
                                )}
                                {activeTab === 'noticias' && !isAdding && (
                                    <div className={styles.tableWrapper}>
                                        <table className={styles.table}>
                                            <thead>
                                                <tr>
                                                    <th>Título</th>
                                                    <th>Fecha</th>
                                                    <th>Acciones</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {noticias.map(n => (
                                                    <tr key={n.id}>
                                                        <td>{n.title}</td>
                                                        <td>{n.date}</td>
                                                        <td className={styles.actions}>
                                                            <button className={styles.editBtn} title="Editar"><Edit2 size={16} /></button>
                                                            <button className={styles.delBtn} title="Eliminar" onClick={() => handleDelete(n.id)}><Trash2 size={16} /></button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                                {activeTab === 'noticias' && isAdding && (
                                    <form className={styles.form} onSubmit={handleAdd}>
                                        <div className={styles.formGroup}>
                                            <label>Título</label>
                                            <input 
                                                type="text" 
                                                required 
                                                value={newNoticia.title}
                                                onChange={e => setNewNoticia({...newNoticia, title: e.target.value})}
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label>Resumen</label>
                                            <textarea 
                                                required 
                                                value={newNoticia.summary}
                                                onChange={e => setNewNoticia({...newNoticia, summary: e.target.value})}
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label>Fecha</label>
                                            <input 
                                                type="date" 
                                                required 
                                                value={newNoticia.date}
                                                onChange={e => setNewNoticia({...newNoticia, date: e.target.value})}
                                            />
                                        </div>
                                        <div className={styles.formActions}>
                                            <button type="button" className={styles.cancelBtn} onClick={() => setIsAdding(false)}>Cancelar</button>
                                            <button type="submit" className={styles.submitBtn}>Guardar Noticia</button>
                                        </div>
                                    </form>
                                )}
                                {activeTab === 'settings' && (
                                    <div className={styles.settingsGrid}>
                                        <p>Configuración general del portal web municipal.</p>
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </section>
            </main>
        </div>
    );
};

export default Admin;
