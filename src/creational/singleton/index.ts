import { randomUUID } from 'crypto';

class Database {
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

const database1 = Database.getInstance();
const database2 = Database.getInstance();

console.log(database1.uuid === database2.uuid); // true
