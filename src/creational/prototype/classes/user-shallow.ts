import { IPrototype } from '../interfaces';
import { Address } from '.';

export class UserShallow implements IPrototype<UserShallow> {
	name: string;
	email: string;
	address: Address;

	private _isEmailVerified: boolean = false;

	constructor(name: string, email: string, address: Address) {
		this.name = name;
		this.email = email;
		this.address = address;
	}

	get isEmailVerified() {
		return this._isEmailVerified;
	}

	verifyEmail() {
		this._isEmailVerified = true;
	}

	clone(): UserShallow {
		const user = new UserShallow(this.name, this.email, this.address);

		user._isEmailVerified = this._isEmailVerified;

		return user;
	}
}
