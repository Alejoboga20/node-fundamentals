import express from 'express';
import { friends } from './data/friends';
import MessagesController from './controllers/messages.controller';
import FriendsController from './controllers/friends.controller';

/* Create Express App */
const app = express();

/* Middlewares */
app.use((req, _, next) => {
	const start = Date.now();
	next();

	const delta = Date.now() - start;
	console.log(`request: ${req.method} ${req.path}, delta time: ${delta}`);
});

app.use(express.json());

/* APIs */
app.get('/friends', FriendsController.getFriends);

app.post('/friends', FriendsController.createFriend);

app.get('/friends/:friendId', FriendsController.getFriendById);

app.get('/messages', MessagesController.getMessages);

/* Start Server */
app.listen(PORT, () => console.log(`express app listening on port ${PORT}!`));
