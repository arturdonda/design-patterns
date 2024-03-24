import { User } from './user';

export class ChatRoom {
	private users: User[] = [];

	addUser(...users: User[]) {
		users.forEach(user => {
			this.users.push(user);
			user.setChatRoom(this);
		});
	}

	listUsers() {
		this.users.forEach(user => console.log(user.username));
	}

	sendMessage({ from, to, message }: { from: string; to?: string; message: string }) {
		const sender = this.users.find(u => u.username === from);
		const receiver = this.users.find(u => u.username === to);

		if (!sender) throw new Error('Sender not found!');

		if (receiver) {
			receiver.receiveMessage(sender.username, message);
		} else {
			this.users.filter(u => u.username !== from).forEach(u => u.receiveMessage(sender.username, message));
		}
	}
}
