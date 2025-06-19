import React from "react";
import style from "./sidebar.module.css"

const Sidebar = ({isOpen, toggleSidebar}) => {
    return(
        <div className={`${style.sidebar} ${isOpen ? style.open : ''}`}>
            <button onClick={toggleSidebar} className={style.closeBtn}>
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