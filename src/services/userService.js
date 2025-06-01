import {registerUser} from "../api/userApi.js";

export async function createUser(userData) {
    // Verifica se está tudo preenchido
    if (!userData.name || !userData.email || !userData.password) {
        throw new Error('Nome, email e senha são obrigatórios.');
    }

    // Verifica se a senha e a confirmação de senha são iguais
    if (userData.password !== userData.password_confirmation) {
        throw new Error('As senhas não coincidem.');
    }

    //  Cria o usuário 
    const response = await registerUser(userData);
    return response.data;

}