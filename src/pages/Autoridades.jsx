import { useState } from 'react';
import './Autoridades.scss';
import { Envelope } from 'react-bootstrap-icons';
import { Helmet } from 'react-helmet-async';
const autoridadesData = [
    {
        secretaria: "Intendencia",
        miembros: [
            {
                id: 1,
                nombre: "Bruno Romano",
                cargo: "INTENDENTE",
                foto: "/fotos/intendente.jpg",
                contacto: "intendente@municipio.gob.ar"
            }
        ]
    },
    {
        secretaria: "Honorable Concejo Deliberante",
        miembros: [
            {
                id: 2,
                nombre: "José Romano",
                cargo: "PRESIDENTE",
                partido: "Partido de los Trabajadores",
                foto: "/fotos/presidente.png",
                contacto: "concejo@municipio.gob.ar"
            },
            {
                id: 3,
                nombre: "Adolfo Diaz Chavero",
                cargo: "VICEPRESIDENTE 1°",
                partido: "Cambia Alberdi",
                foto: "/fotos/cocejal2.jpg",
                contacto: "adiaz@concejo.gob.ar"
            },
            {
                id: 19,
                nombre: "Cintia Melik Matar",
                cargo: "VICEPRESIDENTE 2°",
                partido: "Movimiento de Afirmación Popular",
                foto: "/fotos/concejal4.png",
                contacto: "raguilera@concejo.gob.ar"
            },
            {
                id: 13,
                nombre: "Martina Siri",
                partido: "Cambia Alberdi",
                cargo: "CONCEJAL",
                foto: "/fotos/concejal1.jpg",
                contacto: "msiri@concejo.gob.ar"
            },
            {
                id: 15,
                nombre: "Ramiro Aguilera",
                cargo: "CONCEJAL",
                partido: "Cambia Alberdi",
                foto: "/fotos/concejal3.jpg",
                contacto: "raguilera@concejo.gob.ar"
            },
            {
                id: 16,
                nombre: "Ana Campos",
                cargo: "CONCEJAL",
                partido: "Tucumán en Positivo",
                foto: "/fotos/",
                contacto: "raguilera@concejo.gob.ar"
            },
            {
                id: 17,
                nombre: "José Calderón",
                cargo: "CONCEJAL",
                partido: "P.U.M.A.",
                foto: "/fotos/",
                contacto: "raguilera@concejo.gob.ar"
            },
            {
                id: 18,
                nombre: "Sergio Muray",
                cargo: "CONCEJAL",
                partido: "Justicia y Compromiso",
                foto: "/fotos/",
                contacto: "raguilera@concejo.gob.ar"
            },
            {
                id: 20,
                nombre: "Nancy Cuenca",
                cargo: "CONCEJAL",
                partido: "Nos Une el Cambio",
                foto: "/fotos/",
                contacto: "raguilera@concejo.gob.ar"
            },
            {
                id: 21,
                nombre: "Marcelo Ogas",
                cargo: "CONCEJAL",
                partido: "Proyecto Tucumán",
                foto: "/fotos/",
                contacto: "raguilera@concejo.gob.ar"
            }
        ]
    },
    {
        secretaria: "Secretaría de Gobierno",
        miembros: [
            {
                id: 4,
                nombre: "Darío Correa",
                cargo: "SECRETARIO",
                foto: "/fotos/dario-correa.jpg",
                contacto: "rgobierno@municipio.gob.ar"
            },
            {
                id: 5,
                nombre: "Ana Martínez",
                cargo: "SUBSECRETARIA",
                foto: "/fotos/gobierno-sub.jpg",
                contacto: "amartinez@municipio.gob.ar"
            },
            {
                id: 6,
                nombre: "Lucas Díaz",
                cargo: "DIRECTOR DE ASUNTOS LEGALES",
                foto: "/fotos/gobierno-legal.jpg",
                contacto: "lucas.diaz@municipio.gob.ar"
            }
        ]
    },
    {
        secretaria: "Secretaría de Hacienda",
        miembros: [
            {
                id: 7,
                nombre: "Juan Pablo Luna",
                cargo: "SECRETARIO",
                foto: "/fotos/hacienda-sec.jpg",
                contacto: "jhacienda@municipio.gob.ar"
            },
            {
                id: 8,
                nombre: "Laura Paz",
                cargo: "SUBSECRETARIA",
                foto: "/fotos/hacienda-sub.jpg",
                contacto: "lpaz@hacienda.gob.ar"
            }
        ]
    },
    {
        secretaria: "Secretaría de Obras Públicas",
        miembros: [
            {
                id: 9,
                nombre: "Marcelo Ríos",
                cargo: "SECRETARIO",
                foto: "/fotos/obras-sec.jpg",
                contacto: "mrios@obras.gob.ar"
            },
            {
                id: 10,
                nombre: "Silvia Torres",
                cargo: "SUBSECRETARIA",
                foto: "/fotos/obras-sub.jpg",
                contacto: "storres@obras.gob.ar"
            }
        ]
    },
    {
        secretaria: "Secretaría de Acción Social",
        miembros: [
            {
                id: 11,
                nombre: "Matias Romano",
                cargo: "SECRETARIO",
                foto: "/fotos/social-sec.png",
                contacto: "mromano@social.gob.ar "
            },
            {
                id: 12,
                nombre: "Patricia Luna",
                cargo: "SUBSECRETARIA",
                foto: "/fotos/social-sub.jpg",
                contacto: "pluna@social.gob.ar"
            }
        ]
    }
];

export default function Autoridades() {
    return (

        <div className="autoridades-page">
            <Helmet>
                <title>Autoridades Municipales</title>
                <meta name="description" content="Autoridades Municipales" />
            </Helmet>
            {/* Hero Section con imagen de fondo */}
            <div className="autoridades-hero">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1 className="hero-title">Autoridades Municipales</h1>
                    <p className="hero-subtitle">Gestión 2025-2027</p>
                    <p className="hero-description">
                        Conocé a los representantes que trabajan día a día por el desarrollo de
                        Juan Bautista Alberdi
                    </p>
                </div>
            </div>

            {/* Contenido principal */}
            <div className="autoridades-content">
                <div className="container">
                    {autoridadesData.map((secretaria, idx) => (
                        <div key={idx} className="secretaria-section">
                            <h2 className="secretaria-titulo">{secretaria.secretaria}</h2>
                            <div className="miembros-grid">
                                {secretaria.miembros.map((miembro) => (
                                    <div key={miembro.id} className="miembro-card">
                                        <div className="foto-container">
                                            <img
                                                src={miembro.foto}
                                                alt={miembro.nombre}
                                                className="miembro-foto"
                                                onError={(e) => {
                                                    e.target.src = "/fotos/default.jpg";
                                                }}
                                            />
                                        </div>
                                        <div className="miembro-info">
                                            <h3 className="miembro-nombre">{miembro.nombre}</h3>
                                            <p className="miembro-cargo">{miembro.cargo}</p>
                                            <p className="miembro-partido">{miembro.partido}</p>
                                        </div>
                                        <div className="contacto-overlay">
                                            <div className="contacto-info">
                                                <Envelope size={16} />
                                                <span className="contacto-email">{miembro.contacto}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}