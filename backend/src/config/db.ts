import { Sequelize } from 'sequelize';
import env from './env';

const sequelize = new Sequelize(
  env.DB.NAME as string,
  env.DB.USER as string,
  env.DB.PASSWORD as string,
  {
    host: env.DB.HOST as string,
    port: parseInt(env.DB.PORT as string),
    dialect: 'postgres',
  }
);

export { sequelize };
