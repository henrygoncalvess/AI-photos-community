import "@/css/global.css";
import { Link } from "react-router-dom";
import styles from "@/components/Card/card.module.css";

function Card({
  iconName,
  titleName,
  footerMsg,
  footerMsgLink,
  linkURL,
  children,
}) {
  return (
    <>
      <div className={`${styles["card"]} grid-content`}>
        <div className={styles["logo"]}>
          <span className={`material-symbols-outlined ${styles["icon"]}`}>
            {iconName}
          </span>
        </div>
        <h2 className={styles["h2"]}>{titleName}</h2>
        <form className={styles["form"]}>{children}</form>
        <footer className={styles["footer-form"]}>
          {footerMsg}{" "}
          <Link to={linkURL} className={styles["a"]}>
            {footerMsgLink}
          </Link>
        </footer>
      </div>
    </>
  );
}

export default Card;
