import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "center",
        alignContent: "center",
        minHeight: "100vh",
      }}
    >
      <h1>Página não encontrada</h1>
      <h2
        style={{
          flex: "0 1 100%",
          textAlign: "center",
        }}
      >
        Voltar ao <Link to={"/"}>Ínicio</Link>
      </h2>
    </div>
  );
}

export default NotFound;
