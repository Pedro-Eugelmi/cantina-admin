import { useNavigate, useSearchParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import ProductForm from "../../components/productForm/ProductForm";
import Title from "../../components/Title/Title";
import { getProductByIdService } from "../../services/productService";
import { Toast } from 'primereact/toast';
import { useEffect, useRef, useState } from "react";

export default function UpdateProduct()  {
    const toast = useRef(null);

    const [params] = useSearchParams();
    const navigate = useNavigate(); 
    let id = null;
    // Verificar se o ID existe
    if (params.get('id')) {
        id = params.get('id');
    } else {
        navigate('/nao-encontrado');
    }

    // Buscar produto pelo ID
     

    useEffect(() => {
        if (toast.current) {
            toast.current.show({
                severity: 'info',
                summary: 'Bucando produto',
                detail: 'Por favor, aguarde...',
                life: 3000
            });
        }

        const getProductById = async (id) => {

            let productData = await getProductByIdService(id);
            setProduct(productData);
            
            if (productData === -1) {
                navigate('/nao-encontrado');
            }
        }

        getProductById(id);
    }, [toast, id]);

    let [product, setProduct] = useState(null);

    return (
        <>
            <Toast ref={toast}/>
            <Header/>

            <Title title="Criar produto"/>

            <ProductForm product={product} action="update"/>
        </>
    )
}