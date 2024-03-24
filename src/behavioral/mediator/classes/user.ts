import { ChatRoom } from './chat-room';

export class User {
	readonly username: string;
	private chatRoom?: ChatRoom;

	constructor(username: string) {
		this.username = username;
	}

	setChatRoom(chatRoom: ChatRoom) {
		this.chatRoom = chatRoom;
	}

	sendMessage(message: string, to?: string) {
		this.chatRoom?.sendMessage({ from: this.username, to, message });
	}

	receiveMessage(sender: string, message: string) {
		console.log(`${this.username} receive message from ${sender}: ${message}`);
	}
}
