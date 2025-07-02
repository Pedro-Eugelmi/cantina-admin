import styles from './hoursList.module.css';


export default function HoursList({hours, handleDeleteButton}) {
    console.log(hours);

    function getWeekDay(day) {
        switch (day) {
            case 0:
                return 'Segunda-feira';
            case 1:
                return 'Terça-feira';
            case 2:
                return 'Quarta-feira';
            case 3:
                return 'Quinta-feira';
            case 4:
                return 'Sexta-feira';   
            case 5:
                return 'Sábado';
            case 6:
                return 'Domingo';
            default:
                return 'Dia não identificado';
        }
    }

    return (
        <section className='pt-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>
                                        Dia da semana
                                    </th>
                                    <th>
                                        Abre
                                    </th>
                                    <th>
                                        Fecha
                                    </th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    hours != [] && hours.map((hour, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>
                                                    {getWeekDay(hour.day)}
                                                </td>
                                                <td>
                                                    {hour.open}
                                                </td>
                                                <td>
                                                    {hour.close}
                                                </td>

                                                <td>
                                                 <button data-remove={hour.id} onClick={handleDeleteButton} className={`${styles.deleteButton} hours-list-delete-button`}><svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="currentColor" viewBox="0 0 24 24" ><path d="M17 6V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H2v2h2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8h2V6zM9 4h6v2H9zM6 20V8h12v12z"></path><path d="M9 10h2v8H9zM13 10h2v8h-2z"></path></svg></button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}