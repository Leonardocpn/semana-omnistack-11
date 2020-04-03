import Knex from "knex";
import database from "../../knexfile";
import { testeDb } from "../../knexfile";

const config = process.env.NODE_ENV === "test" ? testeDb : database;
export const connection = Knex(config);
