module.exports = {
    test: {
        client: 'pg',
        connection: 'postgres://postgres:postgres@localhost/activities_test',
        migrations: {
          directory: __dirname + '/db/migrations'
        },
        seeds: {
          directory: __dirname + '/db/seeds/test'
        }
      },
    development: {
      client: 'pg',
      connection: {
        host: 'localhost',
        database: 'activities',
        user: 'postgres',
        password: 'postgres'
      },
      migrations: {
        directory: __dirname + '/db/migrations'
      },
      seeds: {
        directory: __dirname + '/db/seeds/development'
      }
    }
};