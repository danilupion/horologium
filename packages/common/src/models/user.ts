import { WithEmail } from '@slangy/common/model/email.js';
import { WithTimestamps } from '@slangy/common/model/timestamps.js';

export enum UserRole {
  user = 'user',
  admin = 'admin',
}

export type User = WithEmail &
  WithTimestamps & {
    username: string;
    role: UserRole;
    timezone: string;
  };
