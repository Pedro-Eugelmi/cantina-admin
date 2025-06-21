import style from "./userForm.module.css";

export default function UserForm() {
    return (
        <>
            <section className="pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <form method="post" className={style.form}>
                                <div className="col-12 col-md-8 mx-auto">
                                    <div>
                                        <label htmlFor="nome">Nome</label>
                                        <input className={`mt-2`} name="nome" id="nome" placeholder="Nome do usuário"/>
                                    </div>

                                    <div className="mt-4">
                                        <label htmlFor="email">E-mail</label>
                                        <input className={`mt-2`} name="email" id="email" placeholder="E-mail do usuário"/>
                                    </div>

                                    <div className="mt-4">
                                        <label htmlFor="senha">Senha</label>
                                        <input className={`mt-2`} name="senha" id="senha" placeholder="Senha do usuário"/>
                                    </div>

                                    <div className="mt-4 d-flex flex-column">
                                        <label htmlFor="cargo">Cargo</label>
                                        <select className={`mt-2`} name="cargo" id="cargo" placeholder="Cargo do usuário">
                                            <option value="cliente">Cliente</option>
                                            <option value="colaborador">Colaborador</option>
                                            <option value="admin">Administrador</option>
                                        </select>
                                    </div>

                                    <div className="mt-4">
                                        <button className="button">Cadastrar</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}