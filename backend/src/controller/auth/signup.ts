import { Request, Response, NextFunction } from 'express';
import { sequelize } from '../../config/db';
import { Customer, Otp } from '../../model';
import { hashPassword } from '../../utils/bcrypt';
import { throwCustomError } from '../../utils/error';
import { generateToken } from '../../utils/jwt';

const signupV1 = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const transaction = await sequelize.transaction();

  try {
    const { first_name, last_name, email, phone, password } = req.body;

    const customer = await Customer.findOne({
      where: { email: email.toLowerCase() }, transaction
    });

    if (customer) {
      return throwCustomError(400, "Email already is use by another account");
    }

    const customerRecord = await Customer.create({
      first_name,
      last_name,
      email,
      phone,
      password: hashPassword(password)
    },
      {transaction}
    );

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    await Otp.create({
      otp,
      email: customerRecord.dataValues.email,
      phone: customerRecord.dataValues.phone,
      expireAt: new Date(Date.now() + 1000 * 60 * 5)
    },
      {transaction}
    )

    await transaction.commit();

    res
      .status(201)
      .json({ message: "Signup successfully, please check your email for verification"});
  } catch (error) {
    await transaction.commit();
    next(error);
  }
}

export { signupV1 };
