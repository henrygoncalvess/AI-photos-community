# AI-photos-community

descrição

Prévia do projeto: 📷 [ver fotos](project-preview.md) 📷

<br>

**licença e tecnologias utilizadas**:  
<img src="https://img.shields.io/github/license/henrygoncalvess/AI-photos-community?style=for-the-badge&labelColor=gray&color=97ca00"> <a href="https://fastify.dev/docs/latest/Guides/Getting-Started/"><img src="https://img.shields.io/badge/fastify-5.2.0-000000?style=for-the-badge&logo=fastify&logoColor=000000&labelColor=gray"></a> <a href="https://www.typescriptlang.org/docs/"><img src="https://img.shields.io/badge/typescript-5.7.2-3178C6?style=for-the-badge&logo=typescript&logoColor=3178C6&labelColor=gray"></a> <a href="https://zod.dev/"><img src="https://img.shields.io/badge/zod-3.24.1-3E67B1?style=for-the-badge&logo=zod&logoColor=darkblue&labelColor=gray"></a> <a href="https://www.npmjs.com/package/bcrypt"><img src="https://img.shields.io/badge/bcrypt-2.4.3-003A70?style=for-the-badge&logo=letsencrypt&logoColor=darkblue&labelColor=gray"></a> <a href="https://nodejs.org/pt"><img src="https://img.shields.io/badge/node-22.12.0-5FA04E?style=for-the-badge&logo=node.js&logoColor=5FA04E&labelColor=gray"></a> <a href="https://www.mongodb.com/docs/"><img src="https://img.shields.io/badge/mongodb-6.10.0-47A248?style=for-the-badge&logo=mongodb&logoColor=47A248&labelColor=gray"></a> <a href="https://learning.postman.com/docs/introduction/overview/"><img src="https://img.shields.io/badge/postman-11.16.0-FF6C37?style=for-the-badge&logo=postman&logoColor=FF6C37&labelColor=gray"></a> <a href="https://redis.io/"><img src="https://img.shields.io/badge/redis-4.7.0-FF4438?style=for-the-badge&logo=redis&logoColor=FF4438&labelColor=gray"></a> <a href="https://jwt.io/"><img src="https://img.shields.io/badge/jwt-9.0.2-FD3456?style=for-the-badge&logo=jsonwebtokens&logoColor=cyan&labelColor=black"></a> <a href="https://vite.dev/guide/"><img src="https://img.shields.io/badge/vite-6.0.7-646CFF?style=for-the-badge&logo=vite&logoColor=white&labelColor=gray"></a>

**Insalador de pacotes**:  
<a href="https://docs.npmjs.com"><img src="https://img.shields.io/badge/npm-11.0.0-CB3837?style=for-the-badge&logo=npm&logoColor=CB3837&labelColor=gray"></a>

**Ponto de Entrada**:  
<span><img src="https://img.shields.io/badge/server.ts-333333?style=for-the-badge"></span>

**Caminho**:  
<span><img src="https://img.shields.io/badge/back--end/src/server.ts-333333?style=for-the-badge"></span>

<br>

<details open="open">
<summary>Tabela de Conteúdos</summary>
  
- [Instrução de instalação](#instrução-de-instalação)
  - [Pré-requisitos](#pré-requisitos)
  - [Clonando Repositório](#clonando-repositório)
  - [Configuração do Projeto](#configuração-do-projeto)
    - [Back-End](#back-end)
    - [Front-End](#front-end)
- [Instrução de uso](#instrução-de-uso)
- [API Endpoints](#api-endpoints)
  
</details>

<br>

``` mermaid
---
title:  Estrutura de pastas
---
flowchart LR
    sistema("📁 _Sistema_")@{ shape: processes }
    sistema --o back("📁 _back-end_")@{ shape: processes }
    back ---o env("⚙️ .env")
    back --o src("📁 _src_")@{ shape: processes }
    src --o config("📁 _config_")@{ shape: processes }
    config --- db.ts("📄 **db.ts**")@{ shape: card }
    src --o controllers("📁 _controllers_")@{ shape: processes }
    controllers --- authController.ts("📄 **authController.ts**")@{ shape: card }
    src --o middle("📁 _middlewares_")@{ shape: processes }
    middle --- auth.ts("📄 **auth.ts**")@{ shape: card }
    src --o models("📁 _models_")@{ shape: processes }
    models --- authModel.ts("📄 **authModel.ts**")@{ shape: card }
    src --o routes("📁 _routes_")@{ shape: processes }
    routes --- login.ts("📄 **login.ts**")@{ shape: card }
    src --o services("📁 _services_")@{ shape: processes }
    src --o types("📁 _types_")@{ shape: processes }
    services --- email.ts("📄 **email.ts**")@{ shape: card }
    types --- authInterface.ts("📄 **authInterface.ts**")@{ shape: card }
    types --- fastify.ts("📄 **fastify.ts**")@{ shape: card }
    src --o utils("📁 _utils_")@{ shape: processes }
    utils --- encryptAuthUser.ts("📄 **encryptAuthUser.ts**")@{ shape: card }
    src --- app.ts("📄 **app.ts**")@{ shape: card }
    src --- server.ts("📄 **server.ts**")@{ shape: card }
    sistema --o front("📁 _front-end_")@{ shape: processes }
    front --o Fenv("⚙️ .env")
    front ---o public("📁 _public_")@{ shape: processes }
    public --- index.html("📄 **index.html**")@{ shape: card }
    public --- email.html("📄 **email.html**")@{ shape: card }
    public --o css("📁 _css_")@{ shape: processes }
    public --o Fsrc("📁 _src_")@{ shape: processes }
    css --- static.css("📄 **static.css**")@{ shape: card }
    css --- email.css("📄 **email.css**")@{ shape: card }
    Fsrc --- App.js("📄 **App.js**")@{ shape: card }
    Fsrc --- main.js("📄 **main.js**")@{ shape: card }
    Fsrc --o components("📁 _components_")@{ shape: processes }
    Fsrc --o pages("📁 _pages_")@{ shape: processes }
    Fsrc --o Fservices("📁 _services_")@{ shape: processes }
    Fsrc --o Futils("📁 _utils_")@{ shape: processes }
    pages --- index.js("📄 **index.js**")@{ shape: card }
    pages --- email.js("📄 **email.js**")@{ shape: card }
    Fservices --- login.js("📄 **login.js**")@{ shape: card }
    Futils --- validator.js("📄 **validator.js**")@{ shape: card }
    Futils --- messageError.js("📄 **messageError.js**")@{ shape: card }



    %%CLASSES
    classDef default fill:#191919,color:white;
    
    classDef pasta fill:#403211,stroke:#c99e34,stroke-width:2px,color:#fff1cc;

    classDef envStyle fill:#000000,stroke:#000000,color:gray;

    %%aplicação de classes
    class sistema,back,src,config,controllers,middle,models,routes,services,utils,types pasta
    class sistema,front,public,css,Fsrc,components,pages,Fservices,Futils pasta

    class env,Fenv envStyle



    %%LINKS
    
    %%pastas
    linkStyle 0 stroke:#f2c04b

    %%arquivos
    linkStyle default stroke-width:2px;

    click src "https://github.com/henrygoncalvess/API_REST_fastify/tree/main/src"
    click config "https://github.com/henrygoncalvess/API_REST_fastify/tree/main/src/config"
    click db.ts "https://github.com/henrygoncalvess/API_REST_fastify/tree/main/src/config/db.ts"
    click controllers "https://github.com/henrygoncalvess/API_REST_fastify/tree/main/src/controllers"
    click UserController.ts "https://github.com/henrygoncalvess/API_REST_fastify/tree/main/src/controllers/UserController.ts"
    click models "https://github.com/henrygoncalvess/API_REST_fastify/tree/main/src/models"
    click UserModel.ts "https://github.com/henrygoncalvess/API_REST_fastify/tree/main/src/models/UserModel.ts"
    click routes "https://github.com/henrygoncalvess/API_REST_fastify/tree/main/src/routes"
    click Users.ts "https://github.com/henrygoncalvess/API_REST_fastify/tree/main/src/routes/users.ts"
    click types "https://github.com/henrygoncalvess/API_REST_fastify/tree/main/src/types"
    click fastify.ts "https://github.com/henrygoncalvess/API_REST_fastify/tree/main/src/types/fastify.ts"
    click usermodel.ts "https://github.com/henrygoncalvess/API_REST_fastify/tree/main/src/types/usermodel.ts"
    click app.ts "https://github.com/henrygoncalvess/API_REST_fastify/tree/main/src/app.ts"
    click server.ts "https://github.com/henrygoncalvess/API_REST_fastify/tree/main/src/server.ts"
```

<br>

## Instrução de instalação

### Pré-requisitos
Para a instalação dos frameworks, middlewares e dependências que possibilitaram a criação do Sistema  
é necessário que você possua as seguintes ferramentas:

- <img src="https://cdn.simpleicons.org/nodedotjs/5FA04E/5FA04E" width=24>&nbsp; **Node.js** - [Tutorial de instalação](https://nodejs.org/pt)

- <img src="https://cdn.simpleicons.org/npm/CB3837/CB3837" width=24>&nbsp; **npm** - [Tutorial de instalação](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

- <img src="https://cdn.simpleicons.org/redis/FF4438/FF4438" width=24>&nbsp; **REDIS** - [Tutorial de instalação](https://youtu.be/188Fy-oCw4w?si=xYljV44RNw7rg69y) &nbsp;<img src="https://cdn.simpleicons.org/youtube/FF0000/FF0000" width=24>

- <img src="https://cdn.simpleicons.org/mongodb/47A248/47A248" width=24>&nbsp; **Mongo DB Atlas** - [Tutorial de configuração](https://www.mongodb.com/pt-br/docs/atlas/)

Para fazer requisições e testar as respostas da API:
- <img src="https://cdn.simpleicons.org/postman/FF6C37/FF6C37" width=24>&nbsp; **Postman** - [Tutorial de instalação](https://www.postman.com/downloads/)

> [!tip]
> <img src="https://cdn.simpleicons.org/gnubash/000000/ffffff" width=24>&nbsp; Também é possível fazer requisições pela linha de comando. &nbsp;<img src="https://cdn.simpleicons.org/gnubash/000000/ffffff" width=24>  
[Clique aqui](https://www.campuscode.com.br/conteudos/comandos-curl-para-testar-requisicoes-api) para aprender a fazer requisições pelo terminal

<br>

### Clonando Repositório
No Terminal, certifique de que você está na pasta onde vai ficar o repositório

`repositorios\clonados`
``` bash
git clone https://github.com/henrygoncalvess/AI-photos-community.git
```

<br>

### Configuração do Projeto

### Back-End

#### 1. Inicialize o projeto Node.js

`repositorios\clonados\AI-photos-community`
``` bash
npm init
```

#### 2. Adicione o seguinte código ao package.json:

`repositorios\clonados\AI-photos-community\package.json`
``` json
"scripts": {
  "dev": "tsx --watch src/server.ts"
},
"dependencies": {
  "fastify": "5.2.0",
  "fastify-type-provider-zod": "4.0.2",
  "@fastify/cors": "10.0.1",
  "zod": "3.24.1",
  "@fastify/swagger": "9.4.0",
  "@scalar/fastify-api-reference": "1.25.100"
},
"devDependencies": {
  "typescript": "5.7.2",
  "@types/node": "22.10.2",
  "tsx": "4.19.2"
}
```

#### 3. com as dependências listadas em `package.json`, inicie a instalação.

`repositorios\clonados\AI-photos-community`
``` bash
npm install
```

#### 4. Inicialize o TypeScript e configure o arquivo `tsconfig.json`.

`repositorios\clonados\AI-photos-community`
``` bash
npx tsc --init
```

#### 5. Atualize o `tsconfig.json` com as seguintes configurações básicas:
_este padrão de arquivo typescript está de acordo com esta [documentação](https://github.com/tsconfig/bases)_  
_baseado na versão node utilizada_

`repositorios\clonados\AI-photos-community\tsconfig.json`
``` json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "display": "Node 22",
  "_version": "22.0.0",

  "compilerOptions": {
    "lib": ["es2023"],
    "module": "node16",
    "target": "es2022",

    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "moduleResolution": "node16"
  }
}
```

<br>

### Front-End

#### 1. Inicialize o projeto Node.js

<br>

## Instrução de uso

Antes de fazer requisições para a API, inicie o servidor local.

`repositorios\clonados\AI-photos-community`
``` bash
npm run dev
```

<br>

## API Endpoints

No Postman *ou na linha de comando*  
teste as respostas da API do sistema seguindo os **endpoints** abaixo.

> [!tip]
> <img src="https://cdn.simpleicons.org/postman/FF6C37/FF6C37" width=24>&nbsp; acesse este link, caso não saiba utilizar o Postman para fazer requisições [Postman](https://learning.postman.com/docs/introduction/overview/) &nbsp;<img src="https://cdn.simpleicons.org/postman/FF6C37/FF6C37" width=24>  
> <img src="https://cdn.simpleicons.org/gnubash/000000/ffffff" width=24>&nbsp; acesse este link, caso não saiba fazer requisições pela linha de comando [Clique aqui](https://www.campuscode.com.br/conteudos/comandos-curl-para-testar-requisicoes-api) &nbsp;<img src="https://cdn.simpleicons.org/gnubash/000000/ffffff" width=24>

#### em seu navegador, acesse [`http://localhost:3000/docs`](http://localhost:3000/docs) para acessar a documentação das rotas

`PRÉVIA`:

foto
