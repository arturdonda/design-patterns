import { Handler, User } from '.';

export type UserLoginHandlerParams = { email: string; password: string; user?: User; accessToken?: string; refreshToken?: string };

export abstract class UserLoginHandler extends Handler<UserLoginHandlerParams, true> {}
