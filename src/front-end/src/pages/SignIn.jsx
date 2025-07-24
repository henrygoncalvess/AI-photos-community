import "@/css/global.css";
import Footer from "@/components/Footer/Footer";
import Card from "@/components/Card/Card";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";

function SignIn() {
  const styles = {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
  };

  return (
    <>
      <div style={styles} className={"global-body"}>
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
          <Button type={"submit"}>REGISTRAR</Button>
        </Card>

        <Footer mainColor={"white"} hoverColor={"#78c0ff"} />
      </div>
    </>
  );
}

export default SignIn;
