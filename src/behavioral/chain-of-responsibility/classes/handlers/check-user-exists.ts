import { IDatabase, UserLoginHandler, UserLoginHandlerParams } from '../../interfaces';

export class CheckIfUserExists extends UserLoginHandler {
	constructor(private readonly database: IDatabase) {
		super();
	}

	async handle(request: UserLoginHandlerParams) {
		console.log('Checking if User exists...');

		const user = await this.database.Users.getByEmail({ email: request.email });

		if (!user) throw new Error('Invalid email');

		request.user = user;

		return super.next(request);
	}
}
