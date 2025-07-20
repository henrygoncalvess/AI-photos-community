import "@/css/global.css";
import styles from "@/css/signin.module.css";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <>
      <div className={`global-body ${styles["container"]}`}>
        <div className={styles["card"]}>
          <div className={styles["logo"]}>
            <span className="material-symbols-outlined">app_registration</span>
          </div>
          <h2 className={styles["h2"]}>Criar Conta</h2>
          <form className={styles["form"]}>
            <input
              type="text"
              className={styles["input"]}
              placeholder="Apelido"
            />
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
              REGISTRAR
            </button>
          </form>
          <footer className={styles["footer-form"]}>
            Já possui uma conta?{" "}
            <Link to={"/login"} className={styles["a"]}>
              Entrar
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

export default SignIn;
