import Sequilze from "sequelize";
import { PSQL_DB_NAME, PSQL_USER_NAME, PSQL_USER_PASSWORD } from "../config.js";

export const sequelize = new Sequilze(
  PSQL_DB_NAME,
  PSQL_USER_NAME,
  PSQL_USER_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
  }
);
