import { Link } from 'react-router-dom';
import styles from './categories.module.css';

export default function CategoriesList({categories, handleRemove}) {

    return (
        <>
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>
                                            Nome
                                        </th>
                                        
                                        <th>
                                            Ações
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    categories.data ? (
                                    categories.data.map(category => (
                    

                                        <tr key={category.id}>
                                            <td>{category.name}</td>
                                            
                                            <td className={styles.actions}>
                                    
                                                
                                                <button onClick={handleRemove} data-remove={category.id} className={styles.deleteButton}><svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="currentColor" viewBox="0 0 24 24" ><path d="M17 6V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H2v2h2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8h2V6zM9 4h6v2H9zM6 20V8h12v12z"></path><path d="M9 10h2v8H9zM13 10h2v8h-2z"></path></svg></button>
                                            
                                            </td>

                                        </tr>
                                        
                                        ))
                                    ) : (
                                       <tr>
                                         <td>
                                            <p>Carregando Categorias...</p>
                                         </td>
                                         <td></td>
                                       </tr>
                                    )
                                }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}