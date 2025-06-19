import Header from "../../../components/Header/Header";

export default function CreateCategory() {

    return (
        <>
            <main>
                <Header/>

                <section className="container py-5">
                    <div className="row">
                        <form className="col-12">
                            <div>
                                <input className="text-input" type="text" placeholder="Nome da categoria" />
                                <button className="button mt-4" type="submit">Criar categoria</button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
)
}