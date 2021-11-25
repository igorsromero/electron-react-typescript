# electron-todo-list-valore
Projeto desenvolvido como teste para Desenvolvedor Júnior para a empresa Valore Brasil.

## Instalação de dependências

Utilize YARN para instalar todas as dependências:
```
yarn
```

## Rodar Modo Desenvolvedor

O scrip `dev` inicia o projeto em modo desenvolvedor:
```
yarn dev
```

## Rodar para Produção

O script `package` para gerar a build de produção para o sistema operacional atual:
```bash
yarn package
```


## Cenário:

A Valore Tech atualmente está trabalhando em um projeto para um cliente que foi construído em Electron + React + MongoDB, usando Typescript. 
Nesse cenário, você irá trabalhar com um código já existente, dar manutenção em features já implementadas e implementar novas features solicitadas pelo cliente.
Portanto, você deve construir uma aplicação de acordo com esse cenário 🙂.

Requisitos da aplicação:

[x] - A aplicação deve ser construída em Electron (v13.x), usando React (v17.x) e MongoDB (v4.4), usando Typescript (v4.x);

[x] - Você precisa criar uma aplicação de cadastro;

[x] - Considere que o MongoDB esteja instalado localmente, não sendo necessário configurar usuário/senha, e o banco de dados tenha o nome "valore". (A string de conexão de seria: mongodb://localhost:27017/valore);

[x] - Você precisa fazer operações de find, findOne, insert e update no MongoDB.
 

Diferenciais da aplicação:

[x] - Seria bacana se você fizesse essa aplicação baseado no template que nós usamos aqui na Valore! Disponível aqui: https://github.com/brcambui/electron-react-typescript; 

[-] - Usar a API de IPC invoke/handle, ao invés de IPC send/on sempre que possível 🙂;




<details>
<summary>Informações adicionais</summary>

Além de clonar o repositório informado, alguns pacotes extras foram instalados:

Instalação do MongoDB:
```
yarn add mongodb
```

Instalação dos Types do MongoDB:
```
yarn add @types/mongodb
```

Instalação do React-Icons:
```
yarn add react-icons --save
```

</details>


## Licença

[MIT](https://choosealicense.com/licenses/mit/)