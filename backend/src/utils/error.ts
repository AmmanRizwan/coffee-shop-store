import { Response } from 'express';
import { ValidationError, DatabaseError } from 'sequelize';

interface CustomError extends Error {
  statusCode: number;
}

const throwCustomError = (statusCode: number, message: string) => {
  const error: CustomError = new Error(message) as CustomError;
  error.statusCode = statusCode;
  throw error;
};

const showError = (error: unknown, res: Response) => {
  if (error instanceof ValidationError) {
    return res.status(400).json({
      message: error.message,
    });
  }

  if (error instanceof DatabaseError) {
    return res.status(500).json({
      message: 'Database error occurred',
      details: error.message,
    });
  }

  if (typeof error === 'object' && error !== null && 'message' in error) {
    const customError = error as CustomError;
    const statusCode = customError.statusCode || 500;
    return res.status(statusCode).json({
      message: customError.message,
    });
  }

  return res.status(500).json({
    message: 'Internal server error',
  });
};

export { throwCustomError, showError };
