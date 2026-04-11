import { useParams, Link } from 'react-router-dom';
import noticiasData from '../data/db.json';
import './NoticiaDetalle.scss';
import { Calendar } from 'lucide-react';

export default function NoticiaDetalle() {
    const { id } = useParams();
    const noticia = noticiasData.noticias.find(n => n.id === parseInt(id));

    if (!noticia) {
        return (
            <div className="not-found">
                <h2>Noticia no encontrada</h2>
                <Link to="/noticias">Volver a noticias</Link>
            </div>
        );
    }

    return (
        <div className="noticia-detalle-page">
            <div className="container">
                <Link to="/noticias" className="volver-btn">← Volver a noticias</Link>

                <div className="detalle-content">
                    <h1>{noticia.title}</h1>
                    <span className="fecha">
                        <Calendar size={14} /> {noticia.date}
                    </span>

                    {/* Renderizar secciones en orden */}
                    {noticia.secciones && noticia.secciones.map((seccion, index) => (
                        <div key={index} className={`seccion seccion-${seccion.tipo}`}>
                            {seccion.tipo === 'texto' && (
                                <div className="texto-contenido">
                                    <p>{seccion.contenido}</p>
                                </div>
                            )}

                            {seccion.tipo === 'imagen' && (
                                <div className="imagen-contenedor">
                                    <img
                                        src={seccion.url}
                                        alt={seccion.alt || noticia.title}
                                    />
                                    {seccion.alt && <span className="pie-foto">{seccion.alt}</span>}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}