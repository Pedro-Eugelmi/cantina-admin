import { Toast } from 'primereact/toast';
import Header from "../../../components/Header/Header";
import {createCategoryService} from "../../../services/categoryService";
import { useEffect, useRef } from 'react';

export default function CreateCategory() {

    const toast = useRef(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        let name = document.getElementById("nome").value;


        let data = {
            "name": name
        };

        let response = await createCategoryService(data);

        if (response.status === 200) {
            if (toast.current) {
                toast.current.show({
                    severity: 'success',
                    summary: 'Categoria cadastrada',
                    detail: 'Categoria cadastrada com sucesso',
                    life: 3000
                });
            }
        } else {
            if (toast.current) {
                toast.current.show({
                    severity: 'error',
                    summary: 'Um erro ocorreu',
                    detail: 'Não foi possível cadastra a categoria',
                    life: 3000
                });
            }
        }

        document.querySelector("#nome").value = "";


    }

    return (
        <>
            <main>
                <Toast ref={toast}/>
                <Header/>

                <section className="container py-5">
                    <div className="row">
                        <form onSubmit={handleSubmit} className="col-12">
                            <div>
                                <input required className="text-input" name="nome" id="nome" type="text" placeholder="Nome da categoria" />
                                <button className="button mt-4" type="submit">Criar categoria</button>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
)
}