import { Request, Response } from 'express';
import { friends } from '../data/friends';
import { StatusCode } from '../constants/index';

const getFriends = (_: Request, res: Response) => {
	res.json({ friends });
};

const getFriendById = (req: Request, res: Response) => {
	const friendId = Number(req.params.friendId);
	const friend = friends[friendId];

	if (friend) return res.status(StatusCode.OK).json({ friend });

	res.status(StatusCode.NOT_FOUND).json({ error: 'Friend not found' });
};

const createFriend = (req: Request, res: Response) => {
	if (!req.body.name) {
		return res.status(StatusCode.BAD_REQUEST).json({
			error: 'Name is required',
		});
	}

	const newFriend = {
		id: friends.length,
		name: req.body.name,
	};

	friends.push(newFriend);
	return res.status(StatusCode.CREATED).json({ newFriend });
};

export default { getFriends, getFriendById, createFriend };
