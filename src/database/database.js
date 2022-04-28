import Sequilze from "sequelize";
import { config } from "dotenv";
config();
const { PSQL_DB_NAME, PSQL_USER_NAME, PSQL_USER_PASSWORD } = process.env;

export const sequelize = new Sequilze(
  PSQL_DB_NAME,
  PSQL_USER_NAME,
  PSQL_USER_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
  }
);
