import api from './axios';

export const fetchOrders = () => {
    const token = localStorage.getItem('token');
    
    return api.get('/pedido', {
      headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
     }
    });
  };

export const createOrder = (data) => api.post('/pedido', data);
