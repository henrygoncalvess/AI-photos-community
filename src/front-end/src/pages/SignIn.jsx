import "@/css/global.css";
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
            <Button type={"submit"}>REGISTRAR</Button>
          </Card>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default SignIn;
