import Header from "../components/Header/Header";
import Title from '../components/Title/Title'
import Filters from '../components/Filters/Filters'
import OrdersList  from "../components/Orders/OrdersList";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Toast } from 'primereact/toast';
import GetOrders, { setOrderStatus } from "../services/orderService";
import Pagination from "../components/pagination/Pagination";

export default function Orders() {
    const toast = useRef(null);
    const hasShown = useRef(false);

    const [searchParams] = useSearchParams();
    const login = searchParams.get('login');
    const [status, setStatus] = useState("");
    const [orders, setOrders] = useState([]);

    // Pega os pedidos
    useEffect(() => {        
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
     
      async function loadOrders() {          
        const data = await GetOrders(1);
        setOrders(data);
        }


    const handleChangeStatus = async (e) => {
        const status = e.target.value;
        const orderId = e.target.dataset.id;

        // console.log(status)
        // console.log(orderId)

        // Atualiza o status
        const data = await setOrderStatus(orderId,status);
        console.log(data);
        // Atualiza os pedidos
        loadOrders();
    }

    let handlePaginationClick = async (e) => {
        let number = e.target.value;
        
        let data = await GetOrders(number);
        setOrders(data);
    }

    return (
        <>
            <Toast ref={toast} />
            <Header/>
            <Title title="Pedidos"/>
            <Filters/>
            <OrdersList handleChangeStatus={handleChangeStatus} orders={orders}/>
            <Pagination handlePaginationClick={handlePaginationClick} current={orders.current_page} total={orders.last_page}/>
        </>
    )
}