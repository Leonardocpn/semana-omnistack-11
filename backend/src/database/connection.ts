import Knex from "knex";
import * as database from "../../knexfile";
export const connection = Knex(database);
