import { IPrototype } from '../interfaces';
import { Address } from '.';

export class UserDeep implements IPrototype<UserDeep> {
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

	clone(): UserDeep {
		const address = new Address(this.address.street, this.address.houseNumber);
		const user = new UserDeep(this.name, this.email, address);

		user._isEmailVerified = this._isEmailVerified;

		return user;
	}
}
