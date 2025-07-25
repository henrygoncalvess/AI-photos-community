import "@/css/global.css";
import Footer from "@/components/Footer/Footer";
import Card from "@/components/Card/Card";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";

function Login() {
  return (
    <>
      <div className={"global-body"}>
        <div className={"container"}>
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
      </div>
    </>
  );
}

export default Login;
