import {registerUser, loginUser} from "../api/userApi.js";

export async function createUserService(userData) {
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

export async function loginUserService(userData) {

    // Verifica se o email e a senha estão preenchidos
    if (userData.email && userData.password) {
        // Faz a requisição de login
        const response = await loginUser(userData);

        // Verifica se a resposta contém um token
        if (response.data.token) {
            // Armazena o token no localStorage
            alert(response.data.token);
            console.log(response.data.token);
            localStorage.setItem('token', response.data.token);
        }

        return response.data;

    } else {
        throw new Error('Email e senha são obrigatórios.');
    }

}