import styles from "./productList.module.css";
import {getProducts, deleteProductService} from '../../services/productService';
import { useEffect, useState } from "react";

export default function ProductList() {
    // Função para deletar o produto
    const handleDeleteButton = async (event) => {
        
        let productId = event.currentTarget.getAttribute('data-remove');

        if (productId) {
            // Remove o produto
            let data = await deleteProductService(productId);

            // Atualiza a lista de produtos
            const productsData = await getProducts();

            setProducts(productsData);
        }
    }

    const [products, setProducts] = useState([]);

    // Pega os pedidos
    useEffect(() => {
        async function loadProducts() {          
            const data = await getProducts();

            console.log(data);
            setProducts(data);
        }
        
        loadProducts();
    }, []);

    return (
        <>
            <section className="container">
                <div className="row">
                    <div className="col-12">

                    <table className={`${styles.table}`}>
                                <thead>
                                    <tr>

                                        <th>
                                            ID
                                        </th>
                                        
                                        <th>
                                            Nome
                                        </th>

                                        <th>
                                            Categoria
                                        </th>


                                        <th>
                                            Estoque
                                        </th>

                                        <th>
                                            Preço
                                        </th>

                                        <th>
                                            Ações
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    products?.data ? (
                                    products.data.data.map(product => (
                    

                                        <tr key={product.id}>

                                            <td>#{product.id}</td>

                                            <td>{product.name}</td>
                                            
                                            <td>{(product.category)? product.category : 'Sem categoria'}</td>

                                            <td>{(product.quantity && product.quantity >= 1)? product.quantity : 'Fora de estoque'}</td>

                                            <td>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}</td>


                                            <td className={styles.actions}>
                                                
                                                <button className={styles.actionsDelete}>
                                                    <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="currentColor" viewBox="0 0 24 24" ><path d="m17.71 7.29-3-3a.996.996 0 0 0-1.41 0l-11.01 11A1 1 0 0 0 2 16v3c0 .55.45 1 1 1h3c.27 0 .52-.11.71-.29l11-11a.996.996 0 0 0 0-1.41ZM5.59 18H4v-1.59l7.5-7.5 1.59 1.59zm8.91-8.91L12.91 7.5 14 6.41 15.59 8zM11 18h11v2H11z"></path></svg>                                                
                                                </button>
                                                
                                                <button data-remove={product.id} onClick={handleDeleteButton} className={styles.deleteButton}><svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="currentColor" viewBox="0 0 24 24" ><path d="M17 6V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H2v2h2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8h2V6zM9 4h6v2H9zM6 20V8h12v12z"></path><path d="M9 10h2v8H9zM13 10h2v8h-2z"></path></svg></button>
                                            
                                            </td>

                                        </tr>
                                        
                                        ))
                                    ) : (
                                       <tr>
                                         <td>
                                            <p>Carregando Produtos...</p>
                                         </td>

                                         <td></td>
                                         <td></td>
                                         <td></td>
                                         <td></td>
                                         <td></td>
                                       </tr>
                                    )
                                }

                                </tbody>
                            </table>

                    </div>
                </div>
            </section>
        </>
    )
}   