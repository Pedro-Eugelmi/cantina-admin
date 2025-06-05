import Header from "../components/Header/Header";
import Title from '../components/Title/Title'
import Filters from '../components/Filters/Filters'
import OrdersList  from "../components/Orders/OrdersList";
import { useState } from "react";


export default function Orders() {
    

    return (
        <>
            <Header/>
            <Title title="Pedidos"/>
            <Filters/>
            <OrdersList/>
        </>
    )
}