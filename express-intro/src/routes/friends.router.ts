import express from 'express';

import FriendsController from '../controllers/friends.controller';

const friendsRouter = express.Router();

friendsRouter.get('/', FriendsController.getFriends);
friendsRouter.post('/', FriendsController.createFriend);
friendsRouter.get('//:friendId', FriendsController.getFriendById);

export default friendsRouter;
