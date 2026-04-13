import './Turismo.scss';
import { MapPin, Clock, Mail } from 'lucide-react';

const lugaresData = [
    {
        id: 1,
        nombre: "Dique Escaba",
        ubicacion: "Escaba, Tucumán",
        descripcion: "El Dique Escaba, ubicado en el sur de la provincia de Tucumán, Argentina, es un importante embalse hidroeléctrico y atractivo turístico natural, conocido por estar inmerso en las yungas tucumanas y albergar la colonia de murciélagos más grande de Sudamérica en su vertedero.",
        imagen: "/fotos/diqueescaba.jpg",
        horario: "Abierto 24 horas",
        contacto: "turismo@municipio.gob.ar"
    },
    {
        id: 2,
        nombre: "Museo Histórico Municipal",
        ubicacion: "Calle San Martín 456",
        descripcion: "Conserva la historia y el patrimonio cultural de Juan Bautista Alberdi, con exposiciones permanentes y temporales.",
        imagen: "/fotos/museo.jpg",
        horario: "Martes a Domingo de 9 a 18 hs",
        contacto: "museo@municipio.gob.ar"
    }

];

export default function Turismo() {
    return (
        <div className="turismo-page">
            {/* Hero Section */}
            <div className="turismo-hero">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">Turismo</h1>
                    <p className="hero-subtitle">Descubrí Juan Bautista Alberdi</p>
                    <p className="hero-description">
                        Lugares imperdibles, naturaleza, historia y cultura para que disfrutes tu visita
                    </p>
                </div>
            </div>

            {/* Contenido principal */}
            <div className="turismo-content">
                <div className="container">
                    <h2 className="section-title">Lugares para visitar</h2>
                    <p className="section-subtitle">Conocé los principales atractivos de nuestra ciudad</p>

                    <div className="lugares-grid">
                        {lugaresData.map((lugar) => (
                            <div key={lugar.id} className="lugar-card">
                                <div className="imagen-container">
                                    <img
                                        src={lugar.imagen}
                                        alt={lugar.nombre}
                                        className="lugar-imagen"
                                        onError={(e) => {
                                            e.target.src = "https://via.placeholder.com/400x250/005bb5/white?text=Sin+Imagen";
                                        }}
                                    />
                                </div>
                                <div className="lugar-info">
                                    <h3 className="lugar-nombre">{lugar.nombre}</h3>
                                    <p className="lugar-ubicacion">
                                        <MapPin size={20} /> {lugar.ubicacion}
                                    </p>
                                    <p className="lugar-descripcion">{lugar.descripcion}</p>
                                    <div className="lugar-detalles">
                                        <span className="detalle"><Clock size={20} /> {lugar.horario}</span>
                                        <span className="detalle"><Mail size={20} /> {lugar.contacto}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}