import "@/css/global.css";
import styles from "@/css/login.module.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className={`global-body ${styles["container"]}`}>
        <div className={styles["card"]}>
          <div className={styles["logo"]}>
            <span className={`material-symbols-outlined ${styles["icon"]}`}>
              login
            </span>
          </div>
          <h2 className={styles["h2"]}>Entrar</h2>
          <form className={styles["form"]}>
            <input
              type="email"
              className={styles["input"]}
              placeholder="Email"
            />
            <input
              type="password"
              className={styles["input"]}
              placeholder="Senha"
            />
            <button type="submit" className={styles["button"]}>
              ENTRAR
            </button>
          </form>
          <footer className={styles["footer-form"]}>
            Não possui uma conta?{" "}
            <Link to={"/signin"} className={styles["a"]}>
              Criar Conta
            </Link>
          </footer>
        </div>
        <footer className="footer-main">
          <a className={styles["a"]} href="https://github.com/henrygoncalvess">
            &copy; Henry Gonçalves
          </a>
        </footer>
      </div>
    </>
  );
}

export default Login;
