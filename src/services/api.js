import axios from 'axios';
import localData from '../data/db.json';

const api = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// News services
export const getNoticias = async () => {
    try {
        const response = await api.get('/noticias');
        return response.data;
    } catch (error) {
        console.warn("Backend down. Falling back to local news.", error);
        return localData.noticias;
    }
};

export const createNoticia = async (noticia) => {
    const response = await api.post('/noticias', noticia);
    return response.data;
};

export const updateNoticia = async (id, noticia) => {
    const response = await api.put(`/noticias/${id}`, noticia);
    return response.data;
};

export const deleteNoticia = async (id) => {
    const response = await api.delete(`/noticias/${id}`);
    return response.data;
};

// Services
export const getServicios = async () => {
    try {
        const response = await api.get('/servicios');
        return response.data;
    } catch (error) {
        console.warn("Backend down. Falling back to local services.");
        return localData.servicios;
    }
};

export default api;

