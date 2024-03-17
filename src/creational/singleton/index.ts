import { Database } from './database';

const database1 = Database.getInstance();
const database2 = Database.getInstance();

console.log(database1.uuid === database2.uuid); // true
