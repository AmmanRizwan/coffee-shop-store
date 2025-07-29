import dotenv from "dotenv";

dotenv.config();

const {
  PORT,
  NODE_ENV = "development",
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_HOST,
  DATABASE_PORT,
  JWT_SECRET
} = process.env;

const config = {
  PORT: PORT,
  ENV: NODE_ENV,
  DB: {
    NAME: DATABASE_NAME,
    USER: DATABASE_USER,
    PASSWORD: DATABASE_PASSWORD,
    HOST: DATABASE_HOST,
    PORT: DATABASE_PORT
  },
  JWT: JWT_SECRET
}

export default config;
