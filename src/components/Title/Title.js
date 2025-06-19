import styles from './title.module.css';

export default function Title(props) {
    let linkbutton = props.linkbutton;
    let nameButton = props.nameButton;

    return (
        <div className="container pt-4">
            <div className='col-12'>
                <div className={styles.title_area}>
                    <h1 className={styles.title}>{props.title}</h1>
                    {linkbutton != null && nameButton != null ? <a className={styles.button}
                    href={linkbutton}>{nameButton}</a> : null}       
                </div>
            </div>
        </div>
            
    )
}