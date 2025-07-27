import "@/css/global.css";
import styles from "@/css/gallery.module.css";
import Footer from "@/components/Footer/Footer";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";

function Gallery() {
  return (
    <>
      <div className={"global-body"}>
        <div className={"container"}>
          <div className={styles["grid-button"]}>
            <Link to={"/"}>
              <Button
                type=""
                additionalStyles={{
                  margin: "40px 0 0 60vw",
                  padding: "0 20px",
                }}
              >
                {" "}
                voltar
              </Button>
            </Link>
          </div>
          <div className={`${styles["container-images"]}`}>
            <div className={styles["user-generated"]}>
              <div className={styles["user-info"]}>
                <h3 className={styles["username"]}>David</h3>
                <div className={styles["user-icon"]}>😁</div>
              </div>
              <p className={styles["user-prompt"]}>
                usuários dando uma estrela pro meu repositório do github
              </p>
              <div className={styles["image-wrapper"]}>
                <img src="/images/generated/star.jpeg" />
              </div>
            </div>
            <div className={styles["user-generated"]}>
              <div className={styles["user-info"]}>
                <h3 className={styles["username"]}>Douglas</h3>
                <div className={styles["user-icon"]}>😜</div>
              </div>
              <p className={styles["user-prompt"]}>
                crianças brincando de esconde-esconde em uma sala com vidros
                transparentes
              </p>
              <div className={styles["image-wrapper"]}>
                <img src="/images/generated/kids.jpeg" />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Gallery;
