import styles from '../Orders/orderslist.module.css';

// Vou fazer duas coletaneas de dados de teste para poder estilizar no componente
const orders = [
  {
    id: 2,
    client: {
      name: "Ana Helena Freitas"
    },
    created_at_time: "21:34",
    payament_status: "Pagamento no caixa",
    payament_method: "Pix",
    status: "Sendo preparado",
    total: "R$16,50",
    products: [
      {id: 101, name: "Pão de Queijo", quantity: 2, price: "R$06,00" },
      {id: 102, name: "Halls melancia", quantity: 1, price: "R$02,50" }
    ]
  },
  {
    id: 1,
    client: {
      name: "Thais Sampaio"
    },
    created_at_time: "21:21",
    payament_status: "Pago pelo app",
    payament_method: null, //Não especificado no layout
    status: "Pronto",
    total: "R$16,50",
    products: [
      {id: 201, name: "Coca-cola lata", quantity: 1, price: "R$05,00" },
      {id: 202, name: "Halls melancia", quantity: 1, price: "R$02,50" }
    ]
  }
];
// Fim dos dados de teste  

//Uma função auxiliar para definir a cor da forma de pagamento (Apenas para fins visuais iguais ao layout)
const getPaymentBadgeStyle = (status) => {
  if (status === 'Pagamento no caixa') {
    return styles.badgeYellow;
  }
  if (status === 'Pago pelo app') {
    return styles.badgeGreen;
  }
  return '';
};

export default function Orders () {
  return (
      <section className="container">
          <div className="row">
              <div className="col-12">

                <ul className={styles.orders_area}>
                  {orders.map(order => (
                    <li key={order.id} className={styles.orders_item}>
                      
                      <div className={styles.orders_header}>
                        <h2 className={styles.orders_title}>Pedido #{order.id}</h2>
                        <span className={`${styles.paymentStatusBadge} ${getPaymentBadgeStyle(order.payament_status)}`}>
                          {order.payament_status}
                        </span>
                      </div>

                      <div className={styles.item_area}>
                        <div className={styles.client_info}>
                          <span>Cliente: {order.client.name}</span>
                          <span className={styles.order_time}>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                            {order.created_at_time}
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
                            <strong>Total: {order.total}</strong>
                            {order.payament_method && (
                              <span className={styles.payment_method}>Forma de pagamento: <strong>{order.payament_method}</strong></span>
                            )}
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