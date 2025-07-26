import styles from "./footer.module.css";

function Footer() {
  return (
    <>
      <footer className={styles["footer-main"]}>
        <a
          className={styles["a"]}
          href="https://github.com/henrygoncalvess"
          style={{ color: "white" }}
        >
          &copy; Henry Gonçalves
        </a>
      </footer>
    </>
  );
}

export default Footer;
