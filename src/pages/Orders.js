import Header from "../components/Header/Header";
import Title from '../components/Title/Title'
import Filters from '../components/Filters/Filters'
import OrdersList  from "../components/Orders/OrdersList";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Toast } from 'primereact/toast';
import GetOrders from "../services/orderService";

export default function Orders() {
    const toast = useRef(null);
    const hasShown = useRef(false);

    const [searchParams] = useSearchParams();
    const login = searchParams.get('login');

    const [orders, setOrders] = useState([]);

        // Pega os pedidos
        useEffect(() => {
            async function loadOrders() {          
                const data = await GetOrders();
                console.log(data);
                setOrders(data);
            }
            
            loadOrders();
        }, []);

    useEffect(() => {
        
        if (login && login == "success" && !hasShown.current) {
            toast.current.show({
              severity: 'success',
              summary: 'Bem-vindo de volta!',
              detail: 'Login realizado com sucesso!',
              life: 3000
            });

            hasShown.current = true;
        }

      }, [login]);

    return (
        <>
            <Toast ref={toast} />
            <Header/>
            <Title title="Pedidos"/>
            <Filters/>
            <OrdersList orders={orders}/>
        </>
    )
}