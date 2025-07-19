function Home() {
  return (
    <>
      <div className="container">
        <div className="glass-container">
          <nav className="navbar">
            <div className="logo">
              <a href="https://github.com/henrygoncalvess/AI-photos-community">
                AI photos community
              </a>
            </div>
            <ul className="nav-links">
              <li className="nav-link">
                <a href="#">Status</a>
              </li>
              <li className="nav-link">
                <a href="#">Entrar</a>
              </li>
            </ul>
          </nav>
          <div className="content">
            <div className="main">
              <h2>&#x2B50; Peça uma imagem à IA</h2>
              <p>
                Veja o que a <b>IA</b> cria e se divirta compartilhando e
                vizualizando o que outras pessoas também criaram. Clique no
                botão abaixo para criar sua conta e gerar uma imagem
              </p>
              <button className="register-button">Criar Conta</button>
            </div>
            <div className="image-wrapper">
              <img src="/images/home-img.png" />
            </div>
          </div>
        </div>
      </div>
      <footer>
        <a className="copyright" href="https://github.com/henrygoncalvess">
          &copy; Henry Gonçalves
        </a>
      </footer>
    </>
  );
}

export default Home;
