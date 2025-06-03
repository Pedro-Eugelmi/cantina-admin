import styles from './title.module.css';

export default function Title(props) {
    
    return (
    <div className="container pt-4">
            <div className='col-12'>
                <div className={styles.title_area}>
                    <h1 className={styles.title}>{props.title}</h1>
                </div>
            </div>
        </div>    
    )
}