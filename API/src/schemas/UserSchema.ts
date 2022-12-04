import { z } from 'zod';

const UserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  username: z.string().min(3),
  role: z.string(),
  avatar: z.string(),
});

export default UserSchema;
