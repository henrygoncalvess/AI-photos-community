import styles from "@/css/home.module.css";

function Home() {
  return (
    <>
      <div className={styles["container"]}>
        <div className={styles["glass-container"]}>
          <nav className={styles["navbar"]}>
            <div className={styles["logo"]}>
              <a href="https://github.com/henrygoncalvess/AI-photos-community">
                AI photos community
              </a>
            </div>
            <ul className={styles["nav-links"]}>
              <li className={styles["nav-link"]}>
                <a href="#">Status</a>
              </li>
              <li className={styles["nav-link"]}>
                <a href="#">Entrar</a>
              </li>
            </ul>
          </nav>
          <div className={styles["content"]}>
            <div className={styles["main"]}>
              <h2>&#x2B50; Peça uma imagem à IA</h2>
              <p>
                Veja o que a <b>IA</b> cria e se divirta compartilhando e
                vizualizando o que outras pessoas também criaram. Clique no
                botão abaixo para criar sua conta e gerar uma imagem
              </p>
              <button className={styles["register-button"]}>Criar Conta</button>
            </div>
            <div className={styles["image-wrapper"]}>
              <img src="/images/home-img.png" />
            </div>
          </div>
        </div>
      </div>
      <footer>
        <a className={styles[""]} href="https://github.com/henrygoncalvess">
          &copy; Henry Gonçalves
        </a>
      </footer>
    </>
  );
}

export default Home;
