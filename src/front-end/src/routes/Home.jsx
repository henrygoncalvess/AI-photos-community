import styles from "@/css/home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className={styles["home-body"]}>
        <div className={styles["container"]}>
          <div className={styles["glass-container"]}>
            <nav className={styles["navbar"]}>
              <div className={styles["logo"]}>
                <a
                  className={styles["home-a"]}
                  href="https://github.com/henrygoncalvess/AI-photos-community"
                >
                  AI photos community
                </a>
              </div>
              <ul className={styles["nav-links"]}>
                <li className={styles["nav-link"]}>
                  <Link to={"/status"} className={styles["home-a"]}>
                    Status
                  </Link>
                </li>
                <li className={styles["nav-link"]}>
                  <Link to={"/login"} className={styles["home-a"]}>
                    Entrar
                  </Link>
                </li>
              </ul>
            </nav>
            <div className={styles["content"]}>
              <div className={styles["main"]}>
                <h2 className={styles["home-h2"]}>
                  &#x2B50; Peça uma imagem à IA
                </h2>
                <p className={styles["home-p"]}>
                  Veja o que a <b>IA</b> cria e se divirta compartilhando e
                  vizualizando o que outras pessoas também criaram. Clique no
                  botão abaixo para criar sua conta e gerar uma imagem
                </p>
                <Link to={"/signin"}>
                  <button className={styles["register-button"]}>
                    Criar Conta
                  </button>
                </Link>
              </div>
              <div className={styles["image-wrapper"]}>
                <img
                  className={styles["home-img"]}
                  src="/images/home-img.png"
                />
              </div>
            </div>
          </div>
        </div>
        <footer className={styles["home-footer"]}>
          <a
            className={`${styles["home-a"]} ${styles["copyright"]}`}
            href="https://github.com/henrygoncalvess"
          >
            &copy; Henry Gonçalves
          </a>
        </footer>
      </div>
    </>
  );
}

export default Home;
