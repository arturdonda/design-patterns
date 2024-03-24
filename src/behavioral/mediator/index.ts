import { ChatRoom, User } from './classes';

const user1 = new User('batman');
const user2 = new User('superman');
const user3 = new User('flash');

const chatRoom = new ChatRoom();

chatRoom.addUser(user1, user2, user3);

chatRoom.listUsers();

user1.sendMessage('Hi guys');

user2.sendMessage('Who this guy thinks he is?', 'flash');

user3.sendMessage(`I know, right? He doesn't even have real superpowers!`, 'superman');
