import { useEffect } from "react";
import { loginUserService } from "../../services/userService";
import styles from './login.module.css';
import { useNavigate } from "react-router-dom";
import { Toast } from 'primereact/toast';
import { useRef } from 'react'; 
import { useSearchParams } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const toast = useRef(null);

    const [searchParams] = useSearchParams();
    const error = searchParams.get('error');

    useEffect(() => {
        if (error) {
            toast.current.show({
              severity: 'error',
              summary: 'Erro',
              detail: 'Acesso negado. Faça login para continuar.',
              life: 3000
            });
          
        }
      }, [error]);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const data = {
            email: form.email.value,
            password: form.password.value
        };

        toast.current.show({
            severity: 'info',
            summary: 'Fazendo login',
            detail: 'Estamos verificando seus dados...',
            life: 3000
          });

        try {
            await loginUserService(data);
            
            navigate("/pedidos/?login=success");
        } catch (err) {
            toast.current.show({
                severity: 'error',
                summary: 'Falha no login.',
                detail: 'Verifique suas credenciais.',
                life: 3000 
            });
        }

    }

    return (        
        <section className={`${styles.login} d-flex`}>
            <Toast ref={toast} />

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
