import { UserLogin } from './classes';

const userLoginHandler = new UserLogin();

userLoginHandler.handle({ email: 'john_doe@gmail.com', password: 'john12345' }).then(result => console.log('result: ', result));
