# AI-photos-community - não concluído (em processo de refatoração)

> Resultado final (tamanho de imagens modificado para melhor visualização)

![photos-community](project-images/comunidade-de-fotos.png)

<br>

## 📋 Conteúdo

- [Visão Geral](#Overview)
- [Previews](#previews)
- [Tecnologias utilizadas](#techs)
- [Instrução de instalação](#installation)
  - [Pré-requisitos](#prerequisites)
  - [Clonando Repositório](#cloning-repo)
  - [Configuração do Projeto](#config)
    - [Back-End](#back-end)
    - [Front-End](#front-end)
- [Instrução de uso](#use)
- [AI-photos-community endpoints](#photos-community-endpoints)
- [Fluxo de autenticação](#auth-flow)
- [Licença](#license)

<br>

<a name="Overview"></a>
## 🔍 Visão Geral

O sistema desenvolvido é uma plataforma que funciona como uma "comunidade de fotos", onde os usuários podem gerar e compartilhar imagens geradas por uma IA de forma colaborativa. 
Para acessar as funcionalidades, os usuários precisam se autenticar por meio de um sistema de cadastro simples, sign-up e login (registrar e entrar), que inclui a 
verificação de e-mail e a utilização de tokens JWT. Após a autenticação, os usuários conseguem gerar imagens utilizando a API da Stability AI, integrada ao sistema.

O projeto enfrenta uma limitação relacionada ao plano padrão da API da Stability AI, que permite a geração de apenas 8 imagens por usuário, álem de possuir um limite diário de requisições.

Este projeto teve como objetivo principal reunir todos os meus conhecimentos adquiridos até o momento e aplicá-los de maneira prática.

<a name="previews"></a>
## 👀 Previews

<details>
<summary>📄 Documentação das rotas com Scalar API <ins>(Clique para expandir)</ins></summary>
<div align="center">
  
  ![routes-documentation-preview](project-images/documentation-routes.png)
  
</div>
</details>

<details>
<summary>📷 Página inicial <ins>(Clique para expandir)</ins></summary>
<div align="center">
  
  ![home](project-images/home.png)
  
</div>
</details>

<details>
<summary>📷 Página que não existe (rota errada) <ins>(Clique para expandir)</ins></summary>
<div align="center">
  
  ![home](project-images/page-404.png)
  
</div>
</details>

<details>
<summary>📷 Página para se registrar (mostrando erros da validação) <ins>(Clique para expandir)</ins></summary>
<div align="center">
  
  ![sign-up](project-images/sign-up.png)
  
</div>
</details>

<details>
<summary>📷 Página de Login, sem estar registrado <ins>(Clique para expandir)</ins></summary>
<div align="center">
  
  ![login sem registro](project-images/entrar-sem-se-registrar.png)
  
</div>
</details>

<details>
<summary>✉️ Mensagens de e-mail enviado <ins>(Clique para expandir)</ins></summary>
<div align="center">
  
  ![sign-up](project-images/email-novo.png)
  ![sign-up](project-images/email-registrado.png)
  
</div>
</details>

<details>
<summary>✉️ E-mail recebido <ins>(Clique para expandir)</ins></summary>
<div align="center">
  
  ![email recebido](project-images/verificação-de-email.png)
  
</div>
</details>

<details>
<summary>📷 Página de login após e-mail confirmado (com erro de validação) <ins>(Clique para expandir)</ins></summary>
<div align="center">
  
  ![login com registro](project-images/bem-vindo-login.png)
  
</div>
</details>

<details>
<summary>📷 Página do chat após fazer login com sucesso <ins>(Clique para expandir)</ins></summary>
<div align="center">
  
  ![login com sucesso](project-images/pedindo-imagem.png)
  
</div>
</details>

<details>
<summary>🎥 Simulação da geração de uma imagem <ins>(Clique para expandir)</ins></summary>
<div align="center">
  
https://github.com/user-attachments/assets/713c84a2-299f-4f22-a546-3aaf501ee947
  
</div>
</details>

<br>

<a name="techs"></a>
## 🛠️ Tecnologias utilizadas
<a href="https://fastify.dev/docs/latest/Guides/Getting-Started/"><img src="https://img.shields.io/badge/fastify-5.2.0-000000?style=for-the-badge&logo=fastify&logoColor=000000&labelColor=gray"></a> <a href="https://www.typescriptlang.org/docs/"><img src="https://img.shields.io/badge/typescript-5.7.2-3178C6?style=for-the-badge&logo=typescript&logoColor=3178C6&labelColor=gray"></a> <a href="https://zod.dev/"><img src="https://img.shields.io/badge/zod-3.24.1-3E67B1?style=for-the-badge&logo=zod&logoColor=darkblue&labelColor=gray"></a> <a href="https://nodejs.org/pt"><img src="https://img.shields.io/badge/node-22.12.0-5FA04E?style=for-the-badge&logo=node.js&logoColor=5FA04E&labelColor=gray"></a> <a href="https://www.mongodb.com/docs/"><img src="https://img.shields.io/badge/mongodb-6.12.0-47A248?style=for-the-badge&logo=mongodb&logoColor=47A248&labelColor=gray"></a> <a href="https://learning.postman.com/docs/introduction/overview/"><img src="https://img.shields.io/badge/postman-11.28.3-FF6C37?style=for-the-badge&logo=postman&logoColor=FF6C37&labelColor=gray"></a> <a href="https://jwt.io/"><img src="https://img.shields.io/badge/jwt-9.0.2-FD3456?style=for-the-badge&logo=jsonwebtokens&logoColor=cyan&labelColor=black"></a> <a href="https://vite.dev/guide/"><img src="https://img.shields.io/badge/vite-6.0.7-646CFF?style=for-the-badge&logo=vite&logoColor=white&labelColor=gray"></a>

**Insalador de pacotes**:  
<a href="https://docs.npmjs.com"><img src="https://img.shields.io/badge/npm-11.0.0-CB3837?style=for-the-badge&logo=npm&logoColor=CB3837&labelColor=gray"></a>

<br>

<a name="installation"></a>
## ⚙️ Instrução de instalação

<a name="prerequisites"></a>
### 📦 Pré-requisitos
> [!IMPORTANT]
> **Possuir uma "senha de app" do google**  
> [Tutorial para criar uma senha de app](https://support.google.com/accounts/answer/185833?hl=pt-br)

- **Um e-mail comum ou para testes**

- **Criar uma conta (ou entrar com e-mail do google) na Stability AI e anotar a API_KEY do perfil**. [Acessar Stability AI](https://platform.stability.ai/)

> [!caution]
> **Para gerar imagens utilizando a API da Stability AI, o usuário precisa de `"créditos"`. Todo novo usuário**  
> **recebe 25 créditos iniciais para geração de imagens. Além disso, existe um limite de requisições que podem**  
> **ser feitas para o servidor em um determinado período de tempo (Esse limite é importante para evitar sobrecarga**  
> **no servidor e garantir que todos os usuários tenham acesso justo aos recursos). Com o modelo `Stable Image Core`,**  
> **(que está sendo utilizado) que custa 3 créditos por imagem, é possível gerar 8 imagens com os 25 créditos iniciais.**

Para a instalação dos frameworks, middlewares e dependências que possibilitaram a criação do Sistema  
é necessário que você possua as seguintes ferramentas:

- <img src="https://cdn.simpleicons.org/nodedotjs/5FA04E/5FA04E" width=24>&nbsp; **Node.js** - [Tutorial de instalação](https://nodejs.org/pt)

- <img src="https://cdn.simpleicons.org/npm/CB3837/CB3837" width=24>&nbsp; **npm** - [Tutorial de instalação](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

- <img src="https://cdn.simpleicons.org/mongodb/47A248/47A248" width=24>&nbsp; **Mongo DB Atlas** - [Tutorial de configuração](https://www.mongodb.com/pt-br/docs/atlas/)

Para fazer requisições e testar as respostas da API:
- <img src="https://cdn.simpleicons.org/postman/FF6C37/FF6C37" width=24>&nbsp; **Postman** - [Tutorial de instalação](https://www.postman.com/downloads/)

> [!tip]
> Também é possível fazer requisições pela linha de comando. &nbsp;<img src="https://cdn.simpleicons.org/gnubash/000000/ffffff" width=24>  
[Clique aqui](https://www.campuscode.com.br/conteudos/comandos-curl-para-testar-requisicoes-api) para aprender a fazer requisições pelo terminal

<br>

<a name="cloning-repo"></a>
### 💻 Clonando Repositório
No Terminal, certifique de que você está na pasta onde vai ficar o repositório

`repositorios\clonados`
``` bash
git clone https://github.com/henrygoncalvess/AI-photos-community.git
```

<br>

<a name="config"></a>
### ⚙️ Configuração do Projeto

<a name="back-end"></a>
### Back-End

#### 1. inicie a instalação das dependências.

`repositorios\clonados\AI-photos-community\back-end`
``` bash
npm install
```

**2. crie o arquivo `.env` na raiz do projeto.**  
**configure as variáveis de acordo com seus dados.**  
**utilize a senha de aplicativo que foi criada em** [Tutorial para criar uma senha de app](#pré-requisitos)

`repositorios\clonados\AI-photos-community\back-end`
``` .env
EMAIL = "seu-email@gmail.com"
PASSWORD_EMAIL = "sua senha de aplicativo"
URI_MONGODB = "sua string de conexão do cluster"
DATABASE = "nome do banco de dados"
COLLECTION = "nome da coleção dentro do banco de dados"
JWT_SECRET = "uma senha secreta"
STABILITY_API_KEY = "sua api_key no perfil do Stability AI"
```

<br>

<a name="front-end"></a>
### Front-End

#### 1. inicie a instalação das dependências.

`repositorios\clonados\AI-photos-community\front-end`
``` bash
npm install
```

<br>

<a name="use"></a>
## 📜 Instrução de uso

#### 1. inicie o servidor de back-end em um terminal.

`repositorios\clonados\AI-photos-community\back-end`
``` bash
npm run dev
```

#### 2. inicie o servidor de front-end em outro terminal.

`repositorios\clonados\AI-photos-community\front-end`
``` bash
npm run dev
```

<br>

<a name="photos-community-endpoints"></a>
## 📍 AI-photos-community endpoints

No Postman *ou na linha de comando*  
teste manualmente as respostas da API do sistema seguindo os **endpoints** abaixo.

> [!tip]
> <img src="https://cdn.simpleicons.org/postman/FF6C37/FF6C37" width=24>&nbsp; acesse este link, caso não saiba utilizar o Postman para fazer requisições [Postman](https://learning.postman.com/docs/introduction/overview/) &nbsp;<img src="https://cdn.simpleicons.org/postman/FF6C37/FF6C37" width=24>  
> <img src="https://cdn.simpleicons.org/gnubash/000000/ffffff" width=24>&nbsp; acesse este link, caso não saiba fazer requisições pela linha de comando [Clique aqui](https://www.campuscode.com.br/conteudos/comandos-curl-para-testar-requisicoes-api) &nbsp;<img src="https://cdn.simpleicons.org/gnubash/000000/ffffff" width=24>

#### em seu navegador, acesse [`http://localhost:3000/docs`](http://localhost:3000/docs) para acessar a documentação das rotas

<a name="auth-flow"></a>
## 🔐 Fluxo de autenticação

``` mermaid
---
title: Fluxo de Autenticação
---
sequenceDiagram
    autonumber
    actor c as client
    participant s as server

    note over c,s: /sign-up
    c ->> s: nome, email e senha válidos
    activate s
    s -->> c: cria um token com o nome e envia por e-mail <br> para se verificar na rota "/login?token=abc"
    deactivate s
    s ->> s: criação do hash da senha
    s ->> s: salva informações no banco de dados
    note over c,s: /login

    create participant m as middleware

    c ->> m: clica no link do email e é redirecionado para <br> "/login" com o token recebido
    activate m

    alt token inválido
    m -->> s: erro avisando que o usuário já expirou <br> ou não se registrou ainda
    deactivate m
    activate s
    s -->> c: retorna o erro e mostra mensagem na tela
    deactivate s
    else token válido
    m -->> s: retorna o nome do usuário
    activate s
    s -->> c: retorna o nome, email e id do usuário
    deactivate s
    activate c
    c -->> c: armazena no local storage
    deactivate c
    destroy m
    s -x m: fim da verificação
    end

    note over c,s: /login


    c ->> s: senha
    activate s
    s ->> s: verifica no banco de dados se a senha está correta
    deactivate s

    alt senha incorreta
    s -->> c: erro
    else senha correta
    s -->> c: autentica e redireciona o usuário para "/chat"
    end

    note over c,s: /chat

    c ->> s: envia email
    activate s
    s ->> s: verifica se o usuário já gerou alguma imagem
    deactivate s

    alt já gerou
    s -->> c: dados de todas as imagens, incluindo <br> quem gerou e o que foi pedido
    else não gerou
    s -->> c: avisa que não gerou e é mostrado <br> a tela de geração com IA
    end
```

<br>

<a name="license"></a>
## 📄 Licença

Este projeto está licenciado sob a [MIT License](https://github.com/henrygoncalvess/AI-photos-community/blob/main/LICENSE).

---

<div align="center">
  <p>Feito com ❤️ por <a href="https://github.com/henrygoncalvess">Henry Gonçalves</a></p>
  <p>Deixe uma ⭐ no repositório se ele for útil para você!</p>
</div>
