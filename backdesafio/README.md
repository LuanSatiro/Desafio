
# Desafio Back-End


### Requisitos:

```
NodeJs
Mysql
git

```

### Primeiros passos:

```
Navegue até a pasta onde quer clonar o projeto pelo cmd
execute: https://github.com/LuanSatiro/Desafio
execute: yarn install
```

### Segunda etapa: 

```
Na pasta raiz abra a pasta config e o arquivo config.json
altere o usuário e a senha para as credenciais do seu banco Mysql


```
### Terceira etapa: 

```
Realize as migrações necessárias
comandos utilizados
npx sequelize-cli init (Inicia as migrações, já realizado no projeto)
npx sequelize-cli db:create (Cria o database de acordo com o arquivo config.json)
npx sequelize-cli model:generate --name User --attributes name:string,email:string (Cria o model com os valores estipulados, já realizado no projeto)
npx sequelize-cli db:migrate (Realiza a migrações dos dados estipulado para o bd)
npx sequelize-cli seed:generate --name users (Inicia uma semente, pode ser utilizado para testes, já criado no projeto)
npx sequelize-cli db:seed:all (Cria os dados estipulados na semente no banco de dados)
```

### Etapa final: 

```
Execute: nodemon index.js (Dentro da pasta backdesafio)
É possivel testar as rotas pelo postman ou insomnia
