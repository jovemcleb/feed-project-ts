import {prisma} from '../prisma/prismaClient';
import TokenHelper from '../helpers/tokenHelper';
import { IUser } from '../interfaces/IUser';

export default class LoginService {
  login = async (email: string, password: string) => {
    const User = await prisma.user.findUnique({ where: { email }}) as IUser | null;
    

    if (!User) return { message: 'User not found' };

    const token = TokenHelper.createToken({
      id: User.id,
      email: User.email,
      role: User.role
    });
    
    return { token }; 
  }
}