// Update with your config settings.

// Assigining values to 'module.exports' allows code to be loaded with the  'require' function. This is only
// possible in node. The value that is assigned to 'module.exports' is the value that will be returned when this file is
// required (i.e. 'require('./knexfile.js')')

// kne will require this file to retrieve information about how it should configure itself. If nothing export, knex will know nothing
// about the db it's working with.

const sharedConfig = {
  client: 'postgresql',
  migrations: {
    tableName: 'knex_migrations',
    directory: './db/migrations'
  }
}

module.exports = {

  development: {
    // client: 'postgresql',

// spread the content when used inside a object declaration will take all properties of the object that follows '...' and add to the object being declared. In this case, allow
// properties of 'sharedConfig' are added to this object assinged to 'development' property
    ...sharedConfig,
    connection: {
      // filename: './dev.sqlite3'
      database: 'fotorol_dev'
    }
    // migrations: {
    //   tableName: 'knex_migrations',
    //   directory: '/.db/migrations'
    // }
  },

  staging: {
    // client: 'postgresql',
    ...sharedConfig,
    connection: {
      database: 'fotoral_staging',
      // user:     'username',
      // password: 'password'
    },
    // pool: {
    //   min: 2,
    //   max: 10
    // },
    // migrations: {
    //   tableName: 'knex_migrations'
    // }
  },

  production: {
    // client: 'postgresql',
    ...sharedConfig,
    connection: {
      database: 'fotorol_production',
      // user:     'username',
      // password: 'password'
    },
    // pool: {
    //   min: 2,
    //   max: 10
    // },
    // migrations: {
    //   tableName: 'knex_migrations'
    // }
  }

};
