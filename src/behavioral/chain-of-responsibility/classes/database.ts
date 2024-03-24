import { IDatabase, User } from '../interfaces';

export class Database implements IDatabase {
	private users: User[] = [{ id: 0, name: 'John Doe', status: 'active', email: 'john_doe@gmail.com', password: 'john12345' }];

	get Users() {
		return {
			getById: ({ id }: Pick<User, 'id'>) => {
				return Promise.resolve(this.users.find(u => u.id === id) ?? null);
			},
			getByEmail: ({ email }: Pick<User, 'email'>) => {
				return Promise.resolve(this.users.find(u => u.email === email) ?? null);
			},
		};
	}
}
