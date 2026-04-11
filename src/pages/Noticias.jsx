import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import noticiasData from '../data/db.json';
import './Noticias.scss';

export default function Noticias() {
    const noticias = noticiasData.noticias;

    return (
        <div className="noticias-page">
            <div className="container">
                <h1 className="page-title">Noticias</h1>
                <p className="page-subtitle">Últimas novedades de la Municipalidad</p>

                <div className="noticias-grid">
                    {noticias.map((noticia) => (
                        <Link to={`/noticias/${noticia.id}`} key={noticia.id} className="noticia-card">
                            <div className="imagen-container">
                                <img src={noticia.image} alt={noticia.title} />
                            </div>
                            <div className="noticia-info">
                                <span className="fecha"><Calendar size={14} />  {noticia.date}</span>
                                <h3>{noticia.title}</h3>
                                <p>{noticia.summary}</p>
                                <span className="leer-mas">Leer más →</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}