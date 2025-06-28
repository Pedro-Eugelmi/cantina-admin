import api from './axios';

// Get the categories
export const fetchCategories = () => {

    const token = localStorage.getItem('token');
    
    return api.get('/categories', {
      headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
     }
    });
  };

// Create a category
export const createCategory = (data) => {
  const token = localStorage.getItem('token');

  return api.post('/categories', data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
}

// Remove a category

export const deleteCategory = (id) => {
  // Pega o token
  const token = localStorage.getItem('token');

  // Cria o cabeçalho
  const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
  }

  // Faz a requisição
  return api.delete(`/categories/${id}`, {
      headers: headers
  });
}