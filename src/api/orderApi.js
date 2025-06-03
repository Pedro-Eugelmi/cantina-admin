import api from './axios';

export const fetchOrders = () => api.get('/pedido');

export const createOrder = (data) => api.post('/pedido', data);
