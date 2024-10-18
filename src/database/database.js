import Sequelize from "sequelize";
import {
  DB_DATABASE,
  DB_PASSWORD,
  DB_USER,
  DB_HOST,
  DB_DIALECT,
  DB_TIMEZONE,
} from "../config.js";

export const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  timezone: DB_TIMEZONE,
});
