import { sign, SignOptions, verify } from 'jsonwebtoken';

const JWT_SECRET = 'trybe';
const JWT_CONFIG: SignOptions = { algorithm: 'HS256', expiresIn: '24h' };

type UserInfo = {
  id: number;
  email: string;
  role: string;
};

export default class TokenHelper {
  static createToken(payload: UserInfo) {
    const token = sign({ payload }, JWT_SECRET, JWT_CONFIG);
    return token;
  }

  static verifyToken(token: string) {
    const auth = verify(token, JWT_SECRET);
    return auth;
  }
}
