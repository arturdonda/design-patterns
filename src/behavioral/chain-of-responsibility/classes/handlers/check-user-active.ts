import { UserLoginHandler, UserLoginHandlerParams } from '../../interfaces';

export class CheckIfUserIsActive extends UserLoginHandler {
	async handle(request: UserLoginHandlerParams) {
		console.log('Checking if User is active...');

		if (request.user?.status === 'inactive') throw new Error('User account is inactive');

		return super.next(request);
	}
}
