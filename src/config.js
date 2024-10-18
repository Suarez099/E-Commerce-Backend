import dotenv from "dotenv";

dotenv.config();

export const DB_HOST = process.env.DB_HOST;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_DATABASE = process.env.DB_DATABASE;
export const DB_DIALECT = process.env.DB_DIALECT;
export const DB_TIMEZONE = process.env.DB_TIMEZONE;

export const JWT_SECRET = process.env.JWT_SECRET;

export const CORS_ORIGIN = process.env.CORS_ORIGIN;
export const PORT = process.env.PORT;

export const CLOUD_NAME = process.env.CLOUD_NAME;
export const API_KEY = process.env.API_KEY;
export const API_SECRET = process.env.API_SECRET;
