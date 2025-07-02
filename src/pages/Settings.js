import { useEffect, useRef, useState } from 'react';
import Header from '../components/Header/Header';
import Title from '../components/Title/Title';
import { getOpeningHours, removeOpeningHours } from '../services/settingsService';
import HoursList from '../components/HoursList/HoursList';
import { Toast } from 'primereact/toast';


export default function Settings() {
    const [hours, setHours] = useState([]);
    const toast = useRef(null);

    useEffect( ()=> {
        async function loadOpeningHours() {
            let response = await getOpeningHours();

            if (response.status === 200) {
                setHours(response.data);
            }
        }

        loadOpeningHours();
        
    }, []);

    
    // Função para deletar o horário
    const handleDeleteButton = async (event) => {
        let deleteButtons = document.querySelectorAll(`.hours-list-delete-button`);

        deleteButtons.forEach(button => {
            button.disabled = true;
        });
        
        toast.current.show({
            severity: 'info',
            summary: 'Deletando horário',
            detail: 'O horário está sendo deletado...',
            life: 3000
        });

        let hourId = event.currentTarget.getAttribute('data-remove');

        if (hourId) {
            // Remove o produto
            let data = await removeOpeningHours(hourId);

            if (data.status == 200) {
                toast.current.show({
                    severity: 'success',
                    summary: 'Horário deletado',
                    detail: 'O Horário foi deletado com sucesso!',
                    life: 3000
                });

                // Atualiza a lista de produtos
                const hoursData = await getOpeningHours();
                
                setHours(hoursData.data);
            } else {
                toast.current.show({
                    severity:'error',
                    summary: 'Erro ao deletar horário',
                    detail: 'O horário não pode ser deletado!',
                    life: 3000
                })
            }
        }

        deleteButtons.forEach(button => {
            button.disabled = false;
        });
    }

    return (
        <>
            <Toast ref={toast}/>

            <Header/>
        
            <Title title="Horário de funcionamento" linkbutton="/criar-horario" nameButton="Criar horário"/>

            <HoursList handleDeleteButton={handleDeleteButton} hours={hours}/>

        </>
    )
};