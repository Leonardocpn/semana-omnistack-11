import knex from "knex";

const database = {
  client: "sqlite3",
  connection: {
    filename: "./src/database/db.sqlite"
  },
  migrations: {
    directory: "./src/database/migrations",
    tableName: "knex_migrations"
  },
  useNullAsDefault: true
} as knex.Config;
export = database;
