    import api from './axios';

    // Cadastrar um novo usuário    
    export const registerUser = (data) => api.post('/register', data);

    // Fazer login do usuário
    export const loginUser = (data) => api.post('/login', data);

    // Fazer logout do usuário
    export function logoutUser() {
        // Pega o token de acesso do localStorage
        const token = localStorage.getItem('token');
    
        const headers = {
            'Content-Type': 'application/json'
        };

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        // Faz logout do usuário
        return api.post('/logout', {}, {
            headers: headers
        });

    }