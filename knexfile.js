module.exports = {
    development: {
      client: 'pg',
      connection: 'postgres://localhost/activities',
      migrations: {
        directory: __dirname + '/db/migrations'
      },
      seeds: {
        directory: __dirname + '/db/seeds/development'
      }
    },
  };
  