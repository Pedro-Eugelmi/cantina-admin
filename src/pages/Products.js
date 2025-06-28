import React, { useEffect, useRef, useState } from "react";
import Header from "../components/Header/Header";
import Title from "../components/Title/Title";
import FiltersProduct from "../components/FiltersProduct/FiltersProduct";
import ProductList from "../components/ProductsList/ProductList";
import { getProducts, deleteProductService } from "../services/productService";
import { Toast } from 'primereact/toast'; // Importação do componente Toast


export default function Products() {
    const toast = useRef(null);

    const [products, setProducts] = useState([]);

    // Pega os pedidos
    useEffect( () => {
        async function loadProducts() {          
            const data = await getProducts();

            setProducts(data);
        }
        
        loadProducts();
    }, []);


    // Função para deletar o produto
    const handleDeleteButton = async (event) => {
        let deleteButtons = document.querySelectorAll(`.product-list-delete-button`);
        console.log(deleteButtons);

        deleteButtons.forEach(button => {
            button.disabled = true;
        });
        
        toast.current.show({
            severity: 'info',
            summary: 'Deletando produto',
            detail: 'O produto está sendo deletado...',
            life: 3000
        });

        let productId = event.currentTarget.getAttribute('data-remove');

        if (productId) {
            // Remove o produto
            let data = await deleteProductService(productId);
            console.log(data);

            if (data.status == 200) {
                toast.current.show({
                    severity: 'success',
                    summary: 'Produto deletado',
                    detail: 'O produto foi deletado com sucesso!',
                    life: 3000
                });

                // Atualiza a lista de produtos
                const productsData = await getProducts();

                setProducts(productsData);
            } else {
                toast.current.show({
                    severity:'error',
                    summary: 'Erro ao deletar produto',
                    detail: 'O produto não foi deletado!',
                    life: 3000
                })
            }
        }

        deleteButtons.forEach(button => {
            button.disabled = false;
        });
    }

    return (
        <>
            <Toast ref={toast} />
            <Header/>
            <Title title="Produtos" linkbutton="/criar-produto" nameButton="Adicionar +"/>
            <FiltersProduct/>
            <ProductList handleDeleteButton={handleDeleteButton} products={products}/>
        </>
    )
}