import api from './axios';

// Listar produtos com suas categorias (paginado 50 por vez).

export const fetchProducts = () => {
    const token = localStorage.getItem('token');
    
    return api.get('/products', {
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
export const deleteProduct = (id) => {
    // Pega o token
    const token = localStorage.getItem('token');

    // Cria o cabeçalho
    const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    }

    // Faz a requisição
    return api.delete(`/products/${id}`, {
        headers: headers
    });
}