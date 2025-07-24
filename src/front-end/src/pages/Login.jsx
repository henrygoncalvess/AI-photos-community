import "@/css/global.css";
import { Link } from "react-router-dom";
import styles from "@/css/login.module.css";
import Footer from "../components/Footer/Footer";

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
        <Footer mainColor={"white"} hoverColor={"#78c0ff"} />
      </div>
    </>
  );
}

export default Login;
