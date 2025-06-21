    import api from './axios';

    // Cadastrar um novo usuário    
    export const registerUser = (data) => api.post('/register', data);

    // Fazer login do usuário
    export const loginUser = (data) => api.post('/login', data);

    // Fazer logout do usuário
    export const logoutUser = () => api.post('/logout');