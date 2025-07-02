import api from './axios';

// Listar produtos com suas categorias (paginado 50 por vez).

export const fetchProducts = (page) => {
    const token = localStorage.getItem('token');
    
    return api.get(`/products/?page=${page}`, {
        headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });

};

// Cadastrar novo produto.
export const createProduct = (data) => {
    const token = localStorage.getItem('token');

    return api.post('/products', data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
          Accept: 'application/json',
        },
      });
}

// Atualizar produto.
export const updateProduct = (id, data) => {
    const token = localStorage.getItem('token');

    return api.post(`/products/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
          Accept: 'application/json',
        },
      });
}

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

export const getProductById = (id) => {
    const token = localStorage.getItem('token');

    return api.get(`/products/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
}