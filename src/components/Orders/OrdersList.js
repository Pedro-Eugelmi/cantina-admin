import styles from '../Orders/orderslist.module.css';

export default function Orders({ orders, handleChangeStatus }) {
  
  return (
      <section className="container">
          <div className="row">
              <div className="col-12">

                <ul className={styles.orders_area}>
                  {orders.data && orders.data.map(order => (
                    <li key={order.id} className={styles.orders_item}>
                      
                      <div className={styles.orders_header}>
                        <h2 className={styles.orders_title}>Pedido #{order.id}</h2>
                      </div>

                      <div className={styles.item_area}>
                        <div className={styles.client_info}>
                          <span>Cliente: {order.user.name}</span>
                          <span className={styles.order_time}>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                            {order.created_at}
                          </span>
                        </div>

                        <ul className={styles.products_list}>
                          {order.products.map(product => (
                            <li key={product.id} className={styles.product_item}>
                              <span>{product.name}</span>
                              <span className={styles.product_quantity}>x{product.quantity}</span>
                              <span>{product.price}</span>
                            </li> 
                          ))}
                        </ul>

                        <div className={styles.order_footer}> 
                          <div className={styles.total_section}>
                            <strong>Total: {order.total_value}</strong>
                          </div>

                          <select data-id={order.id} onChange={handleChangeStatus} className={`${styles.status_dropdown} order-status`} value={order.status}>
                            <option value="open">Aberto</option>
                            <option value="awaiting_payment">Aguardando pagamento</option>
                            <option value="approved">Aprovado</option>
                            <option value="in_preparation">Sendo preparado</option>
                            <option value="canceled">Cancelado</option>
                            <option value="ready">Pronto</option>
                          </select>
                        </div>
                      </div>
                
                    </li>  
                  ))}
                </ul>
              </div>             
          </div>
      </section>
  );
}