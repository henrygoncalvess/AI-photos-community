import "@/css/global.css";
import styles from "@/css/signin.module.css";
import Footer from "@/components/Footer/Footer";
import Card from "@/components/Card/Card";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";

function SignIn() {
  return (
    <>
      <div className={"global-body"}>
        <div className={"container"}>
          <Card
            iconName={"app_registration"}
            titleName={"Criar Conta"}
            footerMsg={"Já possui uma conta?"}
            footerMsgLink={"Entrar"}
            linkURL={"/login"}
          >
            <Input type={"text"} placeholder={"Apelido"} />
            <Input type={"email"} placeholder={"Email"} />
            <Input type={"password"} placeholder={"Senha"} />
            <p className={styles["select-hint"]}>Selecione um Avatar</p>
            <table>
              <tr>
                <td>
                  <img src="/avatars/chicken.png" alt="avatar icon chicken" />
                </td>
                <td>
                  <img src="/avatars/cat.png" alt="avatar icon cat" />
                </td>
                <td>
                  <img src="/avatars/dog.png" alt="avatar icon dog" />
                </td>
              </tr>
              <tr>
                <td>
                  <img src="/avatars/mouse.png" alt="avatar icon mouse" />
                </td>
                <td>
                  <img src="/avatars/owl.png" alt="avatar icon owl" />
                </td>
                <td>
                  <img
                    src="/avatars/panda-bear.png"
                    alt="avatar icon panda-bear"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <img src="/avatars/panda.png" alt="avatar icon panda" />
                </td>
                <td>
                  <img src="/avatars/rabbit.png" alt="avatar icon rabbit" />
                </td>
                <td>
                  <img src="/avatars/shark.png" alt="avatar icon shark" />
                </td>
              </tr>
            </table>
            <a
              className={styles["freepik-link"]}
              href="https://www.flaticon.com/free-icons/animals"
              title="animals icons"
            >
              Animals icons created by Freepik
            </a>
            <Button type={"submit"}>REGISTRAR</Button>
          </Card>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default SignIn;
