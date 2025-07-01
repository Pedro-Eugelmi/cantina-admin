import api from './axios';

export const fetchOrders = (page) => {
    const token = localStorage.getItem('token');
    return api.get(`/orders/?page=${page}`, {
      headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
     }
    });
  };

export const updateOrderStatus = (id, status) => {
    const token = localStorage.getItem('token');
    return api.patch(`/orders/${id}`, 
    {status},  
    {
      headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
     }
    });
  };
