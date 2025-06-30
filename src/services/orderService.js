import {fetchOrders} from "../api/orderApi";

async function GetOrders () {
    const response = await fetchOrders();
    return  response.data.data;
}

export default GetOrders;