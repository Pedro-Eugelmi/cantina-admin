import api from './axios';

// Listar produtos com suas categorias (paginado 50 por vez).
export const fetchProducts = () => {
    const token = localStorage.getItem('token');
    
    return api.get('/pedido', {
        headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });

  };
// Cadastrar novo produto.
export const createProduct = (data) => api.post('/menu', data);

// Atualizar produto.
export const updateProduct = (id, data) => api.put(`/menu/${id}`, data);

// Deletar produto.
export const deleteProduct = (id) => api.delete(`/menu/${id}`);