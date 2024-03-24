import { UserLoginHandler, UserLoginHandlerParams } from '../../interfaces';
import { Session } from '../session';

export class GenerateSession extends UserLoginHandler {
	async handle(request: UserLoginHandlerParams) {
		console.log('Generating Session...');

		if (!request.user) throw new Error('No user received to generate session!');

		const session = new Session(request.user);

		request.accessToken = session.accessToken;
		request.refreshToken = session.generateRefreshToken();

		return request;
	}
}
