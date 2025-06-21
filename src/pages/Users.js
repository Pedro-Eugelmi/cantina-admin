import Header from "../components/Header/Header";
import Title from "../components/Title/Title";
import UserList from "../components/userList/UserList";

export default function Users() {
    return (
        <>
            <Header/>
            <Title title="Usuários" linkbutton="criar-usuario" nameButton="Criar usuário" />
            <UserList/>
        </>
    )
}