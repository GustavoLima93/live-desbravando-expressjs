import knex from 'knex';

const config = {
  client: 'sqlite3',
  connection: {
    filename: './locatech.sqlite'
  },
  useNullAsDefault: false
}

const db = knex(config);

console.log('Conexão com o banco de dados estabelecida 🚁');

export default db;