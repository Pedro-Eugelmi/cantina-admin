import { Link } from 'react-router-dom';
import styles from './userList.module.css';

export default function userList() {

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
                                    <tr>
                                        <td>Usuário 1</td>
                                        
                                        <td className={styles.actions}>
                                            
                                            <Link to="/editar-usuario" className={styles.edit}>
                                                <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="currentColor" viewBox="0 0 24 24" ><path d="m17.71 7.29-3-3a.996.996 0 0 0-1.41 0l-11.01 11A1 1 0 0 0 2 16v3c0 .55.45 1 1 1h3c.27 0 .52-.11.71-.29l11-11a.996.996 0 0 0 0-1.41ZM5.59 18H4v-1.59l7.5-7.5 1.59 1.59zm8.91-8.91L12.91 7.5 14 6.41 15.59 8zM11 18h11v2H11z"></path></svg>                                                
                                            </Link>
                                            
                                            <button to="/editar-usuario" className={styles.deleteButton}>
                                                <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="currentColor" viewBox="0 0 24 24" ><path d="M17 6V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H2v2h2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8h2V6zM9 4h6v2H9zM6 20V8h12v12z"></path><path d="M9 10h2v8H9zM13 10h2v8h-2z"></path></svg>
                                            </button>
                                        
                                        </td>

                                    </tr>

                                    <tr>
                                        <td>Usuário 2</td>
                                        
                                        <td className={styles.actions}>
                                            
                                            <Link to="/editar-usuario" className={styles.edit}>
                                                <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="currentColor" viewBox="0 0 24 24" ><path d="m17.71 7.29-3-3a.996.996 0 0 0-1.41 0l-11.01 11A1 1 0 0 0 2 16v3c0 .55.45 1 1 1h3c.27 0 .52-.11.71-.29l11-11a.996.996 0 0 0 0-1.41ZM5.59 18H4v-1.59l7.5-7.5 1.59 1.59zm8.91-8.91L12.91 7.5 14 6.41 15.59 8zM11 18h11v2H11z"></path></svg>                                                
                                            </Link>
                                            
                                            <button to="/editar-usuario" className={styles.deleteButton}>
                                                <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="currentColor" viewBox="0 0 24 24" ><path d="M17 6V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H2v2h2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8h2V6zM9 4h6v2H9zM6 20V8h12v12z"></path><path d="M9 10h2v8H9zM13 10h2v8h-2z"></path></svg>
                                            </button>
                                        
                                        </td>

                                    </tr>

                                    <tr>
                                        <td>Usuário 3</td>
                                        
                                        <td className={styles.actions}>
                                            
                                            <Link to="/editar-usuario" className={styles.edit}>
                                                <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="currentColor" viewBox="0 0 24 24" ><path d="m17.71 7.29-3-3a.996.996 0 0 0-1.41 0l-11.01 11A1 1 0 0 0 2 16v3c0 .55.45 1 1 1h3c.27 0 .52-.11.71-.29l11-11a.996.996 0 0 0 0-1.41ZM5.59 18H4v-1.59l7.5-7.5 1.59 1.59zm8.91-8.91L12.91 7.5 14 6.41 15.59 8zM11 18h11v2H11z"></path></svg>                                                
                                            </Link>
                                            
                                            <button to="/editar-usuario" className={styles.deleteButton}>
                                                <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="currentColor" viewBox="0 0 24 24" ><path d="M17 6V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H2v2h2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8h2V6zM9 4h6v2H9zM6 20V8h12v12z"></path><path d="M9 10h2v8H9zM13 10h2v8h-2z"></path></svg>
                                            </button>
                                        
                                        </td>

                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}