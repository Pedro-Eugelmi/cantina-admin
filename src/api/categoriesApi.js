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
export const createCategory = (data) => api.post('/categories', data);