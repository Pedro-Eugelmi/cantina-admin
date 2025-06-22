import Header from '../../components/Header/Header'
import ProductForm from '../../components/productForm/ProductForm'
import Title from '../../components/Title/Title'

export default function CreateProduct()  {
    return (
        <>
            <Header/>

            <Title title="Criar produto"/>

            <ProductForm/>
        </>
    )
}