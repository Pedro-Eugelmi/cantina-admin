import styles from './header.module.css';
import Logo from '../../assets/logo.png';
import Sidebar from '../Sidebar/Sidebar'
import { useState } from 'react';

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () =>{
        setIsSidebarOpen(!isSidebarOpen)
    }

    return (
        <>
            <header className={styles.header}>
                <div className={'container py-3'}>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h1 className={styles.header_title}>Cantina</h1>

                        <div>
                            <img src={Logo} alt="Instituto Federal - Campus Birigui"/>
                        </div>    

                        <button aria-label="Abrir menu" onClick={toggleSidebar}>
                            <svg width="44" height="34" viewBox="0 0 54 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 43.5V36.3333H54V43.5H0ZM0 25.5833V18.4167H54V25.5833H0ZM0 7.66667V0.5H54V7.66667H0Z" fill="white"/></svg>
                        </button>
                        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar}/>        

                    </div>
                </div>   
                <div className={styles.header_bottom}>
                </div>
            </header>
        </>
    )
}