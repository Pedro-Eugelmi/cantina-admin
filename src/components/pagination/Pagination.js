import styles from './pagination.module.css';

const Pagination = ({handlePaginationClick, current, total}) => {
    console.log(current);
    console.log(total);



    return (
        <nav className={styles.pagination}>
            
            {current !== 1 && <button onClick={handlePaginationClick} value={1} className={`${styles.page_button} pagination-button`}>&lt;</button>}

            {(() => {
                const buttons = [];
                for(let i = 1; i <= total; i++) {
                    buttons.push(
                        <button
                            key={i}
                            value={i}
                            onClick={handlePaginationClick}
                            className={`${styles.page_button} pagination-button ${current === i ? styles.active : ''}`} >
                            {i}
                        </button>
                    );
                }
                return buttons;
            })()}

            {current !== total && <button onClick={handlePaginationClick} value={total} className={`${styles.page_button} pagination-button`}>&gt;</button>}    
    </nav>
    )
}

export default Pagination;