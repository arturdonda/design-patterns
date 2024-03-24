export interface User {
	id: number;
	name: string;
	email: string;
	password: string;
	status: 'active' | 'inactive';
}
