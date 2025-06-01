import api from './axios';

export const fetchOrders = () => api.get('/orders');
export const createOrder = (data) => api.post('/orders', data);
