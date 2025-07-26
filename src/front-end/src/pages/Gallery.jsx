import "@/css/global.css";
import styles from "@/css/gallery.module.css";
import Footer from "@/components/Footer/Footer";
import Button from "../components/Button/Button";
import { Link } from "react-router-dom";

function Gallery() {
  return (
    <>
      <div className={"global-body"}>
        <div className={styles["container"]}>
          <Link to={"/"}>
            <Button
              type=""
              additionalStyles={{
                margin: "20px 0 0",
                padding: "0 20px",
              }}
            >
              {" "}
              voltar
            </Button>
          </Link>
          <div className={`${styles["container-images"]} grid-content`}>
            <div className={styles["user-generated"]}>
              <div className={styles["user-info"]}>
                <h3 className={styles["username"]}>David</h3>
                <div className={styles["user-icon"]}>😁</div>
              </div>
              <div className={styles["user-prompt"]}>
                <p>usuários dando uma estrela pro meu repositório do github</p>
              </div>
              <div className={styles["image-wrapper"]}>
                <img src="/images/generated/star.jpeg" />
              </div>
            </div>
            <div className={styles["user-generated"]}>
              <div className={styles["user-info"]}>
                <h3 className={styles["username"]}>Douglas</h3>
                <div className={styles["user-icon"]}>😜</div>
              </div>
              <div className={styles["user-prompt"]}>
                <p>
                  crianças brincando de esconde-esconde em uma sala com vidros
                  transparentes
                </p>
              </div>
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
