import { Link } from "react-router-dom"
import Header from "../components/Header/Header"


export default function Page404() {
    return (
        <>
            <Header/>
            
            <section className="py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center align-items-center flex-column">
                            <h1>404 - Página não encontrada</h1>
                            <h3 className="mt-4">Este conteúdo não existe...</h3>
                            <Link className="mt-4 button" to="/pedidos">Ir para Pedidos</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}   