import './Turismo.scss';

const lugaresData = [
    {
        id: 1,
        nombre: "Plaza Principal 25 de Mayo",
        ubicacion: "Centro de la ciudad",
        descripcion: "El corazón de la ciudad, rodeada de árboles centenarios y edificios históricos. Ideal para disfrutar de tardes tranquilas y eventos culturales.",
        imagen: "/fotos/plaza.jpg",
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
    },
    {
        id: 3,
        nombre: "Parque Natural Los Ceibos",
        ubicacion: "Ruta Provincial 302, km 5",
        descripcion: "Espacio verde con senderos, laguna, zona de picnic y gran variedad de flora y fauna autóctona.",
        imagen: "/fotos/parque.jpg",
        horario: "Lunes a Domingo de 8 a 20 hs",
        contacto: "parque@municipio.gob.ar"
    },
    {
        id: 4,
        nombre: "Iglesia Nuestra Señora del Rosario",
        ubicacion: "Belgrano 789",
        descripcion: "Construcción del siglo XIX con arquitectura colonial, uno de los puntos más emblemáticos de la ciudad.",
        imagen: "/fotos/iglesia.jpg",
        horario: "Lunes a Domingo de 8 a 19 hs",
        contacto: "iglesia@municipio.gob.ar"
    },
    {
        id: 5,
        nombre: "Feria Artesanal",
        ubicacion: "Paseo del Sol, Av. Libertad",
        descripcion: "Encuentro de artesanos locales donde podés encontrar productos regionales, artesanías y comidas típicas.",
        imagen: "/fotos/feria.jpg",
        horario: "Sábados y Domingos de 10 a 20 hs",
        contacto: "feria@municipio.gob.ar"
    },
    {
        id: 6,
        nombre: "Balneario Municipal El Dique",
        ubicacion: "Acceso Sur, km 8",
        descripcion: "Espacio con playas de arena, quinchos, parrillas y zonas de recreación para toda la familia.",
        imagen: "/fotos/balneario.jpg",
        horario: "Temporada: Noviembre a Marzo, 9 a 19 hs",
        contacto: "balneario@municipio.gob.ar"
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
                                        📍 {lugar.ubicacion}
                                    </p>
                                    <p className="lugar-descripcion">{lugar.descripcion}</p>
                                    <div className="lugar-detalles">
                                        <span className="detalle">🕒 {lugar.horario}</span>
                                        <span className="detalle">📧 {lugar.contacto}</span>
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