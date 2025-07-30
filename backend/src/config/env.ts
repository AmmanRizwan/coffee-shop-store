import dotenv from 'dotenv';

dotenv.config();

const {
  PORT,
  NODE_ENV = 'development',
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_HOST,
  DATABASE_PORT,
  JWT_SECRET,
  ALLOWED_ORIGINS,
} = process.env;

if (!PORT) {
  throw new Error('PORT is not set');
}

if (!NODE_ENV) {
  throw new Error('NODE_ENV is not set');
}

if (!DATABASE_NAME) {
  throw new Error('DATABASE_NAME is not set');
}

if (!DATABASE_USER) {
  throw new Error('DATABASE_USER is not set');
}

if (!DATABASE_PASSWORD) {
  throw new Error('DATABASE_PASSWORD is not set');
}

if (!DATABASE_HOST) {
  throw new Error('DATABASE_HOST is not set');
}

if (!DATABASE_PORT) {
  throw new Error('DATABASE_PORT is not set');
}

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not set');
}

if (!ALLOWED_ORIGINS) {
  throw new Error('ALLOWED_ORIGINS is not set');
}

const config = {
  PORT: PORT,
  ENV: NODE_ENV,
  DB: {
    NAME: DATABASE_NAME,
    USER: DATABASE_USER,
    PASSWORD: DATABASE_PASSWORD,
    HOST: DATABASE_HOST,
    PORT: DATABASE_PORT,
  },
  JWT: JWT_SECRET,
  ALLOWED_ORIGINS: ALLOWED_ORIGINS,
};

export default config;
