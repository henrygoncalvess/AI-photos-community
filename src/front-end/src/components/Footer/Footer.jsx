import styles from "./footer.module.css";
import { useState } from "react";

function Footer({ mainColor, hoverColor }) {
  const [hover, setHover] = useState(false);

  const dynamicStyles = {
    color: hover ? hoverColor : mainColor,
  };

  return (
    <>
      <footer className={styles["footer-main"]}>
        <a
          className={styles["a"]}
          href="https://github.com/henrygoncalvess"
          style={dynamicStyles}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          &copy; Henry Gonçalves
        </a>
      </footer>
    </>
  );
}

export default Footer;
