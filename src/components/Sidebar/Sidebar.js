import React from "react";
import styles from "./sidebar.module.css"

function Sidebar({isOpen, onClose}){
    return(
        <div className={styles.sidebar}>
            <button onClick={onClose}>
                X
            </button>
            <ul>
                <li>AAAAA</li>
                <li>AAAAA</li>
                <li>AAAAA</li>
            </ul>
        </div>
    )
}

export default Sidebar;