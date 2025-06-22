import React from "react";
import style from "./sidebar.module.css"
import { Link, useNavigate } from "react-router-dom";
import { logoutUserService } from "../../services/userService";

const Sidebar = ({isOpen, toggleSidebar}) => {

    const navigate = useNavigate();

    const handleLogoutClick = () => {
        
        // Faz o logout
        logoutUserService();
        
        // Remove o token do localStorage
        localStorage.removeItem('token');
        
        // Redireciona para a página de login
        navigate('/?action=logout');
    };

    return(
        <div className={`p-4 ${style.sidebar} ${isOpen ? style.open : ''}`}>
            <button onClick={toggleSidebar} className={style.closeBtn}>
                <svg height="30px" width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#FFF" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>            </button>

            <nav className="mt-4">
                <ul className={style.list}>
                    <li><Link to="/pedidos">Pedidos</Link></li>
                    <li><Link to="/produtos">Produtos</Link></li>
                    <li><Link to="/categorias">Categorias</Link></li>
                    <li><Link to="/usuarios">Usuários</Link></li>
                    <li><Link to="/configuracoes">Configurações</Link></li>
                    <li className={style.logout}>
                        <button onClick={handleLogoutClick} className="d-flex gap-2 just align-items-center">
                            <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#C91518" d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg>
                            Sair
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar;