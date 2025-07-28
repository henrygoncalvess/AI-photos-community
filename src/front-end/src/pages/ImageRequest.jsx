import "@/css/global.css";
import styles from "@/css/imageRequest.module.css";
import Footer from "@/components/Footer/Footer";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import { Link } from "react-router-dom";

function ImageRequest() {
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
          <main className={`${styles["main-container"]} grid-content`}>
            <h1 className={styles["title"]}>
              Peça uma imagem à IA <br /> e veja o que ela cria!
            </h1>
            <Input
              type={"text"}
              placeholder={"Cachorro viajando pelo Universo"}
              textAlign={"center"}
              borderColor={"rgba(71, 100, 218, 0.6)"}
            />
            <Button
              type={"submit"}
              additionalStyles={{
                padding: "0 20px",
                margin: "30px 0 0",
                width: "280px",
              }}
            >
              &#x2B50; GERAR IMAGEM &#x2B50;
            </Button>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default ImageRequest;
