import Header from "../components/Header/Header"
import Title from "../components/Title/Title"
import FiltersProduct from "../components/FiltersProduct/FiltersProduct"
import ProductList  from "../components/ProductsList/ProductList"
    
export default function Products() {
    return (
        <>
            <Header/>
            <Title title="Produtos" linkbutton="./product/CreateProduct.js" nameButton="Adicionar+"/>
            <FiltersProduct/>
            <ProductList/>
        </>
    )
}