import styles from '../Filters/Filters.module.css';

export default function Filter() {

    return (
        <section className="container pt-4">
            <div className="row">
                <div className="col-12">

                    <div className={styles.filters}>
                        
                        {/* <select aria-label="Status do pedido" id="status" name="status">
                            <option hidden value="">Status</option>
                            <option value="todos">Todos</option>
                            <option value="open">Aberto</option>
                            <option value="await_payment">Aguardando pagamento</option>
                            <option value="approved">Aprovado</option>
                            <option value="in_preparation">Sendo preparado</option>
                            <option value="canceled">Cancelado</option>
                            <option value="ready">Pronto</option>
                        </select> */}

                        {/* <select aria-label="Tipo de pagamento" id="payment" name="payment">
                            <option hidden value="">Tipo de pagamento</option>
                            <option value="todos">Todos</option>
                            <option>Cartão de crédito</option>
                            <option>Cartão de débito</option>
                            <option>Dinheiro</option>
                            <option>PIX</option>
                        </select>     */}

                    </div>        

                </div>
            </div>
        </section>
    )
}