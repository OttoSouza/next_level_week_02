# REST 
- É o fluxo de requisição e resposta, onde: 
    - Requisição feita pelo cliente - browser acessando uma URL
    - Resposta retorna através de uma estrutura de dados.  
        - Exemplo: processar os dados no banco e retornar esses dados;
    - Cliente recebe resposta e processa resultado;
    - Utilizando JSON linguagem de transferência de dados;

* REQUEST: Obtem dados vindo da requisição, como body, params, query, entre outros
* RESPONSE: Devolve os dados que vem da requisição de maneira tratada, ou seja, depois que os dados passam pelas regras de negocios, o response é responsavel por devolver esses dados.

## Metodos HTTP ou Protocolos

 1. Get: Buscar ou listar uma informação.
 2. Post: Criar uma nova informação.
 3. Put: Atualizar uma informação existente.
 4. Delete: Deletar uma informação existente.

 ## Tipos de Parametros

 1. Query Params:
    * Parametros nomeados.
    * Envia dados na rota por uma "?".
 2. Route Params:
    * Identificar apenas uma entidade no banco de dados (PUT/Delete).
 3. Request Body:
    * Corpo da requisição, criar ou alterar uma informação.

# Frameworks
1. Express: iniciar a aplicação com mais facilidade.
2. Knex: banco de dados. Chamado query build.
3. Ts node dev: deixar a aplicação sempre ativa.

# Banco de dados
1. Knex 
    - Query builder: usar Java script para criar as tabelas. 
    - migrations: controlam a versão do banco de dadas, dentro dela é onde ocorre a criação.
    - O Knex não tem compatibilidade com o typescript, porem pode-se alterar dentro do package.json algumas configurações para funcionar.

2. KnexCLI 
    - Responsavel pelos comandos de criação: 
        - tabelas, 
        - migrations, entre outras. 

3. KnexFile
    - Responsavel por compatilhar e criar os caminhos das migrations, entre outros. 

4. Configurando Package.json
    -  Na aba de Scripts adicionar
        - "knex:migrate": "knex --knexfile knexfile.ts migrate:latest"
        - "knex:rollback": "knex --knexfile knexfile.ts migrate:rollback"
    - O primeiro é para criar as migrations no banco.
    - O segundo seria caso algo der errado, volte.

5. Comandos para executar as migrations
  - yarn knex migrate:make "nome da migration" -x ts 

 # Funcionalidades da Aplicação

 ## Conexões
 - Rota para listar o total de conexões realizadas.
 - Rota para criar uma nova conexão.
 -  

 ## Aulas
 - Rota para criar uma aula.
 - Rota para listar aulas.
    - Filtrar por materia, dia da semana horário.
 