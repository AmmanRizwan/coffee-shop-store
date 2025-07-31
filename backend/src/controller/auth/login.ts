import { Request, Response, NextFunction } from 'express';

import { Customer } from '../../model';
import { comparePassword } from '../../utils/bcrypt';
import { generateToken } from '../../utils/jwt';
import { throwCustomError } from '../../utils/error';

