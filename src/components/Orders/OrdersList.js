import { useEffect, useState } from 'react';
import GetOrders from '../../services/orderService';
import styles from '../Orders/orderslist.module.css';

export default function Orders () {
const [orders, setOrders] = useState([]);

// Pega os pedidos
useEffect(() => {
    async function loadOrders() {
      try {
        const data = await GetOrders();
        setOrders(data);
      } catch (err) {
        console.error('Failed to load orders:', err);
      }
    }

    loadOrders();
  }, []);

    return (
        <section className="container">
            <div className="row">
                <div className="col-12">
                    <ul className={styles.orders_area}>
                      {
                      orders?.data ? (
                        orders.data.data.map(order => (
                            <div key={order.id} className={styles.order_item}>
                              <h2 className={styles.order_title} >Pedido ID: #{order.id}</h2>
                              
                              <div className={`${styles.order_content} mt-4`}>    

                                <div className={styles.order_header}>
                                  <h3>Cliente: lorem ipsum</h3>
                                </div>

                                <ul class={styles.product_List}>
                                  <li>Produto teste</li> 
                                  <li>Produto teste</li> 
                                  <li>Produto teste</li> 
                                  <li>Produto teste</li> 
                                  <li>Produto teste</li> 
                                </ul>

                                <div>
                                    <span>Total:</span> 
                                </div>

                              </div>

                            </div>
                            
                          ))
                        ) : (
                          <p>Carregando pedidos...</p>
                        )
                      }
                    </ul>
                </div>
            </div>
        </section>
    );
}