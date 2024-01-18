import { User, UserRole } from '@prisma/client';
import { type DefaultSession } from 'next-auth';

export type ExtendedUser = User &
  DefaultSession['user'] & {
    role: UserRole;
    isTwoFactorEnabled: boolean;
    isOAuth: boolean;
  };

declare module 'next-auth' {
  interface Session {
    user: ExtendedUser;
  }
}
