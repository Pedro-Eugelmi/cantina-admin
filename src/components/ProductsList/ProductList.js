import styles from "./productList.module.css";
import getProducts from '../../services/productService';
import { useEffect, useState } from "react";

export default function ProductList() {

    const [products, setProducts] = useState([]);

    // Pega os pedidos
    useEffect(() => {
        async function loadProducts() { 

            try {
         
                const data = await getProducts();

                setProducts(data);

            } catch (err) {
            
                console.error('Failed to load orders:', err);
            
            }
        }
        
        loadProducts();
    }, []);

    return (
        <>
            <section className="container">
                <div className="row">
                    <div className="col-12">

                        <div className="">
                        {
                             products?.data ? console.log(products.data.data) : console.log("Não tem pedidos")
                        }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}   