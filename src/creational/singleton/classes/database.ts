import { randomUUID } from 'crypto';

export class Database {
	private static instance: Database | null = null;
	public readonly uuid: string;

	private constructor() {
		this.uuid = randomUUID();
	}

	connect(connectionString: string) {}

	disconnect() {}

	static getInstance(): Database {
		if (this.instance === null) this.instance = new Database();

		return this.instance;
	}
}
