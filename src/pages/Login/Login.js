import { useEffect } from "react";
import { loginUserService } from "../../services/userService";
import styles from './login.module.css';
import { useNavigate } from "react-router-dom";

export default function Login() {

    // useEffect(() => {
    //     async function login() {
    //         try {
    //               const response = await loginUserService(data);
    //             console.log(response);
    //         } catch (err) {
    //             console.error(err.message);
    //         }
    //     }

    //     login();
    // }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const data = {
            email: form.email.value,
            password: form.password.value
        };

        try {
            await loginUserService(data);
            Navigate("/pedidos");
        } catch (err) {
            console.error(err.message);
        }

    }

    return (        
        <section className={`${styles.login} d-flex`}>
            <div className="container">
                <div className="row pt-5">
                    <div className="col-12 col-xl-6 mx-auto mt-5">
                        <h1 className={styles.login_title}>Faça seu login</h1>

                        <form onSubmit={handleSubmit} method="post" className={`${styles.login_form} mt-5 d-flex flex-column`}>
                            <label className={styles.login_label}>E-mail</label>
                            <input placeholder="Digite seu e-mail" required className={`${styles.login_input} mt-1`} type="email" name="email" id="email"></input>

                            <label className={`${styles.login_label} mt-4`}>Senha</label>
                            <input placeholder="Digite sua senha" required className={`${styles.login_input} mt-1`} type="password" name="password" id="password"></input>

                            <button className={`${styles.login_button} mt-4`} type="submit">Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
