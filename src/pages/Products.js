import Header from "../components/Header/Header"
import Title from "../components/Title/Title"
import FiltersProduct from "../components/FiltersProduct/FiltersProduct"

export default function Products() {
    return (
        <>
            <Header/>
            <Title title="Produtos" linkbutton="./product/CreateProduct.js" nameButton="Adicionar+"/>
            <FiltersProduct/>
            <h1>Página de produtos</h1>
        </>
    )
}