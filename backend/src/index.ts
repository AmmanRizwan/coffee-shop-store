import express, { Request, Response } from 'express';
import cors from 'cors';
import env from './config/env';
import { sequelize } from './config/db';
import cookieParser from 'cookie-parser';
import { errorHandler } from './middleware/error';
import logger from './utils/logger';
import pinoLogger from './middleware/logger';

const port = env.PORT;

const app = express();

app.use(cookieParser());
app.use(pinoLogger);
app.use(
  cors({
    origin: env.ALLOWED_ORIGINS?.split(','),
    allowedHeaders: ['Authorization', 'Content-Type'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTION'],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(errorHandler);

app.get('/health', (req: Request, res: Response) => {
  res.json({ message: 'Server is ready to server' });
});

sequelize
  .sync({ alter: env.ENV === 'development' })
  .then(() => {
    app.listen(port, () => {
      logger.info(`Server is running on port: ${port}`);
    });
  })
  .catch((e: unknown) => {
    console.log(e);
    process.exit(1);
  });
