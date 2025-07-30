import jwt from "jsonwebtoken";
import env from "../config/env";

const generateToken = (payload: Record<string, unknown>, option: jwt.SignOptions = { }) => {
  return jwt.sign(payload, env.JWT, { expiresIn: "24h", ...option});
}

const verifyToken = (token: string) => {
  return jwt.verify(token, env.JWT);
}

export { generateToken, verifyToken };
