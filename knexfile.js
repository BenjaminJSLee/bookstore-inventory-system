// Update with your config settings.
require('dotenv').config();

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    migrations: {
      directory: __dirname + '/server/knex/migrations',
    },
    seeds: {
      directory: __dirname + '/server/knex/seeds'
    }
  },

  staging: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    migrations: {
      directory: __dirname + '/server/knex/migrations',
    },
    seeds: {
      directory: __dirname + '/server/knex/seeds'
    }
  },

  production: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
    migrations: {
      directory: __dirname + '/server/knex/migrations',
    },
    seeds: {
      directory: __dirname + '/server/knex/seeds'
    }
  }

};
