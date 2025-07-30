import { compareSync, genSaltSync, hashSync } from 'bcryptjs';

const hashPassword = (password: string): string => {
  const genSalt = genSaltSync(12);
  return hashSync(password, genSalt);
};

const comparePassword = (password: string, hash_password: string): boolean => {
  return compareSync(password, hash_password);
};

export { hashPassword, comparePassword };
