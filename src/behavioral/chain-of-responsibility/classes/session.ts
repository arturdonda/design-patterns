import { User } from '../interfaces';
import { randomUUID } from 'crypto';

export class Session {
	readonly accessToken: string;

	constructor(user: User) {
		this.accessToken = randomUUID();
	}

	generateRefreshToken(): string {
		return randomUUID();
	}
}
