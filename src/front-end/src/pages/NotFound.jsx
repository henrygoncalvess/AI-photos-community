import styles from "@/css/notfound.module.css";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className={styles["notfound-body"]}>
      <div className={styles["container"]}>
        <h1 className={styles["h1-container"]}>
          <span className={`material-symbols-outlined ${styles["icon"]}`}>
            terminal
          </span>{" "}
          404
        </h1>
        <h2>Página não encontrada</h2>
        <h3>
          Voltar ao{" "}
          <Link to={"/"} className={styles["a"]}>
            Ínicio
          </Link>
        </h3>
      </div>
    </div>
  );
}

export default NotFound;
