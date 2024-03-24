import { UserLoginHandler, UserLoginHandlerParams } from '../interfaces';
import { Database } from './database';
import { CheckIfUserExists, CheckIfUserIsActive, CheckUserPassword, GenerateSession } from './handlers';

export class UserLogin {
	private firstHandler: UserLoginHandler;

	constructor() {
		this.firstHandler = new CheckIfUserExists(new Database());

		this.firstHandler.setNextHandler(new CheckUserPassword()).setNextHandler(new CheckIfUserIsActive()).setNextHandler(new GenerateSession());
	}

	handle(params: UserLoginHandlerParams) {
		return this.firstHandler.handle(params);
	}
}
