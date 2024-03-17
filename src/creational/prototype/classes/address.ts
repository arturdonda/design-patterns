export class Address {
	street: string;
	houseNumber: number;

	constructor(street: string, houseNumber: number) {
		this.street = street;
		this.houseNumber = houseNumber;
	}

	getFullAddress() {
		return `${this.street}, ${this.houseNumber}`;
	}
}
