import styles from '../Orders/orderslist.module.css';

export default function Orders({ orders }) {
  console.log(orders);
  return (
      <section className="container">
          <div className="row">
              <div className="col-12">

                <ul className={styles.orders_area}>
                  {orders.map(order => (
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

                          <select className={styles.status_dropdown} defaultValue={order.status}>
                            <option value="Pronto">Pronto</option>
                            <option value="Sendo preparado">Sendo preparado</option>
                            <option value="Aguardando retirada">Aguardando retirada</option>                          
                            <option value="Entregue">Entregue</option>
                          </select>
                        </div>
                      </div>
                
                    </li>  
                  ))}
                </ul>
                  {/*Aqui estou fazendo uma paginação apenas visual por enquanto*/}  
                  <nav className={styles.pagination}>
                    <button className={styles.page_button}>&lt;</button>
                    <button className={`${styles.page_button} ${styles.active}`}>1</button>
                    <button className={styles.page_button}>2</button>
                    <button className={styles.page_button}>3</button>
                    <button className={styles.page_button}>4</button>
                    <button className={styles.page_button}>5</button>
                    <button className={styles.page_button}>&gt;</button>
                  </nav>
              </div>             
          </div>
      </section>
  );
}