import { Request, Response, NextFunction } from 'express';

import { throwCustomError } from '../utils/error';
import { verifyToken } from '../utils/jwt';

const authMiddleware = (
  req: Request & { customer?: { id: string } },
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return throwCustomError(401, 'Authentication token is missing');
    }

    const [, jwtToken] = token.split('Bearer ');

    if (!jwtToken) {
      return throwCustomError(401, 'Invalid authentication token format');
    }

    const decoded = verifyToken(jwtToken);

    if (!decoded) {
      return throwCustomError(401, 'Invalid authentication token');
    }

    req.customer = decoded as { id: string };
    next();
  } catch (error: unknown) {
    res.status(401).json({
      message: 'Unauthorized',
    });
  }
};

export { authMiddleware };
