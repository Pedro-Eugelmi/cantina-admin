import api from './axios';

// Listar horários de funcionamento

export const fetchOpeningHours = () => {
    const token = localStorage.getItem('token');
    
    return api.get(`/opening-hours`, {
        headers: { 
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });

};

export const createOpeningHours = (data) => {
    const token = localStorage.getItem('token');

    return api.post(`/opening-hours`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type':'application/json',
          Accept: 'application/json',
        },
      });
};

// Deletar produto.
export const deleteOpeningHours = (id) => {
    // Pega o token
    const token = localStorage.getItem('token');

    // Cria o cabeçalho
    const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    }

    // Faz a requisição
    return api.delete(`/opening-hours/${id}`, {
        headers: headers
    });
}