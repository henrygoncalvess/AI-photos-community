import { Link } from "react-router-dom";
import PageMsgError from "@/components/PageMsgError/PageMsgError";

function NotFound() {
  const styles = {
    color: "black",
  };

  return (
    <PageMsgError iconName="terminal" titleMsg="404">
      <h2>Página não encontrada</h2>
      <h3>
        Voltar ao{" "}
        <Link to={"/"} style={styles}>
          Ínicio{" "}
        </Link>
      </h3>
    </PageMsgError>
  );
}

export default NotFound;
