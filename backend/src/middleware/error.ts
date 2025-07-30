import { Request, Response, NextFunction } from 'express';
import { showError } from '../utils/error';

export const errorHandler = (err: unknown, _req: Request, res: Response, _next: NextFunction) => {
    showError(err, res);
};
