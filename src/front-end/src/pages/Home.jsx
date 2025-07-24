import "@/css/global.css";
import styles from "@/css/home.module.css";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer/Footer";

function Home() {
  return (
    <>
      <div className={styles["body"]}>
        <div className={styles["container"]}>
          <div className={styles["glass-container"]}>
            <nav className={styles["navbar"]}>
              <div className={styles["logo"]}>
                <a
                  className={styles["a"]}
                  href="https://github.com/henrygoncalvess/AI-photos-community"
                >
                  AI photos community
                </a>
              </div>
              <ul className={styles["nav-links"]}>
                <li className={styles["nav-link"]}>
                  <Link to={"/status"} className={styles["a"]}>
                    Status
                  </Link>
                </li>
                <li className={styles["nav-link"]}>
                  <Link to={"/login"} className={styles["a"]}>
                    Entrar
                  </Link>
                </li>
              </ul>
            </nav>
            <div className={styles["content"]}>
              <div className={styles["main"]}>
                <h2 className={styles["h2"]}>&#x2B50; Peça uma imagem à IA</h2>
                <p className={styles["p"]}>
                  Veja o que a <b>IA</b> cria e se divirta compartilhando e
                  vizualizando o que outras pessoas também criaram. Clique no
                  botão abaixo para criar sua conta e gerar uma imagem
                </p>
                <Link to={"/signin"}>
                  <button className={styles["button"]}>Criar Conta</button>
                </Link>
              </div>
              <div className={styles["image-wrapper"]}>
                <img className={styles["img"]} src="/images/home-img.png" />
              </div>
            </div>
          </div>
        </div>
        <Footer mainColor={"white"} hoverColor={"#78c0ff"} />
      </div>
    </>
  );
}

export default Home;
