# Micro Service
Responsável por tratar os dados recebidos, usando protobuf para serializar dados, faz toda a lógica recebida da API, se comunica com o banco fazendo todo o tratamento de criação, atualização e delete. Usa protocolo HTTP/2 para a comunicação de requisições.

### Notas
```
    Todo nosso service deve se manter um padrão de escrita, o inglês, para facilitar a leitura e manter uma organização. Seja pastas, arquivos, respostas, etc.
```


## Padrão de pastas

### bin
- Fica o arquivo principal do micro-service (server), o qual rodamos para iniciar o micro-service.

### config/configuration
- Configurações de libs, até mesmos configurações particulares nossa.

### database
- Conexão ou a configuração com o banco podemos deixar nesta pasta.

### tests
- Todo bom service é sempre bem testada antes, então organizamos todos arquivos de nossos testes aqui.

### src
- Todo nosso código, pastas, arquivos que vamos criando ficam nesta pasta.

### DAO
- Arquivos que tratam lógicas com o banco, seja salvar dados, alterar apagar e tratamentos de erros.

### models
- Cada tabela do banco que precisa ser criada ficam nesta pasta.

### services
- Tudo que diz respeito aos nossos micro-services, separado por sub-pastas por questão de organização.
    ### nameExampleService
```
    - As pastas implementation ficam os arquivos que tratam das lógicas do service, se comunica com banco de dados;
    - As pastas pb ficam os arquivos .proto, nela cria os dados que o service deve ter, serializa os dados que serão transmitidos, e as funções indicando o que deve ser recebido e retornado;
    - Arquivo contendo os métodos de cada service.
```

### utils
- Funções que irá ser usar em diversas partes da nossa API.


## Padrão de arquivos

### loader.js
- Percorre a pasta services para retornar dos arquivos .proto os service (Request e Response).

### server.js
- Arquivo principal, onde inicia todo o micro-service, faz a conexão com os arquivos proto, configuração do proto.


# API
Responsável por fazer toda a conexão e comunicação de client e services, atraves das requisições recebidas pelo client envia ao service que fará todo o restante, recebe a resposta do service seja com sucesso ou falha e retorna ao client.

### Notas
```
    Toda nossa API deve se manter um padrão de escrita, o inglês, para facilitar a leitura e manter uma organização. Seja pastas, arquivos, respostas, etc.
```


## Padrão de pastas

### bin
- Fica o arquivo principal da nossa API (app, server), o qual rodamos para iniciar a API.

### config/configuration
- Configurações de libs, até mesmos configurações particulares nossa.

### tests
- Toda boa aplicação é smepre bem testada antes, então organizamos todos arquivos de nossos testes aqui.

### src
- Todo nosso código, pastas, arquivos que vamos criando ficam nesta pasta.

### controllers
- Arquivos separados por entidades, cria os métodos que fazem o controle de requisições recebidas do Front-End e envia para as implementations do service. 

    ### Métodos
    Que devem ser padrões.
    ```
        * index - lista todos dados da requisição, pode ser: usuários, produtos;
        * show - lista apenas um dado referenciado na requisição, normalmente por ID;
        * store - criação dos dados recebidos pela requisição;

        Nota: o restante damos nomes aos métodos específicos a cada função.
    ```

### logs
- Armazena os logs de toda requisição e respostas após acessar cada rota.

### pb
- As pastas pb segue o mesmo modelo da pb do micro-service ficam os arquivos .proto, nela cria os dados que o service deve ter, serializa os dados que serão transmitidos, e as funções indicando o que deve ser recebido e retornado.
    ### loader
   ```
   - Contém o arquivo que carrega os arquivos .proto da pasta pb.
   ```
### router
- Pasta que contém arquivos que fazem o controle de rotas da nossa API.

### services
- Ficam os arquivos que fazem a conxeção da API com o service do Micro-Service, o arquivo .proto com os dados do service.

### utils
- Funções que irá ser usar em diversas partes da nossa API.


## Padrão de arquivos

### app.js
- Arquivo principal, onde inicia toda a API, faz a conexão com rotas, cria porta, e configuramos o express.

### router.js
- Faz o controle das rotas, define o método de cada rota.


### Rotas
- Os caminhos das rotas devem seguir o padrão no plural como por exemplo:
``` 
    GET users/:id
    POST users/login
    PUT users/update/:id
    DELETE users/delete/:id
```


### Arquivos gerais

### .env
- Armazena as váriaveis de ambiente, como por exemplo a porta da API, link de configuração de banco, etc.

### .gitigonre
-

## Código de respostas
- HTTP 200 - OK
- HTTP 201 - Created
- HTTP 400 - Bad Request
- HTTP 401 - Unauthorized 
- HTTP 404 - Not Found
- HTTP 409 - Conflict
- HTTP 500 - Internal Server Error


## Requisitos
- Instale o [NodeJS](https://nodejs.org/en/);
- Instale um banco (MongoDB, MySQL, etc..);

## Bibliotecas
- grpc
- express
- @grpc/proto-loader
