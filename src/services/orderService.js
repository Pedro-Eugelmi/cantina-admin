import {fetchOrders, updateOrderStatus} from "../api/orderApi";

async function GetOrders (page) {
    const response = await fetchOrders(page);
    return  response.data;
}

export default GetOrders;

export async function setOrderStatus (id, status) {
    const response = await updateOrderStatus(id, status);
    return  response.data;
}

