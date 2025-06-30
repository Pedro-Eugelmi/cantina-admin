import api from './axios';

export const fetchOrders = () => {
    const token = localStorage.getItem('token');
    return api.get('/orders', {
      headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
     }
    });
  };

