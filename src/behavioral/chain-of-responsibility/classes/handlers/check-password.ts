import { UserLoginHandler, UserLoginHandlerParams } from '../../interfaces';

export class CheckUserPassword extends UserLoginHandler {
	async handle(request: UserLoginHandlerParams) {
		console.log('Checking User password...');

		if (request.user?.password !== request.password) throw new Error('Invalid password');

		return super.next(request);
	}
}
