import { User } from './user';

export interface IDatabase {
	Users: {
		getById: (params: Pick<User, 'id'>) => Promise<User | null>;
		getByEmail: (params: Pick<User, 'email'>) => Promise<User | null>;
	};
}
