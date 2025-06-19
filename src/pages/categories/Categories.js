import Header from "../../components/Header/Header";
import Title from "../../components/Title/Title";
import CategoriesList from "../../components/categoriesList/CategoriesList";

export default function Categories() {

    return (
        <>
            <Header/>

            <Title title="Categorias" linkbutton="criar-categoria" nameButton="Criar categoria" />
            
            <CategoriesList/>
        </>
    )
}