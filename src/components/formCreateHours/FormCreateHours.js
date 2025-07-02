import { useRef } from 'react';
import { addOpeningHours } from '../../services/settingsService';
import styles from './formCreateHours.module.css';
import { Toast } from 'primereact/toast';

export default function FormCreateHours() {
    const toast = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = document.getElementById('addOpeningHours');
        const formData = new FormData(form);

        const data = {
            day: parseInt(formData.get('day')),
            open: formData.get('open'),
            close: formData.get('close')
        };

        let response = await addOpeningHours(data);
        
        if (response.status === 200) {
            toast.current.show({ severity: 'success', summary: 'Sucesso', detail: 'Horário adicionado com sucesso', life: 3000 });    
        }

        form.reset();
      
    }

    return (
        <>
        <Toast ref={toast} />
         <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form onSubmit={handleSubmit} className={styles.form} id="addOpeningHours">

                            <div className="d-flex flex-column">
                                <label htmlFor="day">Dia da semana</label>

                                <select className="mt-3" required id="day" name="day">
                                    <option value="">Selecione</option>
                                    <option value="0">Segunda-feira</option>
                                    <option value="1">Terça-feira</option>
                                    <option value="2">Quarta-feira</option>
                                    <option value="3">Quinta-feira</option>
                                    <option value="4">Sexta-feira</option>
                                    <option value="5">Sábado</option>
                                    <option value="6">Domingo</option>
                                </select>

                            </div>

                            <div className='d-flex gap-5 mt-5'>
                                <div className="w-100 d-flex flex-column">
                                    <label htmlFor="open">Abertura</label>

                                    <input required className={styles.timeInput} type='time' name="open" id="open"/>
                                </div>

                                <div className="w-100 d-flex flex-column">
                                    <label htmlFor="close">Fechamento</label>

                                    <input required className={styles.timeInput} type='time' name="close" id="close"/>
                                </div>

                            </div>

                            <div className='mt-5'>
                                <button type="submit" className="button green">Salvar</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
         </section>
        </>
    );
}