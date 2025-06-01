import api from './axios';

// Listar produtos com suas categorias (paginado 50 por vez).
export const getProducts = () => api.get('/menu');

// Cadastrar novo produto.
export const createProduct = (data) => api.post('/menu', data);

// Atualizar produto.
export const updateProduct = (id, data) => api.put(`/menu/${id}`, data);

// Deletar produto.
export const deleteProduct = (id) => api.delete(`/menu/${id}`);