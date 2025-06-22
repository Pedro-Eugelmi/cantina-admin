import styles from '../Filters/Filters.module.css';

export default function Filter(props) {

    return (
        <section className="container pt-4">
            <div className="row">
                <div className="col-12">

                    <div className={styles.filters}>
                        
                        <select aria-label="Status do pedido" id="status" name="status">
                            <option hidden value="">Categorias</option>
                            <option value="todos">Todos</option>
                            <option>Salgado</option>
                            <option>Salgadinhos</option>
                            <option>Guloseimas</option>
                            <option>Bebidas</option>
                            <option>Doces</option>
                            <option>Bolachas</option>
                        </select>   
                    </div>        

                </div>
            </div>
        </section>
    )
}