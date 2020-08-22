import knex from 'knex'
import path from 'path'

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, "database.sqlite")
  }, 
  // quando o sqlite nao conseguir definir o conteudo, coloque como nulo 
  useNullAsDefault: true
})

export default db;