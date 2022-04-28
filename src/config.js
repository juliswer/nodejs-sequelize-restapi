import { config } from "dotenv";
config();

export const PORT = process.env.PORT
export const PSQL_DB_NAME = process.env.PSQL_DB_NAME
export const PSQL_USER_NAME = process.env.PSQL_USER_NAME
export const PSQL_USER_PASSWORD = process.env.PSQL_USER_PASSWORD