import express from 'express';

import FriendsController from '../controllers/friends.controller';

const friendsRouter = express.Router();

friendsRouter.use((req, _, next) => {
	console.log('IP ADDRESS: ', req.ip);
	next();
});

friendsRouter.get('/', FriendsController.getFriends);
friendsRouter.post('/', FriendsController.createFriend);
friendsRouter.get('//:friendId', FriendsController.getFriendById);

export default friendsRouter;
