import "@/css/global.css";
import Footer from "@/components/Footer/Footer";
import Card from "@/components/Card/Card";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";

function Login() {
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
          iconName={"login"}
          titleName={"Entrar"}
          footerMsg={"Não possui uma conta?"}
          footerMsgLink={"Criar Conta"}
          linkURL={"/signin"}
        >
          <Input type={"email"} placeholder={"Email"} />
          <Input type={"password"} placeholder={"Senha"} />
          <Button type={"submit"}>CONFIRMAR</Button>
        </Card>

        <Footer mainColor={"white"} hoverColor={"#78c0ff"} />
      </div>
    </>
  );
}

export default Login;
